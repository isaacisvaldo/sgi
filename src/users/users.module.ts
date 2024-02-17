import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersStorageService } from './users.storage.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService,UsersStorageService],
})
export class UsersModule {}
