import { Injectable } from '@nestjs/common';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StorageService {
  constructor(private prisma: PrismaService) {
  }
  create(createStorageDto: CreateStorageDto) {
    return this.prisma.storage.createMany({data:createStorageDto})
  }
  findAll() {
    return this.prisma.storage.findMany();
  }
  findOne(id: number) {
    return `This action returns a #${id} storage`;
  }
  update(id: number, updateStorageDto: UpdateStorageDto) {
    return `This action updates a #${id} storage`;
  }
  remove(id: number) {
    return `This action removes a #${id} storage`;
  }
}
