import { NewsDto } from './news.dto';

export class NewsListDto {
  skip: number;
  take: number;
  data: NewsDto[];
}
