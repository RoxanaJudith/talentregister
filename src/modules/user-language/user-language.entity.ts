import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "../user-profile/user-profile.entity";
import { Language } from "../language/language.entity";
import { LanguageLevel } from "../enums/language-level";

@Entity({ name: "user_languages" })
export class UserLanguage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Language, (language) => language.id)
  languagesId: Language;

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.id)
  userProfileId: UserProfile;

  @Column()
  level: LanguageLevel;
}