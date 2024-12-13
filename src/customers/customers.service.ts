import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { Claim } from '../claims/claim.entity';
import { CustomerWithPoints } from './customer-with-points.interface';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
    @InjectRepository(Claim)
    private claimsRepository: Repository<Claim>,
  ) {}

  async create(email: string, name: string): Promise<Customer> {
    const customer = this.customersRepository.create({ email, name });
    return this.customersRepository.save(customer);
  }

  async findOne(id: number): Promise<CustomerWithPoints> {
    const customer = await this.customersRepository.findOne({
      where: { id },
      relations: ['claims'],
    });

    if (customer) {
      const sumPoints = customer.claims.reduce((sum, claim) => sum + claim.pointValue, 0);
      return { ...customer, sumPoints };
    }

    return null;
  }
}
