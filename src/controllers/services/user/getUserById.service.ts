import User from '../../../models/User.model';

export default async function getUserById(id: string) {
  const user = await User.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ['password'],
    }
  });

  if (user) {
    return user;
  } else {
    throw new Error('User not found');
  }
}
