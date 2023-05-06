import { Repository } from "typeorm";
import { TRealEstate } from "../../interfaces/realEstate.type";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { realStateSchema } from "../../schemas/realEstate.schema";

const createRealEstateService = async (dataBody: TRealEstate) => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate = realEstateRepository.create(dataBody);
  await realEstateRepository.save(realEstate);

  const returnRealEstate = realStateSchema.parse(realEstate);

  return returnRealEstate;
};

export default createRealEstateService;
