import { Op } from "sequelize";
import RealEstate from "../../../models/RealEstate.model";
import Property from "../../../models/Property.model";

export default async function getFilteredProperties(queries: TPropertyQuery) {
   const {mode, min, max, beds, baths, garage, type, state} = queries;
 
   const properties = await Property.findAll({
     where: {
      isActive: true,
      ...(mode === 'aluguel' ? {isRenting: true} : mode === 'venda' ? {isSelling: true} : {}),
      ...(min && max ? mode === 'aluguel' ? {valueRental: {[Op.between]: [min, max]}} : {valueSell: {[Op.between]: [min, max]}} : {}),
      ...(beds ? {amountBedrooms: {[Op.eq]: beds}} : {}),
      ...(baths ? {amountBathrooms: {[Op.eq]: baths}} : {}),
      ...(garage ? {amountGarage: {[Op.eq]: garage}} : {}),
      ...(type === 'apartamento' ? {type: 'apartamento'} : type === 'casa' ? {type: 'casa'} : {}),
      ...(state ? {state: state} : {}),
     },
     include: {
      model: RealEstate,
      attributes: ["name"]
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