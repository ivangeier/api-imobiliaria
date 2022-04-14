import {jwt} from '../utils/token';
import createRealEstate from './services/realestate/createRealEstate.service';
import deleteRealEstate from './services/realestate/deleteRealEstate.service';
import updateRealEstate from './services/realestate/updateRealEstate.service';
import createUser from './services/user/createUser.service';
import deleteUser from './services/user/deleteUser.service';
import updateUser from './services/user/updateUser.service';

const create = async (req, res) => {
  const {userData, realEstateData} = req.body;

  try {
    const user = await createUser(userData);
    const realEstate = await createRealEstate(realEstateData, user.id);
    const {id, role} = user;
    const payload = {id, role, realEstateId: realEstate.id};
    const token = jwt.encode(payload);
    res.status(201).send({message: 'Created', token});
  } catch (error) {
    res.status(409).send(error.message);
  }
};

const deleteOne = async (req, res) => {
  const token = jwt.decode(req);
  const {realEstateId, id} = token;
  try {
    await deleteRealEstate(realEstateId);
    await deleteUser(id);
    res.status(200).json({message: 'Successfully deleted'});
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const updateAll = async (req, res) => {
  const token = jwt.decode(req);
  const {realEstateId, id} = token;
  const {userData, realEstateData} = req.body;
  try {
    await updateRealEstate(realEstateId, realEstateData);
    await updateUser(id, userData);
    res.status(200).json({message: 'Successfully updated'});
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export const RealEstateController = {
  create,
  deleteOne,
  updateAll,
};
