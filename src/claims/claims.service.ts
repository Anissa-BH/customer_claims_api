import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Claim } from './claim.entity';

@Injectable()
export class ClaimsService {
  constructor(
    @InjectRepository(Claim)
    private claimsRepository: Repository<Claim>,
  ) {}

  async batchCreate(claims: Claim[]): Promise<Claim[]> {
    return this.claimsRepository.save(claims);
  }
}
