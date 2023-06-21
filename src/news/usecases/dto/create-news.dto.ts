import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class CreateNewsDto {
  @ApiPropertyOptional({
    type: 'string',
    description: 'Название новости',
    example: 'Новость',
  })
  title: string;

  @ApiPropertyOptional({
    type: 'string',
    description: 'Тело новости',
    example: 'Тело Новости',
  })
  body: string;

  @IsNumber()
  @Type(() => Number)
  creator: number;
}
