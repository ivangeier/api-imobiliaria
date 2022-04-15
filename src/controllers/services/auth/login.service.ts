import User from '../../../models/User.model';
import {decrypt} from '../../../utils/encrypt';
import {jwt} from '../../../utils/token';

export default async function createLogin(email, password) {
  const user = await (await User.findOne({where: {email}})).get();

  if (!user) {
    throw new Error('Email not found');
  }
  const passwordMatch = await decrypt(password, user.password);

  if (passwordMatch) {
    const {password, ...userWithoutPassword} = user;
    return userWithoutPassword;
  } else {
    throw new Error('User not found');
  }
}
