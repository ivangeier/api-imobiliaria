import Property from "../../../models/Property.model";
import RealEstate from "../../../models/RealEstate.model";


export default async function getAdminStatus(){
   const countProperties = await Property.count({
      where: {
         isActive: true,
      },
   });

   const countBrokers = await RealEstate.count({
      where: {
         status: 'active',
      },
   });

   const sumPropertiesAmount = await Property.sum('valueSell', {
      where: {
         isActive: true,
      },
   });

   return {properties: {title: 'Imóveis cadastrados', value: countProperties}, brokers: {title: 'Imobiliárias cadastradas', value: countBrokers}, totalAmount: {title: 'Valor em imóveis', value: sumPropertiesAmount}};

}