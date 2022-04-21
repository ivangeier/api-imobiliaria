import Property from "../../../models/Property.model";

export default async function createProperty(propertyData: Partial<TProperty>, realEstateId: string) {
  const property = await Property.findOne({
    where: {
      title: propertyData.title,
    },
  });
  if (property) {
    throw new Error("Property already exists");
  } else {
    const createdProperty = await Property.create({
      realEstateId,
      ...propertyData,
    });
    return createdProperty.get();
  }
}
