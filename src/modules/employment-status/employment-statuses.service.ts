import { AppDataSource } from "../../database";
import { AppError } from "../../utils/AppError";
import { EmploymentStatus } from './employment-statuses.entity';

const employmentStatusesRepository = AppDataSource.getRepository(EmploymentStatus);

export class EmploymentStatusesService {
    async findAll() {
        try {
            const employmentStatuses = await employmentStatusesRepository.find();
            return employmentStatuses;
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });
        }
    }

    async findById(id: number) {
        try {
            const employmentStatus = await employmentStatusesRepository.findOneBy({ id });
            return employmentStatus;
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });
        }
    }

    async create(employmentStatus: EmploymentStatus) {
        try {
            const newEmploymentStatus = await employmentStatusesRepository.save(employmentStatus);
            return newEmploymentStatus;
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });
        }
    }

    async update(id: number, employmentStatus: EmploymentStatus) {
        try {
            await employmentStatusesRepository.update(id, employmentStatus);
            return "Estado laboral actualizado correctamente";
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });
        }
    }

    async delete(id: number) {
        try {
            await employmentStatusesRepository.delete(id);
            return "Estado laboral eliminado correctamente";
        } catch (error) {
            throw new AppError({ message: 'Error', httpCode: 400 });
        }
    }
}
