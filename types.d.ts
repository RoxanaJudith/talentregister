declare namespace Express {
  
  interface IRole {
    id: number;
    name: string;
  }

    export interface Request {
      userId: string;
      id: string;
      email: string;
      role: IRole;
    }
  }
  