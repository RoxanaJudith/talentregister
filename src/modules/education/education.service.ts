import { AppDataSource } from "../../database"
import { AppError } from "../../utils/AppError";
import { Education } from './education.entity';

const educationRepository = AppDataSource.getRepository(Education);

export class EducationService{

  async findAll(){
    try{
      const Education = await educationRepository.find();
      return Education;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async findById( id: number){
    try{
      const Education = await educationRepository.findOneBy({id});
      return Education;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async create(Education: Education){
    try{
      const newEducation = await educationRepository.save(Education);
      return newEducation;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async update(id: number, Education: Education){
    try{
      await educationRepository.update(id, Education);
      return "Education actualizado correctamente";     
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  async delete(id: number) {
    try{
      await educationRepository.delete(id);
      return "education eliminado correctamente";
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}