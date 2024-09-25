import { AppError } from '../../utils/AppError';
import { UserLanguage } from './user-language.entity';
import { AppDataSource } from '../../database';

const userLanguageRepository= AppDataSource.getRepository(UserLanguage)

export class UserLanguageService {

  public async findAll(){
    try {
      const userLanguages = await userLanguageRepository.find();
      return userLanguages;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById(id: number){
    try {
      const userLanguage = await userLanguageRepository.findOneBy({id});
      return userLanguage;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async create(userLanguage: UserLanguage){
    try {
      const newUserLanguage = await userLanguageRepository.save(userLanguage);
      return newUserLanguage;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async update(id: number, userLanguage: UserLanguage) {
    try {
      await userLanguageRepository.update(id, userLanguage);
      const updatedUserLanguage = await userLanguageRepository.findOneBy({id});
      return updatedUserLanguage;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async delete(id: number) {
    try {
      const userLanguageToDelete = await userLanguageRepository.findOneBy({id});
      await userLanguageRepository.delete(id);
      return userLanguageToDelete;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}
