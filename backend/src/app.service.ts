import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Counter } from './counter.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Counter)
    private counterRepo: Repository<Counter>,
  ) {}

  async getCounter() {
    let counter = await this.counterRepo.findOneBy({ id: 1 });
    if (!counter) {
      counter = this.counterRepo.create({ id: 1, value: 0 });
      await this.counterRepo.save(counter);
    }
    return counter;
  }

  async incrementCounter() {
    const counter = await this.getCounter();
    counter.value += 1;
    return this.counterRepo.save(counter);
  }
}
