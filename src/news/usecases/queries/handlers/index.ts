import { FindNewsHandler } from './find-news.handler';
import { FindNewsByCreatorHandler } from './find-news-by-creator.handler';
import { FindNewsByIdHandler } from './find-news-by-id.handler';

export const QueryHandlers = [
  FindNewsByIdHandler,
  FindNewsHandler,
  FindNewsByCreatorHandler,
];

export { FindNewsByCreatorHandler, FindNewsByIdHandler, FindNewsHandler };
