import Broker from "../../../models/Broker.model";
import { encrypt } from "../../../utils/encrypt";

export default async function createBroker(brokerData: Partial<TBroker>) {
  const broker = await Broker.findOne({
    where: {
      cpf: brokerData.cpf,
    },
  });
  if (broker) {
    throw new Error("Broker already exists");
  } else {
    const { password, ...broker } = brokerData;
    const encodedPassword = await encrypt(password);
    const createdBroker = await Broker.create({
      password: encodedPassword,
      ...broker,
    });
    return createdBroker.get();
  }
}
