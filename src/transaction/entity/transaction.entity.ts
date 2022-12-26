import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('history_transaction')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  trx_date: string;

  @Column()
  customer_email: string;

  @Column()
  parner_id: number;

  @Column()
  promo_code: string;

  @Column()
  qty: number;

  @Column()
  checkout: number;

  @Column()
  cashback_trx: number;

  @Column()
  cashback_loyalty: number;

  @Column()
  cashback_total: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: string;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: string;
}
