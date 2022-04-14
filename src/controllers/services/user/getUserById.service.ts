import User from '../../../models/User.model';

export default async function getUserById(id: string) {
  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (user) {
    const {password, ...dataWithoutPassword} = user.get();
    return dataWithoutPassword;
  } else {
    throw new Error('User not found');
  }
}
