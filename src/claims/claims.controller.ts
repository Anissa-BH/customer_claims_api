import { Controller, Post, Body } from '@nestjs/common';
import { ClaimsService } from './claims.service';
import { Claim } from './claim.entity';

@Controller('claims')
export class ClaimsController {
  constructor(private readonly claimsService: ClaimsService) {}

  @Post('batch')
  async batchCreate(@Body() claims: Claim[]) {
    return this.claimsService.batchCreate(claims);
  }
}
