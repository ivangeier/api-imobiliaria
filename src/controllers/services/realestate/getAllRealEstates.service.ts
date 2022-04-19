import RealEstate from "../../../models/RealEstate.model";

export default async function getAllRealEstates() {
  const realEstates = await RealEstate.findAll();

  return realEstates.map((realEstate) => {
    return realEstate.get();
  });
}