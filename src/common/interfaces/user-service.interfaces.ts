import { UserAwareInterface as IUser } from './user.interface';

export interface UserServiceAwareInterface {
  save(user: IUser): Promise<IUser>;

  findOne(login: string): Promise<IUser>;

  create(login: string): IUser;
}
