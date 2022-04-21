import sequelize from '../db/connection';
import {DataTypes} from 'sequelize';
import User from './User.model';

const RealEstate = sequelize.define(
  'realEstate',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      //   allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertiesNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0,
    },
    initialProperties: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    broker: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0,
    },
    initialBroker: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
  },
  {
    tableName: 'realEstates',
  }
);

User.hasOne(RealEstate);
RealEstate.belongsTo(User);

export default RealEstate;
