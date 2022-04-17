import sequelize from '../db/connection';
import { DataTypes } from 'sequelize';
import User from './User.model';
import RealEstate from './RealEstate.model';

const Broker = sequelize.define(
  'broker',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    realEstateId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    creci: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creciState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'brokers',
  }
);

User.hasOne(Broker);
Broker.belongsTo(User);

RealEstate.hasMany(Broker);
Broker.belongsTo(RealEstate);

export default Broker;
