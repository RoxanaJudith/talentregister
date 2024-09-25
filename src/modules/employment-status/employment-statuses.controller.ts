import { NextFunction, Request, Response } from "express";
import { EmploymentStatusesService } from "./employment-statuses.service";
import { EmploymentStatus } from "./employment-statuses.entity";

export class EmploymentStatusesController {
    private employmentStatusesService: EmploymentStatusesService;

    constructor() {
        this.employmentStatusesService = new EmploymentStatusesService();
    }

    findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const employmentStatuses = await this.employmentStatusesService.findAll();
            res.send(employmentStatuses);
        } catch (error) {
            next(error);
        }
    }

    findById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = Number(req.params['id']);
            const employmentStatus = await this.employmentStatusesService.findById(id);
            res.send(employmentStatus);
        } catch (error) {
            next(error);
        }
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const employmentStatus: EmploymentStatus = req.body;
            const newEmploymentStatus = await this.employmentStatusesService.create(employmentStatus);
            res.send(newEmploymentStatus);
        } catch (error) {
            next(error);
        }
    }

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const employmentStatus: EmploymentStatus = req.body;
            const id: number = Number(req.params['id']);
            const updatedEmploymentStatus = await this.employmentStatusesService.update(id, employmentStatus);
            res.send(updatedEmploymentStatus);
        } catch (error) {
            next(error);
        }
    }

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = Number(req.params['id']);
            const deletedEmploymentStatus = await this.employmentStatusesService.delete(id);
            res.send(deletedEmploymentStatus);
        } catch (error) {
            next(error);
        }
    }
}
