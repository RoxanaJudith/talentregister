import { AppDataSource } from "../../database"
import { AppError } from "../../utils/AppError";
import { UserProfileSoftSkill } from "./user-profile-soft-skill.entity"

const userProfileSoftSkillRepository = AppDataSource.getRepository(UserProfileSoftSkill);

export class UserProfileSoftSkillService{

  public async findAll(){
    try{
      const userProfileSoftSkills = await userProfileSoftSkillRepository.find();
      return userProfileSoftSkills;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById( id: number){
    try{
      const userProfileSoftSkill = await userProfileSoftSkillRepository.findOneBy({id});
      return userProfileSoftSkill;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async create(userProfileSoftSkill: UserProfileSoftSkill){
    console.log('service'+ userProfileSoftSkill);
    try{
      const newUserSoftSkill = await userProfileSoftSkillRepository.save(userProfileSoftSkill);
      return newUserSoftSkill;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async update(id: number, userProfileSoftSkill: UserProfileSoftSkill){
    try{
      await userProfileSoftSkillRepository.update(id, userProfileSoftSkill);
      return "Habilidad blanda del usuario actualizada correctamente";     
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  public async delete(id: number) {
    try{
      await userProfileSoftSkillRepository.delete(id);
      return "Habilidad blanda del usuario eliminada correctamente";
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}