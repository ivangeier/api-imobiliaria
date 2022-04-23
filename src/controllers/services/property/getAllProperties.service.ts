import RealEstate from "../../../models/RealEstate.model";
import Property from "../../../models/Property.model";


export default async function getAllProperties() {
  const properties = await Property.findAll({
   include: {
      model: RealEstate,
      attributes: ["name"]
   }
  });

  return properties.map((property) => {
      return property.get();
   });
}