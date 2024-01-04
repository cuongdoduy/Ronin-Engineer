import jsonwebtoken from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserType } from '../database/interfaces/User';
import { User } from '../database/models/airport';
import dotenv from 'dotenv';
const user: User = new User();
dotenv.config(
  process.env.NODE_ENV === 'test'
    ? { path: '.env.test' }
    : { path: '.env' }
);

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
    const User: UserType = await user.getUserById(Number(decoded));
    if (!User) {
      throw new Error('Authentication failed');
    }
    next();
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};
