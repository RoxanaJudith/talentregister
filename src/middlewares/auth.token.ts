import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import Encryption from '../utils/encryption';
import config from '../utils/config';

dotenv.config();

interface IRole {
  id: number;
  name: string;
}

interface IPayload {
  userId: string;
  email: string;
  role: IRole;
}

class AuthToken {
  private encryption: Encryption;

  constructor() {
    this.encryption = new Encryption();
  }

  private verifyToken = (req: Request, res: Response): IPayload | undefined => {
    let token = req.headers.authorization;
    if (!token) {
      res.status(401).send({ message: 'Token is required' });
      return;
    }

    if (token?.includes('Bearer')) token = token.split('Bearer ')[1];

    try {
      const decodedToken = this.encryption.verifyTokenLogin(token) as IPayload;
      req.userId = decodedToken.userId;
      req.email = decodedToken.email;
      req.role = decodedToken.role;
      return decodedToken;
    } catch (error) {
      res.status(401).send({ message: 'Token no válido' });
      return undefined;
    }
  };

  public user = async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = this.verifyToken(req, res);
    if (!decodedToken) return;
    if ((decodedToken as IPayload).role.name !== config.roles.USER) {
      return res.status(403).json('Access denied');
    }
    next();
  };

  public admin = async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = this.verifyToken(req, res);
    if (!decodedToken) return;
    if ((decodedToken as IPayload).role.name !== config.roles.ADMIN) {
      return res.status(403).json('Access denied');
    }
    next();
  };
}

export default new AuthToken();
