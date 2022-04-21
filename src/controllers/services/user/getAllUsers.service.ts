import User from '../../../models/User.model';

export default async function getAllUsers() {
  const users = await User.findAll({
    where: {
      role: 'client',
    },
    attributes: {
      exclude: ['password'],
    }
  });

  return users.map((user) => {
    return user.get();
  });
}
