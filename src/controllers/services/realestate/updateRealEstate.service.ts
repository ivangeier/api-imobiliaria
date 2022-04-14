import RealEstate from '../../../models/RealEstate.model';

export default async function updateRealEstate(
  id: string,
  data: Partial<TRealEstate>
) {
  await RealEstate.update(data, {where: {id}});
  return;
}
