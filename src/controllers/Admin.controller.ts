import { jwt } from "../utils/token";
import getAdminStatus from "./services/admin/getAdminStatus.service";


const getStatus = async (req, res) => {
   const token = jwt.decode(req);
   const {role} = token;

   if (role !== 'admin') {
      res.status(400).json({error: 'Você não tem permissão para acessar essa rota'});
      return;
   }

   try {
      const status = await getAdminStatus();
      res.status(200).json({status});
   } catch (error) {
      res.status(401).send(error.message);
   }
}


export const AdminController = {
   getStatus,
}
