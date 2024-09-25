import { AppDataSource } from "../../database"
import { AppError } from "../../utils/AppError";
import { TypeSkills } from "../type-skill/type-skill.entity";
import { CreateSkillDto } from "./create-skill.dto";
import { Skills } from "./skill.entity"
import { ILike } from 'typeorm'

const skillRepository = AppDataSource.getRepository(Skills);
const typeSkillRepository = AppDataSource.getRepository(TypeSkills);

export class SkillService {

  async findAll() {
    try {
      const skills = await skillRepository.find({
        relations: {
          typeSkill: true
        }
      });
      return skills;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async findById(id: number) {
    try {
      const skill = await skillRepository.findOneBy({ id });
      return skill;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async create(skill: CreateSkillDto) {
    try {
      const exist = await skillRepository.find({
        where: {
          description: ILike(`%${skill.description}%`)
        }
      })

      const typeSkillExist = await typeSkillRepository.findOneBy({ id: skill.typeSkill })
      if (!typeSkillExist) throw new Error(`TypeSkill with id: ${skill.typeSkill} doesn't exist`);

      if (exist.length > 0) throw new Error("Skill already exist");

      const newSkill = await skillRepository.save({
        description: skill.description,
        typeSkill: { id: skill.typeSkill }
      });
      return newSkill;
    } catch (error) {
      throw new AppError({ message: (error as Error).message, httpCode: 400 });
    }
  }

  async update(id: number, skill: CreateSkillDto) {
    try {
      const exist = await skillRepository.findOne({
        where: { id },
        relations: { typeSkill: true }
      })
      if (!exist) throw new Error(`Skill with id: ${id} doesn't exist`);

      if (exist.description === skill.description && exist.typeSkill.id === skill.typeSkill)
        throw new Error("No changes in request");

      const nameExist = await skillRepository.findOne({
        where: {
          description: ILike(`%${skill.description}`)
        },
        relations: {
          typeSkill: true
        }
      })

      if (nameExist && nameExist.id !== id)
        throw new Error("Invalid description: already exist")

      const typeSkillExist = await typeSkillRepository.findOneBy({ id: skill.typeSkill })
      if (!typeSkillExist) throw new Error(`TypeSkill with id: ${skill.typeSkill} doesn't exist`);

      await skillRepository.update(id, skill);
      return "Skill actualizado correctamente";
    } catch (error) {
      throw new AppError({ message: (error as Error).message, httpCode: 400 })
    }
  }

  async delete(id: number) {
    try {
      const exist = await skillRepository.findOneBy({ id })
      if (!exist) throw new Error(`Skill with id: ${id} doesn't exist`);

      await skillRepository.delete(id);
      return "Skill eliminado correctamente";
    } catch (error) {
      throw new AppError({ message: (error as Error).message, httpCode: 400 });
    }
  }
}