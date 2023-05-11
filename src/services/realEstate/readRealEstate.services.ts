import { Repository } from "typeorm";
import { Address, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  listRealEstatesSchema,
  realStateSchema,
} from "../../schemas/realEstate.schema";

const readRealEstateService = async () => {
  const readRealEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstateBD: RealEstate[] = await readRealEstateRepository.find({
    relations: { address: true },
  });

  return realEstateBD;
};

export default readRealEstateService;
