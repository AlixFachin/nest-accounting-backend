import { Injectable } from '@nestjs/common';
import { Account } from './accounts.types';

@Injectable()
export class AccountsService {
  private readonly accounts: Account[] = [];

  findAll(): Account[] {
    return this.accounts;
  }

  findOne(id: string): Account {
    return this.accounts.find((account) => account.id === id);
  }

  create(account: Account) {
    this.accounts.push(account);
  }

  update(id: string, updatedAccount: Account) {
    const index = this.accounts.findIndex((account) => account.id === id);
    if (index !== -1) {
      this.accounts[index] = updatedAccount;
    }
  }

  remove(id: string) {
    const index = this.accounts.findIndex((account) => account.id === id);
    if (index !== -1) {
      this.accounts.splice(index, 1);
    }
  }
}
