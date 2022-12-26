import { RedisModuleOptions } from '@liaoliaots/nestjs-redis';

export const redisModuleOptions: RedisModuleOptions = {
  config: {
    host: 'localhost',
    port: 63791,
  },
};
