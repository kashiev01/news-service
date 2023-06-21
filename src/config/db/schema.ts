import * as Joi from 'joi';

export const dbSchema = {
  DATABASE: Joi.string().required(),
  DATABASE_DRIVER: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
};
