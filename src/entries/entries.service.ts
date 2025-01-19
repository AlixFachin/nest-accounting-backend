import { Injectable } from '@nestjs/common';
import { Entry } from './entries.types';

@Injectable()
export class EntriesService {
  private readonly entries: Entry[] = [];

  findAll(): Entry[] {
    return this.entries;
  }

  findOne(id: string): Entry {
    return this.entries.find((entry) => entry.id === id);
  }

  create(entry: Entry) {
    this.entries.push(entry);
  }

  update(id: string, updatedEntry: Entry) {
    const index = this.entries.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      this.entries[index] = updatedEntry;
    }
  }

  remove(id: string) {
    const index = this.entries.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      this.entries.splice(index, 1);
    }
  }
}
