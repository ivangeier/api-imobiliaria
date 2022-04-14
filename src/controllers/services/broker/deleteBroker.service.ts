import Broker from "../../../models/Broker.model";

export default async function deleteBroker(id: string) {
  const broker = await Broker.findOne({
    where: {
      id,
    },
  });
  if (!broker) {
    throw new Error("Broker not found");
  } else {
    await Broker.destroy({ where: { id } });
    return;
  }
}
