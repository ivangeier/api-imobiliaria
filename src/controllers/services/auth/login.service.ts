import User from '../../../models/User.model';
import {decrypt} from '../../../utils/encrypt';
import {jwt} from '../../../utils/token';

export default async function createLogin(email: string, password: string) {
  const user: any = await User.findOne({
    where: {
      email,
      isActive: true,
    }
  });

  if (!user) {
    throw new Error('Email not found');
  }
 
  const passwordMatch = await decrypt(password, user.password);

  if (passwordMatch) {
    const {password, ...userWithoutPassword} = user.get();
    return userWithoutPassword;
  } else {
    throw new Error('User not found');
  }
}
