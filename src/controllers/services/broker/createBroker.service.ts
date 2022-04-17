import Broker from '../../../models/Broker.model';

export default async function createBroker(
  brokerData: Partial<TBroker>,
  userId: string,
  realEstateId: string
) {
  const broker = await Broker.findOne({
    where: {
      creci: brokerData.creci,
    },
  });
  if (broker) {
    throw new Error('Broker already exists');
  } else {
    const createdBroker = await Broker.create({
      ...brokerData,
      userId,
      realEstateId,
    });
    return createdBroker.get();
  }
}
