import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';
@Table({
  modelName: 'base_role'
})
export class Role extends Model<Role> {
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
  name: string;
  @Column
  supper_id: number;
  @Column
  memo: string;
}
