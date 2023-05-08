import { z } from "zod";
import {
  realEstateSchemaRequest,
  realStateSchema,
} from "../schemas/realEstate.schema";
type TRealEstate = z.infer<typeof realStateSchema>;

type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;

export { TRealEstate, TRealEstateRequest };
