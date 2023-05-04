import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { TUserRequest, TUserResponse } from "../interfaces/users.types";
import { hash } from "bcryptjs";
import { userSchemaResponse } from "../schemas/users.schema";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  userData.password = await hash(userData.password, 10);

  const newUser: User = userRepository.create(userData);
  await userRepository.save(newUser);

  return userSchemaResponse.parse(newUser);
};

export { createUserService };
