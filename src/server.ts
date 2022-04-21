import app from './config/app';
import routes from './routes';
import 'dotenv/config';
import sequelize from './db/connection';

const PORT = process.env.PORT || 3000;

routes(app);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
