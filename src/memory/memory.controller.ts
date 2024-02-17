import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemoryService } from './memory.service';
import { CreateMemoryDto } from './dto/create-memory.dto';
import { UpdateMemoryDto } from './dto/update-memory.dto';

@Controller('memory')
export class MemoryController {
  constructor(private readonly memoryService: MemoryService) {}

  @Post()
  create(@Body() createMemoryDto: CreateMemoryDto) {
    return this.memoryService.create(createMemoryDto);
  }

  @Get()
  findAll() {
    return this.memoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemoryDto: UpdateMemoryDto) {
    return this.memoryService.update(+id, updateMemoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memoryService.remove(+id);
  }
}
