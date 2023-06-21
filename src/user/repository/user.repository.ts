import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, FindOneOptions } from 'typeorm';

import { User } from '../entities';

@Injectable()
export class UserRepository {
  constructor(
    @InjectEntityManager()
    private em: EntityManager,
  ) {}
  save(user: User) {
    return this.em.save(user);
  }

  findOne(option: FindOneOptions<User>) {
    return this.em.findOne(User, option);
  }
}
