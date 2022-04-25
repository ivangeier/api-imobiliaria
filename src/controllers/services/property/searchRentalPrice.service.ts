import { Op } from "sequelize";
import Property from "../../../models/Property.model";

export default async function searchByRentalPrice(min: number, max: number) {
  const property = await Property.findAll({
    where: {
      valueRental: {
        [Op.between]: [min, max],
      },
    },
  });

  if (!property) {
    throw new Error("Property not found");
  } else {
    return property;
  }
}