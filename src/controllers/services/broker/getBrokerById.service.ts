import Broker from "../../../models/Broker.model";
import User from "../../../models/User.model";

export default async function getBrokerById(id: string) {
  const broker = await Broker.findOne({
    where: {
      id,
    },
    include: {
      model: User,
      attributes: {
         exclude: ["password"],
      }
   }

  });

  if (!broker) {
    throw new Error("Broker not found");
  } else {
    return broker.get();
  }
}
