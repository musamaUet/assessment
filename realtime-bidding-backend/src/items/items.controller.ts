// src/items/items.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  createItem(@Body() itemData: Partial<Item>): Promise<Item> {
    return this.itemsService.createItem(itemData);
  }

  @Get()
  getAllItems(): Promise<Item[]> {
    return this.itemsService.getAllItems();
  }
}
