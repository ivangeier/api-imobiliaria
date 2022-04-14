import User from '../../../models/User.model';

export default async function getAllUsers() {
  const users = await User.findAll({
    where: {
      role: 'client',
    },
  });

  const noPasswordData = users.map((user) => {
    const {password, ...dataWithoutPassword} = user.get();
    return dataWithoutPassword;
  });
  return noPasswordData;
}
