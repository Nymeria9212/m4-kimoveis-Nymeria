import { z } from "zod";
import { realStateSchema } from "../schemas/realEstate.schema";
type TRealEstate = z.infer<typeof realStateSchema>;

export { TRealEstate };
