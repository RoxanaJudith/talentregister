import { EntityManager } from "typeorm";
import { AppDataSource } from "../../database"
import { AppError } from "../../utils/AppError";
import { UserProfile } from "./user-profile.entity"
import { UserProfileSkillService } from "../user-profile-skills/user-profile-skills.service";
import { UserProfileSkills } from "../user-profile-skills/user-profile-skills.entity";
import { Certificate } from "../certificate/certificate.entity";
import { Education } from "../education/education.entity";
import { UserProfileSoftSkill } from "../user-profile-soft-skills/user-profile-soft-skill.entity";
import { UserLanguage } from "../user-language/user-language.entity";
import { CreateUserProfileDto } from "./create-user-profile.dto";

const userProfileRepository = AppDataSource.getRepository(UserProfile);
const userProfileSkillRepository = AppDataSource.getRepository(UserProfileSkills);
const userProfileSoftSkillRepository = AppDataSource.getRepository(UserProfileSoftSkill);
const certificateRepository = AppDataSource.getRepository(Certificate);
const educationRepository = AppDataSource.getRepository(Education);
const userLanguagesRepository = AppDataSource.getRepository(UserLanguage);

export class UserProfileService {
  private userProfileSkillService: UserProfileSkillService;

  constructor() {
    this.userProfileSkillService = new UserProfileSkillService();
  }

  public async findAll() {
    try {
      const userProfile = await userProfileRepository.find();
      return userProfile;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById( id: number){
    try{
      const userProfile = await userProfileRepository.findOneBy({userId: {id: id}});
      return userProfile;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async create(userProfile: CreateUserProfileDto, userId: number) {
      await AppDataSource.transaction(async (manager: EntityManager) => {
        const newUserProfile = await userProfileRepository.create({
          gender: userProfile.gender,
          urlCv: userProfile.urlCv,
          urlLinkedin: userProfile.urlLinkedin,
          urlRepository: userProfile.urlRepository,
          urlPortfolio: userProfile.urlPortfolio,
          phoneNumber: userProfile.phoneNumber,
          yearOfExperiences: userProfile.yearOfExperiences,
          workMode: userProfile.workMode,
          availability: userProfile.availability,
          workVisa: userProfile.workVisa,
          relocation: userProfile.relocation,
          idealJob: userProfile.idealJob,
          proudExperience: userProfile.proudExperience,
          salaryExpectation: userProfile.salaryExpectation,
          userId: { id: userId },
          employmentStatus: { id: userProfile.employmentStatusId },
          city: { id: userProfile.cityId },
          desiredPosition: { id: userProfile.desiredPositionId }
        });

        const savedUserProfile = await manager.save(newUserProfile);
        const userProfileId = savedUserProfile.id;

        let skills = userProfile.skills;
        for (let i in skills) {
          const newUserProfileSkills = userProfileSkillRepository.create({
            userProfile: { id: userProfileId },
            levelSkill: userProfile.skills[i].level,
            skill: { id: userProfile.skills[i].id }
          });
          await manager.save(newUserProfileSkills);
        }

        let softSkills = userProfile.softSkills;
        for (let i in softSkills) {
          const newUserProfileSoftSkills = userProfileSoftSkillRepository.create({
            userProfile: { id: userProfileId },
            softSkill: { id: userProfile.softSkills[i].softSkillId }
          });
          await manager.save(newUserProfileSoftSkills);
        }

        let certificates = userProfile.certificates;
        for (let i in certificates) {
          const newCertificate = certificateRepository.create({
            userProfile: { id: userProfileId },
            institution: userProfile.certificates[i].institution,
            title: userProfile.certificates[i].title,
            issueDate: userProfile.certificates[i].issueDate,
            code: userProfile.certificates[i].code,
            url: userProfile.certificates[i].url
          });
          await manager.save(newCertificate);
        }

        let educations = userProfile.educations;
        for (let i in educations) {
          const newEducation = educationRepository.create({
            userProfile: { id: userProfileId },
            institution: userProfile.educations[i].institution,
            degree: userProfile.educations[i].degree,
            academicArea: userProfile.educations[i].academicArea,
            startDate: userProfile.educations[i].startDate,
            endDate: userProfile.educations[i].endDate
          });
          await manager.save(newEducation);
        }

        let languages = userProfile.languages;
        for (let i in languages) {
          const newUserLenguajes = userLanguagesRepository.create({
            userProfileId: { id: userProfileId },
            languagesId: { id: userProfile.languages[i].languagesId },
            level: userProfile.languages[i].level
          });
          await manager.save(newUserLenguajes);
        }
      })
  }

  public async update(id: number, userProfile: UserProfile) {
    try {
      await userProfileRepository.update(id, userProfile);
      return "User Profile actualizado correctamente";
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  public async delete(id: number) {
    try {
      await userProfileRepository.delete(id);
      return "User Profile eliminado correctamente";
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}