/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body, Param, Get, UseGuards } from '@nestjs/common';
import { BidsService } from './bids.service';
import { Bid } from './bid.entity';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/decorators/user.decorator';

@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) {}

  @Post(':itemId')
  @UseGuards(AuthGuard('jwt'))
  async placeBid(
    @Param('itemId') itemId: number,
    @Body('amount') amount: number,
    @User('id') userId: number,
  ): Promise<Bid> {
    return this.bidsService.placeBid(itemId, userId, amount);
  }

  @Get(':itemId')
  @UseGuards(AuthGuard('jwt'))
  async getBidsForItem(
    @Param('itemId') itemId: number,
    @User('id') userId: number,
  ): Promise<Bid[]> {
    return this.bidsService.getBidsForItem(itemId);
  }
}
