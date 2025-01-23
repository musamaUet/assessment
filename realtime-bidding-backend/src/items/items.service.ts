// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async createItem(itemData: Partial<Item>): Promise<Item> {
    const item = this.itemRepository.create(itemData);
    return this.itemRepository.save(item);
  }

  async getAllItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }
}
