import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@Injectable()
@WebSocketGateway({ cors: true })
export class NotificationService {
  @WebSocketServer()
  private server: Server;

  constructor(
    @InjectRepository(Notification)
    private notificationRepo: Repository<Notification>,
  ) {}

  async sendNotification(userId: number, message: string) {
    const notification = this.notificationRepo.create({
      user: { id: userId },
      message,
    });
    await this.notificationRepo.save(notification);
    this.server.emit(`notification_${userId}`, { message });
  }
}
