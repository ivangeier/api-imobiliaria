import User from '../../../models/User.model';
import {decrypt, encrypt} from '../../../utils/encrypt';

export default async function updatePassword(
  id: string,
  oldPassword: string,
  newPassword: string
) {
  const user: any = await User.findOne({where: {id}});
  const passwordMatch: any = await decrypt(oldPassword, user.password);

  if (!passwordMatch) {
    throw new Error("Password don't match");
  } else {
    const encryptedPassword = await encrypt(newPassword);
    User.update({password: encryptedPassword}, {where: {id}});
    return;
  }
}
