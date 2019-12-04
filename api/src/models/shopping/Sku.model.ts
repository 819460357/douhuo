import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';
@Table({
  modelName: 'shopping_sku'
})
export class Sku extends Model<Sku> {
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
  sku_id: number;
  @Column
  name: string;
  @Column
  img: string;
  @Column
  price: number;
  @Column
  info: string;
  @Column
  stock: number;
  @Column
  code: string;
  @Column
  barcode: string;
  @Column
  memo: string;
}