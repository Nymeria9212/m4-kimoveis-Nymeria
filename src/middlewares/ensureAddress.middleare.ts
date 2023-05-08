import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Address } from "../entities";
import { AppDataSource } from "../data-source";
import { AddressReq } from "../interfaces/address.types";
import { AppError } from "../errors";

const ensureAddressMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const address: AddressReq = req.body.address;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const addressFind = await addressRepository.findOne({
    where: {
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      street: address.street,
      number: address.number!,
    },
  });

  if (addressFind) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};

export default ensureAddressMiddleware;
