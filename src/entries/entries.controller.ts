import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { EntriesService } from './entries.service';
import { Entry } from './entries.types';

@Controller('entries')
export class EntriesController {
  constructor(private entriesService: EntriesService) {}

  @Get()
  findAll(): Entry[] {
    return this.entriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Entry {
    return this.entriesService.findOne(id);
  }

  @Post()
  create(@Body() entry: Entry) {
    this.entriesService.create(entry);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() entry: Entry) {
    this.entriesService.update(id, entry);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.entriesService.remove(id);
  }
}
