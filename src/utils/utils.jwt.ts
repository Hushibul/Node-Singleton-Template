import jwt from 'jsonwebtoken';

const jwtSecret = 'jkljklsdjkljskljkljdkljskla';

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
