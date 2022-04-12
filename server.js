import express from 'express';
import sequelize from './src/db/connection.js';
//import routers here

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Routes

//sequelize is ready to use - PLEASE CHECK HOST URL ON db/connection.js
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
