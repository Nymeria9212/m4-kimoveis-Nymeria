import { Repository } from "typeorm";
import { Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

const readSchedulesRealEstate = async (id: number) => {
  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedulesRealEstate: Schedule | null =
    await schedulesRepository.findOne({
      where: { id: id },
      relations: { realEstate: true, user: true },
    });

  if (!schedulesRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  return schedulesRealEstate;
};

export default readSchedulesRealEstate;
