import Broker from "../../../models/Broker.model";

export default async function getBrokerCredentials(userId) {
   const broker = await Broker.findOne({
      where: {
         userId,
      },
      attributes: {
         exclude: ["password"],
      }
   });

   return broker.get();
}