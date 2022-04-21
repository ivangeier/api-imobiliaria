import Property from "../../../models/Property.model";

export default async function deleteProperty(id: string){
  const property = await Property.update({ isActive: false }, { where: { id}} );

  if (!property) {
    throw new Error("Property not found");
  } else {
    return;
  }
  
}