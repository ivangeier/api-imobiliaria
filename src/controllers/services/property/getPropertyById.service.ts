import RealEstate from "../../../models/RealEstate.model";
import Property from "../../../models/Property.model";

export default async function getPropertyById(id: string) {
   const property = await Property.findOne({
      where: {
         id,
      },
      include: {
         model: RealEstate,
         attributes: ["name"]
      }
   });

   if (!property) {
      throw new Error("Property not found");
   } else {
      return property.get();
   }
   
   }