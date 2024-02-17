import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { StorageModule } from './storage/storage.module';
import { MemoryModule } from './memory/memory.module';

@Module({
  imports: [UsersModule, PrismaModule, StorageModule, MemoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
