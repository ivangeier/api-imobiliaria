import Broker from "../../../models/Broker.model";

export default async function getBrokerById(id: string) {
  const broker = await Broker.findOne({
    where: {
      id,
    },
  });

  if (!broker) {
    throw new Error("Broker not found");
  } else {
    const { password, ...dataWithoutPassword } = broker.get();
    return dataWithoutPassword;
  }
}
