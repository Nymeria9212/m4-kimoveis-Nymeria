import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { usersSchemaResponse } from "../../schemas/users.schema";
import { TUsersResponde } from "../../interfaces/users.types";

const listeAllUsers = async () => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find();

  const returnUsers: TUsersResponde = usersSchemaResponse.parse(users);

  return returnUsers;
};

export default listeAllUsers;
