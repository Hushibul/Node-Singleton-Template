import { MongoClient } from 'mongodb';
import config from '../config';

export const makeDatabaseOperation = async (operation, collectionName) => {
  const client = new MongoClient(config.mongo.url);

  try {
    await client.connect();
    console.log('Connected to the db successfully');
    const db = client.db(config.mongo.dbName);

    const collection = db.collection(collectionName);

    await operation(collection);
  } catch (err) {
    throw new Error(err);
  } finally {
    await client.close();
  }
};
