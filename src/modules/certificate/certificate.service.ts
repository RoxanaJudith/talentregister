import { AppDataSource } from "../../database"
import { AppError } from "../../utils/AppError";
import { Certificate } from './certificate.entity';

const certificatesRepository = AppDataSource.getRepository(Certificate);

export class CertificatesService{

  async findAll(){
    try{
      const Certificates = await certificatesRepository.find();
      return Certificates;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async findById( id: number){
    try{
      const certificate = await certificatesRepository.findOneBy({id});
      return certificate;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async create(certificate: Certificate){
    try{
      const newCertificate = await certificatesRepository.save(certificate);
      return newCertificate;
    } catch(error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }

  async update(id: number, certificate: Certificate){
    try{
      await certificatesRepository.update(id, certificate);
      return "certificado actualizado correctamente";     
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 })
    }
  }

  async delete(id: number) {
    try{
      await certificatesRepository.delete(id);
      return "certificado eliminado correctamente";
    } catch (error){
      throw new AppError({ message: 'Error', httpCode: 400 });
    }
  }
}