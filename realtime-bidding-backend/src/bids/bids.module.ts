import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidsService } from './bids.service';
import { BidsController } from './bids.controller';
import { Bid } from './bid.entity';
import { Item } from '../items/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bid, Item])],
  providers: [BidsService],
  controllers: [BidsController],
})
export class BidsModule {}
