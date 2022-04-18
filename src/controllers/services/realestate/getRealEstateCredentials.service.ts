import RealEstate from "../../../models/RealEstate.model";

export default async function getRealEstateCredentials(userId) {
   const realEstate = await RealEstate.findOne({
      where: {
         userId,
      },
      attributes: {
         exclude: ["password"],
      }
   });

   return realEstate.get();
}