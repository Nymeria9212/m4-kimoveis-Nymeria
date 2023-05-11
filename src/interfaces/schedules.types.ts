import { z } from "zod";
import {
  schedulesSchema,
  schedulesSchemaRequest,
} from "../schemas/schendules.schema";

type TScheduleRequest = z.infer<typeof schedulesSchemaRequest>;
type TScheduleResponse = z.infer<typeof schedulesSchema>;

export { TScheduleRequest, TScheduleResponse };
