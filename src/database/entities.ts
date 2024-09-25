import { User } from '../modules/user/user.entity';
import { Role } from '../modules/role/role.entity';
import { Status } from '../modules/status/status.entity';
import { Skills } from '../modules/skill/skill.entity';
import { TypeSkills } from '../modules/type-skill/type-skill.entity';
import { SoftSkill } from '../modules/soft-skill/soft-skill.entity';
import { Certificate } from '../modules/certificate/certificate.entity';
import { Education } from '../modules/education/education.entity';
import { UserProfile } from '../modules/user-profile/user-profile.entity';
import { UserProfileSkills } from '../modules/user-profile-skills/user-profile-skills.entity';
import { UserProfileSoftSkill } from '../modules/user-profile-soft-skills/user-profile-soft-skill.entity';
import { City } from '../modules/city/city.entity';
import { Country } from '../modules/country/country.entity';
import { DesiredPosition } from '../modules/desired-position/desired-position.entity';
import { EmploymentStatus } from '../modules/employment-status/employment-statuses.entity';
import { Language } from '../modules/language/language.entity';
import { UserLanguage } from '../modules/user-language/user-language.entity';
import { ContactUs } from '../modules/contactUs/contacUs.entity';
import { Evaluation } from '../modules/evaluations/evaluations.entity';

export const entities = [
  User,
  Role,
  Status,
  TypeSkills,
  Skills,
  SoftSkill,
  Certificate,
  Education,
  UserProfile,
  UserProfileSkills,
  UserProfileSoftSkill,
  City,
  Country,
  DesiredPosition,
  EmploymentStatus,
  Language,
  UserLanguage,
  ContactUs,
  Evaluation
];
