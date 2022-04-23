import sequelize from "../db/connection";
import { DataTypes } from "sequelize";
import RealEstate from "./RealEstate.model";
import Broker from "./Broker.model";

const Property = sequelize.define(
  "property",
  {
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
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    iptu: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valueRental: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valueSell: {
      type: DataTypes.INTEGER,
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true, 
    }
  },
  {
    tableName: "properties",
  }
);

RealEstate.hasMany(Property);
Property.belongsTo(RealEstate);

export default Property;
