import Property from "../../../models/Property.model";


export default async function getAllProperties() {
  const properties = await Property.findAll();

  return properties.map((property) => {
      return property.get();
   });
}