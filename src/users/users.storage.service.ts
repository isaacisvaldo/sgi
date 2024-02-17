import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserStorageDto } from './dto/userStorage';

@Injectable()
export class UsersStorageService {
  constructor(private prisma: PrismaService) {

  }
  create(createUserStorageDto: any) { //CreateUserStorageDto o dto esta a dar bug
    return this.prisma.userStorage.create({data:createUserStorageDto})
  }
  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
