import { Request, Response } from "express";
import readSchedulesRealEstate from "../services/schedules/readSchedulesRealEstate.services";
import createSchedulesService from "../services/schedules/createSchedules.services";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = parseInt(res.locals.id);
  const dataBody = req.body;

  const newSchedules = await createSchedulesService(dataBody, idUser);

  return res.status(201).json();
};

const listenSchedulesRealStateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);

  const listSchedulesRealEstate = await readSchedulesRealEstate(id);

  return res.status(200).json(listSchedulesRealEstate);
};
export { createSchedulesController, listenSchedulesRealStateController };
