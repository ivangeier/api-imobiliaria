import User from '../../../models/User.model';

export default async function deleteUser(id: string) {
  const user = await User.findOne({
    where: {
      id,
    },
  });
  if (!user) {
    throw new Error('User not found');
  } else {
    await User.destroy({where: {id}});
    return;
  }
}
