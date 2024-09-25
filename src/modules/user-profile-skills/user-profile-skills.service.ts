import { EntityManager } from "typeorm";
import { AppDataSource } from "../../database"
import { AppError } from "../../utils/AppError";
import { UserProfileSkills } from "./user-profile-skills.entity"

const userProfileSkillsRepository = AppDataSource.getRepository(UserProfileSkills);

export class UserProfileSkillService{

  public async findAll(){
    try{
      const userProfileSkill = await userProfileSkillsRepository.find();
      return userProfileSkill;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById( id: number){
    try{
      const userProfileSkill = await userProfileSkillsRepository.findBy({userProfile: {id:id}});
      return userProfileSkill;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async create(levelS: any, skills: any, userPId: any , manager: EntityManager){
    try{
      const newUserProfileSkills = userProfileSkillsRepository.create({
        levelSkill: levelS,
        userProfile: { id: userPId },
        skill: skills
      });
      const savedSkill = await manager.save(newUserProfileSkills);
      //
      console.log("por aqui no paso " + savedSkill);
      return "hola";
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async update(id: number, userProfileSkill: UserProfileSkills){
    try{
      await userProfileSkillsRepository.update(id, userProfileSkill);
      return "User Profile Skill actualizado correctamente";     
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  public async delete(id: number) {
    try{
      await userProfileSkillsRepository.delete(id);
      return "User Profile Skill eliminado correctamente";
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}