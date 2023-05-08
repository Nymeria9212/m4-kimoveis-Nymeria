import { Repository } from "typeorm";
import { Address, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { listRealEstatesSchema } from "../../schemas/realEstate.schema";

const readRealEstateService = async () => {
  const readRealEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstateBD: RealEstate[] = await readRealEstateRepository.find({
    relations: { address: true },
  });

  const returnRealEstates = listRealEstatesSchema.parse(realEstateBD);

  return returnRealEstates;
};

export default readRealEstateService;
