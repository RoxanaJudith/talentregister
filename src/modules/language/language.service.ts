import { AppDataSource } from "../../database";
import { AppError } from "../../utils/AppError";
import { Language } from "./language.entity";

const languageRepository = AppDataSource.getRepository(Language);

export class LanguageService {
  public async findAll() {
    try {
      const languages = await languageRepository.find();
      return languages;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById(id: number) {
    try {
      const language = await languageRepository.findOneBy({id});
      return language;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async create(language: Language) {
    try {
      const newLanguage = await languageRepository.save(language);
      return newLanguage;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async update(id: number, language: Language) {
    try {
      await languageRepository.update(id, language);
      const updatedLanguage = await languageRepository.findOneBy({id});
      return updatedLanguage;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async delete(id: number) {
    try {
      const languageToDelete = await languageRepository.findOneBy({id});
      await languageRepository.delete(id);
      return languageToDelete;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}
