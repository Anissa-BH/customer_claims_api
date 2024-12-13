import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaimsService } from './claims.service';
import { ClaimsController } from './claims.controller';
import { Claim } from './claim.entity'
import { CustomersModule } from '../customers/customers.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Claim]),
  forwardRef(() => CustomersModule),
  AuthModule
],
  providers: [ClaimsService],
  controllers: [ClaimsController],
  exports: [TypeOrmModule], 
})
export class ClaimsModule {}
