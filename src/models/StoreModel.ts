import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class StoreModel {
  @Column({
    type: 'int',
    length: 11
  })
  _modify_time: number;

  @Column({
    type: 'int',
    length: 11
  })
  modify_user_id: number;

  @Column({
    type: 'int',
    length: 11
  })
  _create_time: number;

  @Column({
    type: 'int',
    length: 11
  })
  _create_user_id: number;

  @PrimaryColumn({
    type: 'int',
    length: 11,
    generated: true
  })
  id: number;

  @Column({
    type: 'tinyint',
    length: 1
  })
  is_delete: number;

  @Column({
    type: 'tinyint',
    length: 1
  })
  is_active: number;

  @Column({
    type: 'varchar',
    length: 50
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 4
  })
  sex: number;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  nick: string;

  @Column()
  wechat_open_id: string;

  @Column()
  wechat_nickname: string;

  @Column()
  wechat_sex: string;

  @Column()
  wechat_headimgurl: string;

  @Column()
  wechat_headimg_md5: string;

  @Column()
  memo: string;
}