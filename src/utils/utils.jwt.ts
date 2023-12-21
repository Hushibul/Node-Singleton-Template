import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const { jwtSecret } = process.env;

export const generateToken = (userInfo: any) =>
  jwt.sign(
    {
      userInfo,
    },
    jwtSecret,
    { expiresIn: '1h' }
  );

export const verifyToken = (token: any) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};
