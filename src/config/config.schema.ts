import * as Joi from 'joi';

import { dbSchema } from './db';

export const ConfigSchema = Joi.object({
  ENV: Joi.string().valid('development', 'production').default('development'),
  HTTP_PORT: Joi.number().default(5000),
  HOST: Joi.string().required(),
  ...dbSchema,
});
