import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Transaction } from '../entity/transaction.entity';

@Injectable()
export class TransactionRepository extends Repository<Transaction> {
  constructor(private readonly dataSource: DataSource) {
    super(Transaction, dataSource.createEntityManager());
  }

  async getTransactionByEmail(email: string): Promise<Transaction[]> {
    return await this.find({
      where: { customer_email: email },
      order: { created_at: 'DESC' },
      take: 10,
    });
  }

  async createNewTransaction(
    transaction: CreateTransactionDto,
  ): Promise<Transaction> {
    return await this.save(transaction);
  }
}
