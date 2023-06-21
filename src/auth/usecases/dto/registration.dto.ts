import { ApiProperty } from '@nestjs/swagger';

export class RegistrationDto {
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

  @ApiProperty({
    type: 'string',
    description: 'Имя пользователя',
    example: 'Nikolai',
  })
  name: string;
}
