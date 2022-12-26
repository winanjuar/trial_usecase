import { Body, Controller, Get, Headers, HttpCode, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('last-transaction')
  async getLastTransaction(@Headers('x-email') email: string) {
    const lastTransactions = await this.transactionService.getLastTransaction(
      email,
    );
    return {
      statusCode: 200,
      message: 'Get last 10 transactions successfully',
      data: lastTransactions,
    };
  }

  @HttpCode(200)
  @Post()
  async createTransaction(@Body() transactionDto: CreateTransactionDto) {
    const newTransaction = await this.transactionService.createTransaction(
      transactionDto,
    );
    return {
      statusCode: 200,
      message: 'Create new transaction successfully',
      data: newTransaction,
    };
  }
}
