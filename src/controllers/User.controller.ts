import {jwt} from '../utils/token';
import createUser from './services/createUser.service';

const create = async (req, res) => {
  const userData = req.body;

  try {
    const user = await createUser(userData);
    const {id, role} = user;
    const payload = {id, role};
    const token = jwt.encode(payload);
    res.status(201).send({message: 'Created', token});
  } catch (error) {
    res.status(409).send(error.message);
  }
};

export const UserController = {
  create,
};
