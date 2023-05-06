import { Repository } from "typeorm";
import { TUserPatch, TUserResponse } from "../../interfaces/users.types";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schema";
import { AppError } from "../../errors";

const updateUserServices = async (
  userData: Partial<TUserResponse>,
  id: number
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({ id: id });

  const updateUser: User = await userRepository.create({
    ...user,
    ...userData,
  });
  await userRepository.save(updateUser);
  const returnUser = userSchemaResponse.parse(updateUser);
  return returnUser;
};

export default updateUserServices;
