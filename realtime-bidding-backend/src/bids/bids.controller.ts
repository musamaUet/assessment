import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { BidsService } from './bids.service';
import { Bid } from './bid.entity';

@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) {}

  @Post(':itemId')
  async placeBid(
    @Param('itemId') itemId: number,
    @Body('userId') userId: number,
    @Body('amount') amount: number,
  ): Promise<Bid> {
    return this.bidsService.placeBid(itemId, userId, amount);
  }

  @Get(':itemId')
  async getBidsForItem(@Param('itemId') itemId: number): Promise<Bid[]> {
    return this.bidsService.getBidsForItem(itemId);
  }
}
