import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from './bid.entity';
import { Item } from '../items/item.entity';

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Bid)
    private readonly bidsRepository: Repository<Bid>,
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  async placeBid(itemId: number, userId: number, amount: number): Promise<Bid> {
    const item = await this.itemsRepository.findOne({
      where: { id: itemId },
      relations: ['bids'],
    });

    if (!item) {
      throw new BadRequestException('Item not found');
    }

    const currentTime = new Date();
    const auctionEndTime = new Date(
      item.createdAt.getTime() + item.duration * 1000,
    );

    if (currentTime > auctionEndTime) {
      throw new BadRequestException('The auction has ended');
    }

    const highestBid = item.bids.reduce(
      (max, bid) => (bid.amount > max ? bid.amount : max),
      item.startingPrice,
    );

    if (amount <= highestBid) {
      throw new BadRequestException(
        `Bid must be higher than the current highest bid (${highestBid})`,
      );
    }

    const bid = this.bidsRepository.create({ userId, amount, item });
    return this.bidsRepository.save(bid);
  }

  async getBidsForItem(itemId: number): Promise<Bid[]> {
    return this.bidsRepository.find({
      where: { item: { id: itemId } },
      order: { placedAt: 'DESC' },
    });
  }
}
