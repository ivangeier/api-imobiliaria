import Broker from '../models/Broker.model';
import { jwt } from '../utils/token';
import createBroker from './services/broker/createBroker.service';
import deleteBroker from './services/broker/deleteBroker.service';
import getAllBrokers from './services/broker/getAllBrokers.service';
import getBrokerById from './services/broker/getBrokerById.service';
import updateBroker from './services/broker/updateBroker.service';
import createUser from './services/user/createUser.service';

const create = async (req: any, res: any) => {
  const token = jwt.decode(req);
  const { realEstateId } = token;
  const { userData, brokerData } = req.body;

  try {
    const user = await createUser(userData);
    const broker = await createBroker(brokerData, user.id, realEstateId);
    const { id, role } = user;
    const payload = {
      id,
      role,
      creci: broker.creci,
      realStateId: broker.realStateId,
    };
    const token = jwt.encode(payload);
    res.status(201).json({ message: 'Created', token });
  } catch (error: any) {
    res.status(409).json(error.message);
  }
};

const deleteOne = async (req: any, res: any) => {
  const token = jwt.decode(req);
  const { id } = token;

  try {
    await deleteBroker(id);
    res.status(200).json({ message: 'Successfully deleted' });
  } catch (error: any) {
    res.status(404).json(error.message);
  }
};

const getById = async (req: any, res: any) => {
  const token = jwt.decode(req);
  const { id } = token;
  try {
    const broker = await getBrokerById(id);
    res.status(200).json(broker);
  } catch (error: any) {
    res.status(404).json(error.message);
  }
};

const update = async (req: any, res: any) => {
  const token = jwt.decode(req);
  const { id } = token;
  const brokerData = req.body;
  try {
    await updateBroker(id, brokerData);
    res.status(200).json({ message: 'Successfully updated' });
  } catch (error: any) {
    res.status(401).json(error.message);
  }
};

const getAll = async (req: any, res: any) => {
  const token = jwt.decode(req);
  
  const { realEstateId } = token;
  try {
    const brokers = await getAllBrokers(realEstateId);
    res.status(200).json(brokers);
  } catch (error: any) {
    res.status(404).json(error.message);
  }
}

export const BrokerController = {
  create,
  deleteOne,
  getById,
  update,
  getAll
};
