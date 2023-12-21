// import { MongoClient,ServerApiVersion, ObjectId } from 'mongodb';
// import { ConfigService } from '../service.config';
// const config = ConfigService.getInstance().getConfig();

// export class UsersDb {
//   private static dbInstance: UsersDb;
//   private collectionName: string;
//   constructor() {
//     this.collectionName = 'users';
//   }

//   public static getInstance() {
//     if (!this.dbInstance) {
//       this.dbInstance = new UsersDb();
//     }
//     return this.dbInstance;
//   }

//   public async getDbConnection() {
//     const dbConnection = await new MongoClient(config.mongo.url, {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }).connect();
//     return dbConnection;
//   }
//   async add(memberData: any) {
//     const dbConn: any = await this.getDbConnection();
//     const dbCollection = dbConn
//       .db(config.mongo.dbName)
//       .collection(this.collectionName);
//     memberData.createdAt = new Date();
//     memberData.updatedAt = new Date();
//     const result = await dbCollection.insertOne(memberData);
//     await dbConn.close();
//     return result;
//   }
//   // get all wild-card members data
  

//   async doesExist(email: string) {
    
//     // first method for fetching DB
//     const dbClient: any = await mongoConnection.getMongoConnection();
//     try {
//       const database = await dbClient.db(variables.DatabaseName);
//       const pipeline = [
//         {
//           $match: {
//             email,
//           },
//         },
//         {
//           $limit: 1,
//         },
//       ];
//       const [userInfo] = await database
//         .collection(this.collectionName)
//         .aggregate(pipeline)
//         .toArray();
//       return userInfo;
//     } catch (error) {
//       throw { message: "Unable to retrieve data" };
//     } finally {
//       await dbClient.close();
//     }

//     // Second method for fetching DB
//     // return new Promise((resolve, reject) => {
//     //   mongoConnection.getMongoConnection().then(async (mongoClient: any) => {
//     //     const mongoDb = mongoClient.db("Test2");
//     //     mongoDb
//     //       .collection(this.collectionName)
//     //       .findOne({ email })
//     //       .then((resultData: any, error: any) => {
//     //         mongoClient.close();
//     //         if (error) reject(error);
//     //         resolve(resultData);
//     //       });
//     //   });
//     // }).catch((error) => {
//     //   console.log("Catch error: ", error);
//     //   throw error;
//     // });
//   }

//   async create(data: any) {
//     const dbClient: any = await mongoConnection.getMongoConnection();
//     try {
//       const database = await dbClient.db(variables.DatabaseName);
//       const userInfo = await database
//         .collection(this.collectionName)
//         .insertOne(data);
//       return userInfo;
//     } catch (error) {
//       throw { message: "Unable to retrieve data" };
//     } finally {
//       await dbClient.close();
//     }
//   }

//   async resetPassword(email: string, password: string) {
//     // query with mongodb api method
//     // const dbClient: any = await mongoConnection.getMongoConnection();
//     // try {
//     //   // Define the update operation
//     //   const update = {
//     //     $set: {
//     //       password,
//     //     },
//     //   };

//     //   const database = await dbClient.db(variables.DatabaseName);
//     //   const userInfo = await database
//     //     .collection(this.collectionName)
//     //     .findOneAndUpdate({ email }, update);
//     //   return userInfo;
//     // } catch (error) {
//     //   throw { message: "Unable to retrieve data" };
//     // } finally {
//     //   await dbClient.close();
//     // }

//     // Query with aggregation method
//     const dbClient: any = await mongoConnection.getMongoConnection();
//     try {
//       // Define the update operation
//       const pipeline = [
//         {
//           $match: {
//             email,
//           },
//         },
//         {
//           $set: {
//             password,
//           },
//         },
//         {
//           $project: {
//             name: 1,
//             email: 1,
//           },
//         },
//       ];

//       const database = await dbClient.db(variables.DatabaseName);
//       const [userInfo] = await database
//         .collection(this.collectionName)
//         .aggregate(pipeline)
//         .toArray();
//       return userInfo;
//     } catch (error) {
//       throw { message: "Unable to retrieve data" };
//     } finally {
//       await dbClient.close();
//     }

// }
// }
