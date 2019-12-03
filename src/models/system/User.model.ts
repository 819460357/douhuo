import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';
@Table({
  modelName: 'base_user'
})
export class User extends Model<User> {
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
  sex: string;
  @Column
  phone: string;
  @Column
  email: string;
  @Column
  nick: string;
  @Column
  wechat_open_id: string;
  @Column
  wechat_nickname: string;
  @Column
  wechat_sex: string;
  @Column
  wechat_headimgurl: string;
  @Column
  wechat_headimg_md5: string;
  @Column
  memo: string;
}
