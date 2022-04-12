import app from './src/config/app';
import routes from './src/routes';
import 'dotenv/config';
import sequelize from './src/db/connection';

const port = process.env.PORT || 3000;

routes(app);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
