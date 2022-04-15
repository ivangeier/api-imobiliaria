import RealEstate from '../../../models/RealEstate.model';

export default async function getAllActiveRealEstates() {
  const realEstates = await RealEstate.findAll({
    where: {
      status: 'active',
    },
  });

  return realEstates.map((realEstate) => {
    return realEstate.get();
  });
}
