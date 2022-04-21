import Property from "../../../models/Property.model";

export default async function deleteProperty(id: string){
  await Property.update({ isActive: false }, { where: { id}} );
  return;
}