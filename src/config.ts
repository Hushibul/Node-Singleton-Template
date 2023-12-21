import dotenv from 'dotenv';
dotenv.config();

const { baseUrl, frontendUrl, mongoUrl, dbName } = process.env;

const config = {
  baseUrl,
  frontendUrl,
  mongo: {
    url: mongoUrl,
    dbName,
  },
};

export = config;
