import User from '../../../models/User.model';

export default async function updateUser(id: string, data: Partial<TUser>) {
  await User.update(data, {where: {id}});
  return;
}
