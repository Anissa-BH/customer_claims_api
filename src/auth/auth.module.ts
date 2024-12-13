// src/auth/auth.module.ts
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ApiKeyMiddleware } from './api-key.middleware';

@Module({
  providers: [ApiKeyMiddleware], 
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware) 
      .forRoutes('*'); 
  }
}
