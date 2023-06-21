import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    type: 'string',
    description: 'Логин',
    example: 'nikolai',
  })
  login: string;

  @ApiProperty({
    type: 'string',
    description: 'Пароль',
    example: 'password',
  })
  password: string;
}
