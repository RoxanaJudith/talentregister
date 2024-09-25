import { User } from "./user.entity";
import { Role } from "../role/role.entity";
import { AppDataSource } from "../../database";
import { AppError } from '../../utils/AppError';
import { validate} from "class-validator";
import { Status } from "../status/status.entity";
import Encryption from "../../utils/encryption";

const userRepository = AppDataSource.getRepository(User);
const roleRepository = AppDataSource.getRepository(Role);
const  encryption = new Encryption ()

export class UserService{
  
  constructor(){
    
  }
    
  public async findAll() {
    try{
      const users = await userRepository.
      createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .leftJoinAndSelect("user.status", "status")
      .select(['user.id', 'user.firstName', 'user.lastName', 'role.id','role.name', 'status.id', 'status.name'])
      .getMany()

      return users;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById(id: number) {
    if (await userRepository.findOneBy({id}) == null) {
      throw new AppError({ message: 'El usuario no se encuentra registrado', httpCode: 404 });
    }
    try{
      const user = await userRepository.
      createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .leftJoinAndSelect("user.status", "status")
      .select(['user.id', 'user.firstName', 'user.lastName', 'role.id','role.name', 'status.id', 'status.name'])
      .where("user.id = :id", { id })
      .getOne()
      return user;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
  
  public async create(post:User){
      let roleId =  { id:2 } as Role;
      let statusId = { id:2 } as Status;
      let user  = new User();
      user.email = post.email; 
      user.firstName = post.firstName; 
      user.lastName = post.lastName;
      user.password = post.password;
      user.role = roleId;
      user.status = statusId;
      
      const checkUser = await userRepository.findOne({where:{email:post.email}});
      if (checkUser) {
        throw new AppError({ message: 'El correo ingresado ya se está en uso',httpCode: 409});
      } else {
        user.password = await encryption.password(post.password);

        const newUser = await userRepository.save(user);
        return newUser;
      }
  }
  
  public async update(id: number, user: User){
    try{
      await userRepository.update(id, user);
      return userRepository.findOneBy({id});     
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  public async delete(id: number) {
    try{
      await userRepository.delete(id);
      return "Usuario eliminado correctamente";
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findByEmail(email: string) {
    try{
      let user = await userRepository.
      createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .leftJoinAndSelect("user.status", "status")
      .select(['user.id', 'user.firstName', 'user.lastName','user.email','role.name','status.name'])
      .where("user.email = :email", { email })
      .getOne()
      if(!user) throw new AppError({ message: 'Error', httpCode: 400 });
      return user;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
    
}