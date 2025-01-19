import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.types';

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Get()
  findAll(): Account[] {
    return this.accountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Account {
    return this.accountsService.findOne(id);
  }

  @Post()
  create(@Body() account: Account) {
    this.accountsService.create(account);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() account: Account) {
    this.accountsService.update(id, account);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.accountsService.remove(id);
  }
}
