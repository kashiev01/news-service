import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class FindListDto {
  @ApiProperty({
    type: 'number',
    description: 'Количество новостей',
    example: 10,
    required: true,
  })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  take: number;

  @ApiProperty({
    type: 'number',
    description: 'Количество новостей которые нужно пропустить',
    example: 0,
    required: true,
  })
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  skip: number;
}
