import Broker from "../../../models/Broker.model";

export default async function createBroker(brokerData: Partial<TBroker>) {
  const broker = await Broker.findOne({
    where: {
      cpf: brokerData.cpf,
    },
  });
  if (broker) {
    throw new Error("Broker already exists");
  } else {
    const createBroker = await Broker.create({
      ...Broker,
    });
    return createBroker.get();
  }
}
