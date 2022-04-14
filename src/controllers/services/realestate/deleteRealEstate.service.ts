import RealEstate from '../../../models/RealEstate.model';

export default async function deleteRealEstate(id: string) {
  const realEstate = await RealEstate.findOne({
    where: {
      id,
    },
  });
  if (!realEstate) {
    throw new Error('Real estate not found');
  } else {
    await RealEstate.destroy({where: {id}});
    return;
  }
}
