import User from '../../../models/User.model';

export default async function updateUser(id: string, data: Partial<TUser>) {
  const user = await User.update(data, {where: {id}});

  if (!user) {
    throw new Error("User not found");
  } else {
    return;
  }
}
