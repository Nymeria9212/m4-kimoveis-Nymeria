import { DataSource, Repository } from "typeorm";
import {
  TRealEstate,
  TRealEstateRequest,
} from "../../interfaces/realEstate.type";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { realStateSchema } from "../../schemas/realEstate.schema";
import { TAddress } from "../../interfaces/address.types";
import { AppError } from "../../errors";

const createRealEstateService = async (dataBody: TRealEstateRequest) => {
  const { address, categoryId, ...dataEstate } = dataBody;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories = await categoryRepository.findOne({
    where: { id: categoryId },
  });
  if (!categories) {
    throw new AppError("Category not found", 404);
  }

  const addressCreate: Address = addressRepository.create(address);
  await addressRepository.save(addressCreate);

  const realEstate: RealEstate = realEstateRepository.create({
    ...dataEstate,
    address: addressCreate,
    category: categories,
  });
  await realEstateRepository.save(realEstate);

  const returnRealEstate = realStateSchema.parse(realEstate);

  return returnRealEstate;
};

export default createRealEstateService;
