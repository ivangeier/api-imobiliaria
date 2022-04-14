import RealEstate from '../../../models/RealEstate.model';

export default async function createRealEstate(
  realEstateData: Partial<TRealEstate>,
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
