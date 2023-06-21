# CRUD для создания новостей
## Description
Простой CRUD для новостей с регистрацией пользователя.<br>
Также при запуске доступен swagger!

## ENV

Обязательные env для работы:
```
HTTP_PORT=
HOST=

DATABASE_DRIVER=
DATABASE=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
```

Также их можно найти в файле .env.sample и
применить через команду
```bash
$ set -o allexport;  source .env.sample;  set +0 allexport
```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## TODO
* Unit tests
* Better error handling
