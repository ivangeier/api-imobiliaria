import Property from "../../../models/Property.model";

export default async function getPropertyById(id) {
   const property = await Property.findOne({
      where: {
         id,
      },
   });

   if (!property) {
      throw new Error("Property not found");
   }
   
   return property.get();
   }