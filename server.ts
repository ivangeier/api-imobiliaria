import app from './src/config/app';
import routes from './src/routes';
import 'dotenv/config';
import sequelize from './src/db/connection';

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
