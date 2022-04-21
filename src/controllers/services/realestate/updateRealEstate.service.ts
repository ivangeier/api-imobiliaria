import RealEstate from '../../../models/RealEstate.model';

export default async function updateRealEstate(
  id: string,
  data: Partial<TRealEstate>
) {
  const realEstate = await RealEstate.update(data, {where: {id}});

  if (!realEstate) {
    throw new Error("RealEstate not found");
  } else {
    return;
  }
}
