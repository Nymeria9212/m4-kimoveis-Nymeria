import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";

const deleteUserServices = async (idUser: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOneBy({ id: idUser });

  await userRepository.softRemove(findUser!);
};

export default deleteUserServices;
