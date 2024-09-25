import { Status} from "./status.entity";
import { AppDataSource } from "../../database";
import { AppError } from '../../utils/AppError';
import { validate} from "class-validator";

const statusRepository = AppDataSource.getRepository(Status);


export class StatusService
{
  constructor(
  ){
  }
    
  public async findAll() {
    try {
      const status = await statusRepository.find();
      return status;
    } catch (error) {
        throw new AppError({ message: 'Error', httpCode: 400 });
    }
      
  }

  public async findById(id: number) {
    try {
      const status = await statusRepository.findOneBy({id});
      return status;
    } catch (error) {
        throw new AppError({ message: 'Error', httpCode: 400 });
      }
  }

  public async create(post:Status){

    try {

      let status  = new Status();
      status.name = post.name; 
      await statusRepository.save(post);
      return status;

    } catch (error) {
        throw new AppError({ message: 'Error', httpCode: 400 });
      }
  }
  
  public async update(status: Status, id: number){
    try {
      const updateStatus = await statusRepository.update(id, status);
      return updateStatus;
    }catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
      }
  }

  public async delete(id: number) {
    try {
      const deletedPost = await statusRepository.delete(id);
      return deletedPost;
    }catch (error) {
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}