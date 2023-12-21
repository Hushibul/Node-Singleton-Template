import express from 'express';
import authRouter from './auth/route.auth';
// import { userRoutes } from './users/route.user';

const registeredRouters = express.Router();
// registeredRouters.use('/users', userRoutes)
registeredRouters.use('/auth', authRouter);

export = registeredRouters;
