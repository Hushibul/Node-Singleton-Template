import { Request, Response, Router } from 'express';
import { generateToken, verifyToken } from '../../utils/utils.jwt';

const authRouter = Router();

authRouter.post('/', (req: Request, res: Response) => {
  const { name, password } = req.body;

  const token = generateToken({ name, password });

  res.ok(token);
});

authRouter.post('/verify', async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  const verifiedUser = await verifyToken(token);

  res.ok(verifiedUser);
});

export default authRouter;
