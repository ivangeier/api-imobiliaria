import { Op } from "sequelize";
import Property from "../../../models/Property.model";

export default async function getFilteredProperties(queries: TPropertyQuery) {
   const {mode, min, max, beds, baths, garage, type} = queries;
 
   const properties = await Property.findAll({
     where: {
      isActive: true,
      ...(mode === 'aluguel' ? {isRenting: true} : mode === 'venda' ? {isSelling: true} : {}),
      ...(min && max ? mode === 'aluguel' ? {valueRental: {[Op.between]: [min, max]}} : {valueSell: {[Op.between]: [min, max]}} : {}),
      ...(beds ? {amountBedrooms: {[Op.gte]: beds}} : {}),
      ...(baths ? {amountBathrooms: {[Op.gte]: baths}} : {}),
      ...(garage ? {amountGarage: {[Op.gte]: garage}} : {}),
      ...(type === 'apartamento' ? {type: 'apartamento'} : type === 'casa' ? {type: 'casa'} : {}),
     },
     order:[
      ['updatedAt', 'DESC']
      ]  
   });
 
   if (!properties) {
     throw new Error('Not found');
   } else {
     return properties.map((property) => {
       return property.get();
     });
   }
 }