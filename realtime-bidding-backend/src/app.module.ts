import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { BidsModule } from './bids/bids.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'auction',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ItemsModule,
    BidsModule,
  ],
})
export class AppModule {}
