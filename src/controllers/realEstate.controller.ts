import { Request, Response } from "express";
import { TRealEstate } from "../interfaces/realEstate.type";
import createRealEstateService from "../services/realEstate/createRealState.services";
import readRealEstateService from "../services/realEstate/readRealEstate.services";

const createRealStateController = async (
  req: Request,
  res: Response
): Promise<Response<TRealEstate>> => {
  const dataBody = req.body;
  const newRealEstate = await createRealEstateService(dataBody);

  return res.status(201).json(newRealEstate);
};

const listenRealStateController = async (
  req: Request,
  res: Response
): Promise<Response<TRealEstate[]>> => {
  const listRealEstate = await readRealEstateService();

  return res.status(200).json("listRealEstate");
};

export { createRealStateController, listenRealStateController };
