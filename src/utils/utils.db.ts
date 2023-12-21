import { MongoClient } from 'mongodb';
import config from '../config';

export const createConnection = async () => {
  try {
    const dbConnection = await new MongoClient(config.mongo.url).connect();
    console.log(dbConnection);
    return dbConnection;
  } catch (err) {
    throw new Error('Error in DB connection ' + err);
  }
};

export const connectToCollection = async (dbConnection, collectionName) => {
  try {
    const db = dbConnection.db(config.mongo.dbName);
    const dbCollection = db.collection(collectionName);

    return dbCollection;
  } catch (err) {
    throw new Error(err);
  }
};

export const closeConnection = async (dbConnection) => {
  try {
    await dbConnection.close();
  } catch (err) {
    throw new Error('Error in Closing DB connection ' + err);
  }
};
