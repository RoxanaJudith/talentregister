import { AppError } from "../../utils/AppError";
import { AppDataSource } from "../../database";
import { ContactUs } from "./contacUs.entity";

const contactUsRepositori = AppDataSource.getRepository(ContactUs)
export class ContactUsService {
    public async findAll() {
        try {
            const contacUS = await contactUsRepositori.find()
            return contacUS;
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });

        }
    }

    public async findById(id: number) {
        try {
            const contactUs = await contactUsRepositori.findOneBy({ id });
            return contactUs;
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });
        }
    }

    public async create(contactUs: ContactUs) {
        try {
            const newContactUs = await contactUsRepositori.save(contactUs);
            return newContactUs;
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });
        }
    }

    public async update(id: number, contactUs: ContactUs) {
        try {
            await contactUsRepositori.update(id, contactUs);
            const upDatedContactUs = await contactUsRepositori.findOneBy({ id });
            return upDatedContactUs
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });
        }
    }

    public async delete(id: number) {
        try {
            const contactUsToDelete = await contactUsRepositori.findOneBy({ id });
            await contactUsRepositori.delete(id);
            return contactUsToDelete
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });
        }
    }
}