import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';
@Table({
  modelName: 'shopping_sku_attribute'
})
export class SkuAttribute extends Model<SkuAttribute> {
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
  category_id: number;
  @Column
  attribute: string;
  @Column
  sort: number;
  @Column
  memo: string;
}
