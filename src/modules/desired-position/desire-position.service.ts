import { AppDataSource } from "../../database";
import { AppError } from "../../utils/AppError";
import { DesiredPosition } from "./desired-position.entity";

const desiredPositionRepository = AppDataSource.getRepository(DesiredPosition);

export class DesiredPositionService {
  public async findAll() {
    try {
      const desiredPositions = await desiredPositionRepository.find();
      return desiredPositions;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async findById(id: number) {
    try {
      const desiredPosition = await desiredPositionRepository.findOneBy({id});
      return desiredPosition;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async create(desiredPosition: DesiredPosition) {
    try {
      const newDesiredPosition = await desiredPositionRepository.save(desiredPosition);
      return newDesiredPosition;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async update(id: number, desiredPosition: DesiredPosition) {
    try {
      await desiredPositionRepository.update(id, desiredPosition);
      const updatedDesiredPosition = await desiredPositionRepository.findOneBy({id});
      return updatedDesiredPosition;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  public async delete(id: number) {
    try {
      const desiredPositionToDelete = await desiredPositionRepository.findOneBy({id});
      await desiredPositionRepository.delete(id);
      return desiredPositionToDelete;
    } catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}
