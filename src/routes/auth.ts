import {Express} from 'express';
import {where} from 'sequelize/types';
import authMiddleware from '../middlewares/auth';
import RealEstate from '../models/RealEstate';
import User from '../models/User';
import {decrypt, encrypt} from '../utils/encrypt';
import {jwt} from '../utils/token';

const auth = authMiddleware();

export const authRoutes = (app: Express) => {
  app.post('/register', async (req, res) => {
    const {cpf} = req.body;
    const user = await User.findOne({
      where: {
        cpf,
      },
    });

    if (user) {
      res.status(409).send('Already exists');
    } else {
      // cria um usuario
      const {password, ...data} = req.body;
      const encodedPassword = await encrypt(password);
      const createdUser = await User.create({
        password: encodedPassword,
        ...data,
      });

      const {id, role} = createdUser.get();
      // cria a imobiliaria
      if (role == 'realEstate') {
        console.log(data);
        await RealEstate.create({
          userId: id,
          name: 'teste', // tem que passar o companyName
          ...data,
        });
      }

      const payload = {id, role: data.role};
      const token = jwt.encode(payload);

      res.status(201).send({message: 'Created', token});
    }
  });
};
