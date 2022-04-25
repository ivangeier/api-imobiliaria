import Property from "../../../models/Property.model";

export default async function searchByType(type: string) {
  const property = await Property.findAll({
    where: {
      type,
    },
  });

  if (!property) {
    throw new Error("Property not found");
  } else {
    return property;
  }
}