import { Param, Query } from '@nestjs/common';

import {
  FindByCreatorDecorator,
  FindOneDecorator,
  QueryNewsDecorator,
} from './decorators';
import { FindDecorator } from './decorators';
import { NewsInteractor } from './news.interactor';
import { FindListDto, NewsDto, NewsListDto } from './usecases/dto';

@QueryNewsDecorator()
export class NewsQueryController {
  constructor(private interactor: NewsInteractor) {}

  @FindDecorator()
  find(@Query() { take, skip }: FindListDto): Promise<NewsListDto> {
    return this.interactor.find(skip, take);
  }

  @FindOneDecorator()
  findOne(@Param('id') id: number): Promise<NewsDto> {
    return this.interactor.findOne(id);
  }

  @FindByCreatorDecorator()
  findByCreator(@Param('id') id: number): Promise<NewsDto[]> {
    return this.interactor.findByCreator(id);
  }
}
