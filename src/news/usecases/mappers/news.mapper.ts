import { News } from '../../entities';
import { NewsDto } from '../dto';

export class NewsMapper {
  static toDTO = ({ id, title, body, creatorId }: News): NewsDto => ({
    id,
    title,
    body,
    creatorId,
  });
}
