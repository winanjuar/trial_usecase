import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  trx_date: string;

  @IsNotEmpty()
  @IsEmail()
  customer_email: string;

  @IsNotEmpty()
  parner_id: number;

  @IsNotEmpty()
  promo_code: string;

  @IsNotEmpty()
  qty: number;

  @IsNotEmpty()
  checkout: number;

  @IsNotEmpty()
  cashback_trx: number;

  @IsNotEmpty()
  cashback_loyalty: number;

  @IsNotEmpty()
  cashback_total: number;
}
