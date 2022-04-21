import Property from "../models/Property.model";
import { jwt } from "../utils/token";
import createProperty from "./services/property/createProperty.service";
import deleteProperty from "./services/property/deleteProperty.service";
import getAllProperties from "./services/property/getAllProperties.service";
import getPropertyById from "./services/property/getPropertyById.service";

const create = async (req, res) => {
  const { realEstateId } = jwt.decode(req)
  const PropertyData = req.body;
  
  try {
    const property = await createProperty(PropertyData, realEstateId);
    res.status(201).json({ message: "Created", property });
  } catch (error) {
    res.status(409).json(error.message);
  }
};

const getAll = async (req, res) => {
  try {
    const properties = await getAllProperties();
    res.status(200).json(properties);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

const deleteById = async (req, res) => {
  const { id } = req.params;
  
  try {
    await deleteProperty(id);
    res.status(200).json({ message: "Property inactivated" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const property = await getPropertyById(id);
    res.status(200).json(property);
  } catch (error) {
    res.status(404).json(error.message);
  }
}


export const PropertyController = {
  create,
  getAll,
  deleteById,
  getById
};
