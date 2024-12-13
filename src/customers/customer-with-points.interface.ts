import { Customer } from './customer.entity';

export interface CustomerWithPoints extends Customer {
  sumPoints: number;
}
