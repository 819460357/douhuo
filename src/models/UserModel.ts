import { Model, DataTypes } from 'sequelize';
import { sequelizePool } from './lib/SequelizePool';

class UserModel extends Model {}
console.log(UserModel);
UserModel.init(
  {
    _modify_time: DataTypes.INTEGER,
    modify_user_id: DataTypes.STRING,
    _create_time: DataTypes.INTEGER,
    _create_user_id: DataTypes.INTEGER,
    id: DataTypes.INTEGER,
    is_delete: DataTypes.TINYINT,
    is_active: DataTypes.TINYINT,
    name: DataTypes.STRING,
    sex: DataTypes.TINYINT,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    nick: DataTypes.STRING,
    wechat_open_id: DataTypes.STRING,
    wechat_nickname: DataTypes.STRING,
    wechat_sex: DataTypes.STRING,
    wechat_headimgurl: DataTypes.STRING,
    wechat_headimg_md5: DataTypes.STRING,
    memo: DataTypes.STRING
  },
  {
    // @ts-ignore
    sequelizePool,
    modelName: 'user'
  }
);

module.exports = UserModel;
