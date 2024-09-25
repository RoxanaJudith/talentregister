import * as ExcelJS from 'exceljs';
import { AppDataSource } from '../../database';
import { UserProfile } from './user-profile.entity';
import { Request, Response } from 'express';

const userProfileRepository = AppDataSource.getRepository(UserProfile);

export async function generateApplicationsExcel(req: Request, res: Response) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Postulaciones');

  const profiles = await userProfileRepository.find({
    relations: {
      userId: true,
      educations: true,
      certificates: true,
      userSoftSkill: {
        softSkill: true,
      },
      userProfileSkills: {
        skill: true,
      },
      city: {
        countryId: true,
      },
    },
  });

  worksheet.addRow([
    'ID',
    'Nombre',
    'Apellido',
    'Email',
    'Genero',
    'N° Telefono',
    'URL CV',
    'URL LinkedIn',
    'URL Repository',
    'URL Portfolio',
    'Años de Experiencia',
    'Work Mode',
    'Disponibilidad',
    'Work Visa',
    'Relocation',
    'Salary Expectation',
    'Employment Status',
    'Ciudad',
    'Posición deseada',
    'Habilidades blandas',
    'Certificados',
    'Educatión',
    'Habilidades Nivel 1',
    'Habilidades Nivel 2',
    'Habilidades Nivel 3',
  ]);

  profiles.forEach((userProfile) => {
    const softSkills = userProfile.userSoftSkill
      .map((skill) => skill.softSkill.name)
      .join(', ');

    const certificates = userProfile.certificates
      .map((cert) => `${cert.title} (${cert.institution})`)
      .join('\n');

    const educations = userProfile.educations
      .map((edu) => `${edu.degree} at ${edu.institution}`)
      .join('\n');

    const skillsLevel1 = userProfile.userProfileSkills
      .filter((skill) => Number(skill.levelSkill) === 1)
      .map((s) => s.skill.description)
      .join(' - ');
    const skillsLevel2 = userProfile.userProfileSkills
      .filter((skill) => Number(skill.levelSkill) === 2)
      .map((s) => s.skill.description)
      .join(' - ');
    const skillsLevel3 = userProfile.userProfileSkills
      .filter((skill) => Number(skill.levelSkill) === 3)
      .map((s) => s.skill.description)
      .join(' - ');

    // const languages = userProfile.languages.map(lang => `${lang.languagesId} (${lang.level})`).join(', ');

    worksheet.addRow([
      userProfile.userId.id,
      userProfile.userId.firstName,
      userProfile.userId.lastName,
      userProfile.userId.email,
      userProfile.gender,
      userProfile.phoneNumber,
      userProfile.urlCv,
      userProfile.urlLinkedin,
      userProfile.urlRepository,
      userProfile.urlPortfolio,
      userProfile.yearOfExperiences,
      userProfile.workMode.join(', '),
      userProfile.availability.join(', '),
      userProfile.workVisa.join(', '),
      userProfile.relocation,
      userProfile.salaryExpectation,
      userProfile.employmentStatus.description,
      userProfile.city.name + ' - ' + userProfile.city.countryId.name,
      userProfile.desiredPosition.name,
      softSkills,
      certificates,
      educations,
      skillsLevel1,
      skillsLevel2,
      skillsLevel3,
      // languages,
    ]);
  });

  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  );
  res.setHeader(
    'Content-Disposition',
    'attachment; filename=postulaciones.xlsx'
  );

  await workbook.xlsx.write(res);
  res.end();
}
