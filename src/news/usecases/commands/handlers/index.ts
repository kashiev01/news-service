import { CreateNewsHandler } from './create-news.handler';
import { DeleteNewsHandler } from './delete-news.handler';
import { UpdateNewsHandler } from './update-news.handler';

export const CommandHandlers = [
  CreateNewsHandler,
  DeleteNewsHandler,
  UpdateNewsHandler,
];

export { CreateNewsHandler, DeleteNewsHandler, UpdateNewsHandler };
