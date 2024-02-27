import cors from 'cors';
import express from 'express';
import registeredRouters from './routes/register-routing-files';

import { makeDatabaseOperation } from './utils/utils.db';

const port = 5000;
const app = express();

app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)

  // Pass to next layer of middleware
  next();
});

const collectionName = 'DBS';
const operationWithDb = async (collection) => {
  await collection.insertOne({ a: 4 });
};

makeDatabaseOperation(operationWithDb, collectionName);

// define a route handler for the default home page
app.use('/', registeredRouters);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
