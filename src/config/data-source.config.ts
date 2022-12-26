import { Transaction } from 'src/transaction/entity/transaction.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 33061,
  username: 'root',
  password: 'S3cret',
  database: 'usecase_2022',
  entities: [Transaction],
  dateStrings: true,
  synchronize: true,
};
