import createBroker from "./services/broker/createBroker.service";

const create = async (req, res) => {
  const brokerData = req.body;

  try {
    await createBroker(brokerData);
    res.status(201).json({ message: "Created" });
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const BrokerController = {
  create,
};
