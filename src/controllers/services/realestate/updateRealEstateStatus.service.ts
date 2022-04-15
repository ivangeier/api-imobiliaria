import RealEstate from '../../../models/RealEstate.model';

export default async function updateRealEstateStatus(
  role,
  realEstateId,
  status
) {
  if (role == 'admin') {
    const realEstate = await RealEstate.findOne({where: {id: realEstateId}});

    if (realEstate) {
      await RealEstate.update({status: status}, {where: {id: realEstateId}});
    } else {
      throw new Error('Real Estate not found');
    }
    return;
  } else {
    throw new Error('Unauthorized');
  }
}
