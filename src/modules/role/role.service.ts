import { AppDataSource } from "../../database";
import { AppError } from "../../utils/AppError";
import { Role } from "./role.entity";

const roleRepository = AppDataSource.getRepository(Role);

export class RoleService{

  public async findAll() {
    try{
      const roles = await roleRepository.find();
      return roles;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById(id: number) {
    try{
      const role = await roleRepository.findOneBy({id});
      return role;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
  
  public async create(role:Role){

    try{
      const newRole = await roleRepository.save(role);
      return newRole;
    }catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }   
  }
  
  public async update(id: number, role: Role){

    try{
      await roleRepository.update(id, role);
      return roleRepository.findOneBy({id});     
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  public async delete(id: number) {

    try{
      const deleteRole = await roleRepository.findOneBy({id})
      await roleRepository.delete(id);
      return deleteRole;
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}