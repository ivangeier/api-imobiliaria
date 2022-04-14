import Broker from "../../../models/Broker.model";

export default async function updateBroker(id: string, data: Partial<TBroker>) {
  await Broker.update(data, { where: { id } });
  return;
}
