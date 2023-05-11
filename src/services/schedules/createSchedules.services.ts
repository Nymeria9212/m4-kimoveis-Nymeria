import { Repository } from "typeorm";
import { TScheduleRequest } from "../../interfaces/schedules.types";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { relative } from "path";
import { AppError } from "../../errors";

const createSchedulesService = async (
  data: TScheduleRequest,
  idUser: number
) => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userFind: User | null = await userRepository.findOne({
    where: { id: idUser },
  });
  if (!userFind) {
    throw new AppError("User not found", 409);
  }

  const realEstateFind: RealEstate | null = await realEstateRepository.findOne({
    where: { id: data.realEstateId },
  });

  if (!realEstateFind) {
    throw new AppError("RealEstate not found", 404);
  }

  const createSchedule: Schedule = scheduleRepository.create({
    ...data,
    user: userFind,
    realEstate: realEstateFind,
  });

  await scheduleRepository.save(createSchedule);
};

export default createSchedulesService;
