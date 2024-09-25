import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "../user-profile/user-profile.entity";

@Entity({ name: "employment_statuses" })
export class EmploymentStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    description: string;

    @OneToMany(() => UserProfile, (userProfile) => userProfile.employmentStatus)
    userProfile: UserProfile[];
}
