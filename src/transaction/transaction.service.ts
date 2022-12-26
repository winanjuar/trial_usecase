import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entity/transaction.entity';
import { TransactionRepository } from './repository/transaction.repository';

@Injectable()
export class TransactionService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async getLastTransaction(email: string): Promise<Transaction[]> {
    return await this.transactionRepository.getTransactionByEmail(email);
  }

  async createTransaction(
    transaction: CreateTransactionDto,
  ): Promise<Transaction> {
    return await this.transactionRepository.createNewTransaction(transaction);
  }
}
