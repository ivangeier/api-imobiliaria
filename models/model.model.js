import { DataTypes } from 'sequelize/types';
import sequelize from '../src/db/connection.js';

const Entity = sequelize.define('entity', {
  //entity fields here
});

export default Entity;
