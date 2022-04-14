import User from '../../../models/User.model';
import {encrypt} from '../../../utils/encrypt';

export default async function createUser(userData: Partial<TUser>) {
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
