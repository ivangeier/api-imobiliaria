import Broker from "../../../models/Broker.model";
import Property from "../../../models/Property.model";


export default async function getAdminStatus(){
   const countProperties = await Property.count({
      where: {
         isActive: true,
      },
   });

   const countBrokers = await Broker.count({
      where: {
         isActive: true,
      },
   });

   const sumPropertiesAmount = await Property.sum('valueSell', {
      where: {
         isActive: true,
      },
   });

   return {properties: {title: 'Imóveis cadastrados', value: countProperties}, brokers: {title: 'Corretores cadastrados', value: countBrokers}, totalAmount: {title: 'Valor em imóveis', value: sumPropertiesAmount}};

}