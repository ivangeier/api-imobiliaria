import Property from "../models/Property.model";
import { jwt } from "../utils/token";
import createProperty from "./services/property/createProperty.service";
import deleteProperty from "./services/property/deleteProperty.service";
import getAllProperties from "./services/property/getAllProperties.service";
import getPropertyById from "./services/property/getPropertyById.service";
import getCities from "./services/property/getCities.service";
import searchByType from "./services/property/searchType.service";
import searchByRentalPrice from "./services/property/searchRentalPrice.service";
import searchBySellingPrice from "./services/property/searchSellingPrice.service";

const create = async (req: any, res: any) => {
  const { realEstateId } = jwt.decode(req)
  const PropertyData = req.body;
  
  try {
    const property = await createProperty(PropertyData, realEstateId);
    res.status(201).json({ message: "Created", property });
  } catch (error: any) {
    res.status(409).json(error.message);
  }
};

const getAll = async (req: any, res: any) => {
  
  try {
    const properties = await getAllProperties();
    res.status(200).json(properties);
  } catch (error: any) {
    res.status(404).json(error.message);
  }
}

const deleteById = async (req: any, res: any) => {
  const { id } = req.params;
  
  try {
    await deleteProperty(id);
    res.status(200).json({ message: "Property inactivated" });
  } catch (error: any) {
    res.status(404).json(error.message);
  }
};

const getById = async (req: any, res: any) => {
  const { id } = req.params;
  
  try {
    const property = await getPropertyById(id);
    res.status(200).json(property);
  } catch (error: any) {
    res.status(404).json(error.message);
  }
}

const getCity = async (req: any, res: any) => {
  try {
   const cities = await getCities(); 
   res.status(200).json(cities);
  } catch (error: any) {
    res.status(404).json(error.message);
  }    
}

const searchType = async (req: any, res: any) => {
  const { type } = req.params;
  try {
    const properties = await searchByType(type);
    res.status(200).json(properties);   
  } catch (error: any) {
    res.status(404).json(error.message);
  }
}

const searchPrice = async (req: any, res: any) => {
  const type = req.query.type;
  const min = req.query.min;
  const max = req.query.max;

  try {
    if (type == 'rent') {
      const properties = await searchByRentalPrice(min, max);
      res.status(200).json(properties);
    } else {
      const properties = await searchBySellingPrice(min, max);
      res.status(200).json(properties);
    }
  } catch (error: any) { 
    res.status(404).json(error.message);
  }
}


export const PropertyController = {
  create,
  getAll,
  deleteById,
  getById,
  getCity,
  searchType,
  searchPrice
};
