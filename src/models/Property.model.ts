import sequelize from "../db/connection";
import { DataTypes } from "sequelize/types";
import RealEstate from "./RealEstate.model";
import Broker from "./Broker.model";

const Property = sequelize.define("property", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  brokerId: {
    type: DataTypes.UUID,
  },
  realEstateId: {
    type: DataTypes.UUID,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.ENUM("activated", "disabled"),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amountBedrooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amountBathrooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amountGarage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valueCondominium: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iptu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valueRental: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valueSell: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isSelling: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isRenting: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

RealEstate.hasMany(Property);
Property.belongsTo(RealEstate);
Broker.belongsToMany(Property, { through: Broker });

export default Property;
