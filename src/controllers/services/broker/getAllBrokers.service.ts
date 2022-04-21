import Broker from "../../../models/Broker.model";
import User from "../../../models/User.model";

export default async function getAllBrokers(realEstateId) {
   const brokers = await Broker.findAll({
      where: {
         realEstateId,
      },
      include: {
         model: User,
         attributes: {
            exclude: ["password"],
         }
      },
   });
   
   return brokers.map((broker) => {
      return broker.get();
   });
}