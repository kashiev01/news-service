import { Body, Param } from '@nestjs/common';

import { CommandNewsDecorator, DeleteOneDecorator } from './decorators';
import { UpdateDecorator } from './decorators';
import { CreateDecorator } from './decorators';
import { NewsInteractor } from './news.interactor';
import { UpdateNewsDto } from './usecases/dto';
import { CreateNewsDto } from './usecases/dto/create-news.dto';

@CommandNewsDecorator()
export class NewsCommandController {
  constructor(private interactor: NewsInteractor) {}

  @DeleteOneDecorator()
  delete(@Param('id') id: number): Promise<void> {
    return this.interactor.delete(id);
  }

  @CreateDecorator()
  create(@Body() { title, body, creator }: CreateNewsDto) {
    return this.interactor.create(title, body, creator);
  }
  @UpdateDecorator()
  update(@Param('id') id: number, @Body() { title, body }: UpdateNewsDto) {
    return this.interactor.update(id, title, body);
  }
}
