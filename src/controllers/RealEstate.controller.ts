import {jwt} from '../utils/token';
import createRealEstate from './services/realestate/createRealEstate.service';
import deleteRealEstate from './services/realestate/deleteRealEstate.service';
import getAllActiveRealEstates from './services/realestate/getAllActiveRealEstates.service';
import getAllRealEstates from './services/realestate/getAllRealEstates.service';
import updateRealEstate from './services/realestate/updateRealEstate.service';
import updateRealEstateStatus from './services/realestate/updateRealEstateStatus.service';
import createUser from './services/user/createUser.service';
import deleteUser from './services/user/deleteUser.service';
import updateUser from './services/user/updateUser.service';

const getAllActive = async (req, res) => {
  try {
    const users = await getAllActiveRealEstates();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAll = async (req, res) => {
  const token = jwt.decode(req);
  const {role} = token;

  if (role !== 'admin') {
    res.status(400).json({error: 'Você não tem permissão para acessar essa rota'});
    return;
  }

  try {
    const realEstates = await getAllRealEstates();
    res.status(200).json(realEstates);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

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

const updateStatus = async (req, res) => {
  const token = jwt.decode(req);
  const {role} = token;
  const {status, realEstateId} = req.body;

  try {
    await updateRealEstateStatus(role, realEstateId, status);
    res.status(200).json({message: 'Successfully updated'});
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export const RealEstateController = {
  create,
  deleteOne,
  updateAll,
  getAllActive,
  updateStatus,
  getAll
};
