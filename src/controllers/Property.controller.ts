import createProperty from "./services/property/createProperty.service";

const create = async (req, res) => {
  const PropertyData = req.body;

  try {
    const property = await createProperty(PropertyData);
    res.status(201).json({ message: "Created", property });
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const PropertyController = {
  create,
};
