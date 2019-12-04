import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';
@Table({
  modelName: 'shopping_spu'
})
export class Spu extends Model<Spu> {
  @Column
  _modify_time: number;
  @Column
  modify_user_id: number;
  @Column
  _create_time: number;
  @Column
  _create_user_id: number;
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  is_delete: number;
  @Column
  is_active: number;
  @Column
  store_id: number;
  @Column
  category_id: number;
  @Column
  sketch: string;
  @Column
  intro: string;
  @Column
  keywords: string;
  @Column
  brand_id: number;
  @Column
  virtual: number;
  @Column
  price: number;
  @Column
  market_price: number;
  @Column
  integral: number;
  @Column
  stock: number;
  @Column
  warning_stock: number;
  @Column
  picture_url: string;
  @Column
  status: number;
  @Column
  is_package: number;
  @Column
  is_integral: number;
  @Column
  logo: string;
  @Column
  memo: string;
}
