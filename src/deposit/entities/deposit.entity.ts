import { GlobalEntity } from 'src/global-entities/global-entity';
import { Entity, Column } from 'typeorm';
import { TransactionMethod } from '../dto/transactionMethod.enum';

@Entity({ name: 'deposit' })
export class Deposit extends GlobalEntity {
  @Column()
  accountNumber: string;

  @Column()
  amount: string;

  @Column()
  transactionMethod: TransactionMethod;
}
