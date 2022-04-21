import Broker from "../../../models/Broker.model";

export default async function updateBroker(id: string, data: Partial<TBroker>) {
  const broker = await Broker.update(data, { where: { id } });

  if (!broker) {
    throw new Error("Broker not found");
  } else {
    return;
  }
}
