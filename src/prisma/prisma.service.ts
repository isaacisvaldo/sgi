import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async  onModuleInit() {
       await this.$connect()
    }
    enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
          console.log('Handling beforeExit event...');
          await app.close();
          console.log('Application closed successfully.');
        });
      }
}
