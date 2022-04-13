import User from '../../models/User.model';
import {encrypt} from '../../utils/encrypt';

type UserData = {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
  role: string;
};

export default async function createUser(userData: UserData) {
  const user = await User.findOne({
    where: {
      cpf: userData.cpf,
    },
  });
  if (user) {
    throw new Error('User already exists');
  } else {
    const {password, ...user} = userData;
    const encodedPassword = await encrypt(password);
    const createdUser = await User.create({
      password: encodedPassword,
      ...user,
    });
    return createdUser.get();
  }
}
