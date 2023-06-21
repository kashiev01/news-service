import { Injectable } from '@nestjs/common';
import { UserServiceAwareInterface as IUserService } from 'src/common';

import { User } from './entities';
import { UserRepository as Repository } from './repository';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly repository: Repository) {}

  create = (login: string): User => new User(login);

  save = (user: User): Promise<User> => this.repository.save(user);

  findOne = (login: string): Promise<User> =>
    this.repository.findOne({ where: { login } });
}
