import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Item } from '../items/item.entity';

@Entity()
export class Bid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number; // Hardcoded users

  @Column('decimal')
  amount: number;

  @CreateDateColumn()
  placedAt: Date;

  @ManyToOne(() => Item, (item) => item.bids, { onDelete: 'CASCADE' })
  item: Item;
}
