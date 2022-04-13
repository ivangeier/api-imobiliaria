import RealEstate from '../../models/RealEstate.model';

type Props = {
  name: string;
  cnpj: string;
  city: string;
  initialBroker: boolean;
  initialProperties: string;
};

export default async function createRealEstate(
  realEstateData: Props,
  userId: string
) {
  const realEstate = await RealEstate.findOne({
    where: {
      cnpj: realEstateData.cnpj,
    },
  });
  if (realEstate) {
    throw new Error('Real estate already exists');
  } else {
    const createdRealEstate = await RealEstate.create({
      userId,
      ...realEstateData,
    });
    return createdRealEstate.get();
  }
}
