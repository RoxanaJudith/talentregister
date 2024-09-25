import { AppDataSource } from "../../database"
import { AppError } from "../../utils/AppError";
import { TypeSkills } from "./type-skill.entity"
import { ILike } from 'typeorm'

const typeSkillRepository = AppDataSource.getRepository(TypeSkills);

export class TypeSkillService {

  async findAll() {
    try {
      const typeSkills = await typeSkillRepository.find({
        relations: {
          skills: true
        }
      });
      return typeSkills;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async findById(id: number) {
    try {
      const typeSkill = await typeSkillRepository.findOneBy({ id });
      return typeSkill;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async create(typeSkill: TypeSkills) {
    try {
      const exist = await typeSkillRepository.find({
        where: {
          name: ILike(`%${typeSkill.name}%`)
        }
      })

      if (exist.length > 0) throw new Error("Type skill already exist");

      const newTypeSkill = await typeSkillRepository.save(typeSkill);
      return newTypeSkill;
    } catch (error) {
      throw new AppError({ message: (error as Error).message, httpCode: 400 });
    }
  }

  async update(id: number, typeSkill: TypeSkills) {
    try {
      const exist = await typeSkillRepository.findOneBy({ id })
      if (!exist) throw new Error(`TypeSkill with id: ${id} doesn't exist`);

      if (exist.name === typeSkill.name)
        throw new Error("No changes in request");

      const nameExist = await typeSkillRepository.findOne({
        where: {
          name: ILike(`%${typeSkill.name}`)
        }
      })

      if (nameExist && exist.id !== nameExist?.id)
        throw new Error("Invalid name: already exist");

      await typeSkillRepository.update(id, typeSkill);
      return "TypeSkill actualizado correctamente";
    } catch (error) {
      throw new AppError({ message: (error as Error).message, httpCode: 400 })
    }
  }

  async delete(id: number) {
    try {
      const exist = await typeSkillRepository.findOneBy({ id })
      if (!exist) throw new Error(`TypeSkill with id: ${id} doesn't exist`);

      await typeSkillRepository.delete(id);
      return "TypeSkill eliminado correctamente";
    } catch (error) {
      throw new AppError({ message: (error as Error).message, httpCode: 400 });
    }
  }
}