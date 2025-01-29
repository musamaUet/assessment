import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { BidsModule } from './bids/bids.module';
import { SocketGateway } from './services/socket.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'postgres', // Docker service name
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'password',
      database: process.env.POSTGRES_DB || 'bids-dev',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Disable in production
    }),
    SocketGateway,
    ItemsModule,
    BidsModule,
  ],
})
export class AppModule {}
