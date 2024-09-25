import { AppDataSource } from "../../database"
import { AppError } from "../../utils/AppError";
import { SoftSkill } from "./soft-skill.entity"

const softskillRepository = AppDataSource.getRepository(SoftSkill);

export class SoftSkillService{

  async findAll(){
    try{
      const softskills = await softskillRepository.find();
      return softskills;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async findById( id: number){
    try{
      const softskill = await softskillRepository.findOneBy({id});
      return softskill;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async create(softskill: SoftSkill){
    console.log('service'+ softskill);
    try{
      const newSoftSkill = await softskillRepository.save(softskill);
      return newSoftSkill;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async update(id: number, softskill: SoftSkill){
    try{
      await softskillRepository.update(id, softskill);
      return "SoftSkill actualizado correctamente";     
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  async delete(id: number) {
    try{
      await softskillRepository.delete(id);
      return "SoftSkill eliminado correctamente";
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}