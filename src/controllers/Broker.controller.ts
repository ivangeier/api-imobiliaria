import { jwt } from "../utils/token";
import createBroker from "./services/broker/createBroker.service";
import deleteBroker from "./services/broker/deleteBroker.service";
import getBrokerById from "./services/broker/getBrokerById.service";
import updateBroker from "./services/broker/updateBroker.service";

const create = async (req, res) => {
  const brokerData = req.body;

  try {
    const broker = await createBroker(brokerData);
    const { id, creci } = broker;
    const payload = { id, creci };
    const token = jwt.encode(payload);
    res.status(201).json({ message: "Created", token });
  } catch (error) {
    res.status(409).json(error.message);
  }
};

const deleteOne = async (req, res) => {
  const token = jwt.decode(req);
  const { id } = token;

  try {
    await deleteBroker(id);
    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getById = async (req, res) => {
  const token = jwt.decode(req);
  const { id } = token;
  try {
    const broker = await getBrokerById(id);
    res.status(200).json(broker);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const update = async (req, res) => {
  const token = jwt.decode(req);
  const { id } = token;
  const brokerData = req.body;
  try {
    await updateBroker(id, brokerData);
    res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    res.status(401).json(error.message);
  }
};

export const BrokerController = {
  create,
  deleteOne,
  getById,
  update,
};
