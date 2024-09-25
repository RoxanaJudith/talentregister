import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import config from './config';

interface IRole {
  id: number;
  name: string;
}

export interface IPayloadEncryption  {
    userId: number;
    email: string;
    role: IRole;
}

class Encryption {

    private KeyUser : string;
    private keyResetPassword : string;

    constructor(){
    this.KeyUser= config.privateKey.user;
    this.keyResetPassword = config.privateKey.resetPassword;
    }

  password(password:string,saltRounds:number = 10):Promise<string> {
    const hashedPassword =  bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  verifyPassword(someOtherPlaintextPassword:string , hash:string) {
    const isMatch =  bcrypt.compare(someOtherPlaintextPassword, hash);
    return isMatch;
   
  }
  
  tokenLogin(IPayload: IPayloadEncryption) {
    const token =  jwt.sign(IPayload, this.KeyUser,{expiresIn: "7 days"});
    return token;
  }
  
  verifyTokenLogin(token:string){
    const decodedToken =  jwt.verify(token, this.KeyUser)
    return decodedToken;
  }

  linkResetPassword(user:IPayloadEncryption){
        const token =jwt.sign(user,this.keyResetPassword,{expiresIn:"30m"});
        return token;
  }
    
  resetPassword(token:string){
    const decodedToken: any = jwt.verify(token, this.keyResetPassword);
    return decodedToken;
        
  }
}

export default Encryption;
