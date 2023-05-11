import { Repository } from "typeorm";
import { Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";

const cateroryIdRealEstate = async (id: number) => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const realEstateCategory = await categoryRepository.findOne({
    where: { id: id },
    relations: { realEstate: true },
  });

  return realEstateCategory;
};

export default cateroryIdRealEstate;
