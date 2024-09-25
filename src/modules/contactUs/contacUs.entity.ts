import { Column,Entity, PrimaryGeneratedColumn} from "typeorm";
import { contactUsArea } from "../enums/contactUs-area";


@Entity({name:"contact_us"})
export class ContactUs{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type:"varchar",length:20})
    name: string;

    @Column({type: "varchar" , length:20 })
    last_name : string;

    @Column({type:"varchar", length:20})
    corporate_email:string;

    @Column({type: "varchar", length:16})
    phone_number : string;

    @Column({type: "varchar", length:20})
    corporate: string;

    @Column({type: "varchar", length:20})
    comment: string;


    @Column({
        type: "enum",
        enum: contactUsArea,
        array: true
      })
      contact_us_area: string


}