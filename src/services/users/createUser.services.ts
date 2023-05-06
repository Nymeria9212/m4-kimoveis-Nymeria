import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TUserRequest, TUserResponse } from "../../interfaces/users.types";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUser: User = userRepository.create(userData);

  await userRepository.save(newUser);
  const newUserSchema = userSchemaResponse.parse(newUser);

  return newUserSchema;
};

export { createUserService };
