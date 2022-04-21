import RealEstate from "../../../models/RealEstate.model";

export default async function getPayload(user: any) {
   if (user.role === 'realEstate') {
      const realEstate: any = await RealEstate.findOne({where: {userId: user.id}});
      return {
         id: user.id,
         role: user.role,
         realEstateId: realEstate.id
      }
   } else {
      return {
         id: user.id,
         role: user.role
      }
   }
}