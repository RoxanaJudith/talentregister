import { NextFunction, Request, Response } from "express";
import { CertificatesService } from "./certificate.service";
import { Certificate } from "./certificate.entity";

export class CertificatesController{

  private certificatesService: CertificatesService;

  constructor(){
    this.certificatesService = new CertificatesService();
  }

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const certificates = await this.certificatesService.findAll();
      res.send(certificates);
    } catch(error){
      next(error);
    }
  }

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id: number = Number(req.params['id']);
      const certificate = await this.certificatesService.findById(id);
      res.send(certificate);
    } catch(error){
      next(error);
    }
  }

  create = async (req: Request, res: Response,next: NextFunction) =>{
    try {
      const certificate:Certificate = req.body;
      const newCertificate = await this.certificatesService.create(certificate);
      res.send(newCertificate);
    }catch(err) {
      next(err);
    }
  }
  
  update =  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const certificate:Certificate = req.body;
      const id: number = Number(req.params['id']);
      const updateCertificate = await this.certificatesService.update(id, certificate);
      res.send(updateCertificate);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const id:Number = Number(req.params['id']);
      const deleteCertificate = await this.certificatesService.delete(Number(id));
      res.send(deleteCertificate);
    }catch(error){
      next(error);
    }
  }
}