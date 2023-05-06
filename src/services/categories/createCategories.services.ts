import { Repository } from "typeorm";
import { TCategorieRequest } from "../../interfaces/categories.type";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categoriesSchema } from "../../schemas/categories.schema";
import { AppError } from "../../errors";

const createCategoryService = async (dataBody: TCategorieRequest) => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory: Category | null = await categoryRepository.findOne({
    where: { name: dataBody.name },
  });

  if (findCategory) {
    throw new AppError("Category already exists", 409);
  }

  const category: Category = categoryRepository.create(dataBody);
  await categoryRepository.save(category);

  const returnCategory = categoriesSchema.parse(category);

  return returnCategory;
};

export default createCategoryService;
