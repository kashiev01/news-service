import { ApiProperty } from '@nestjs/swagger';

export class UpdateNewsDto {
  @ApiProperty({
    type: 'string',
    description: 'Название новости',
    example: 'Новость',
  })
  title: string;

  @ApiProperty({
    type: 'string',
    description: 'Тело новости',
    example: 'Тело Новости',
  })
  body: string;
}
