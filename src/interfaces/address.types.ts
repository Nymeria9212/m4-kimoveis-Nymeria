import { z } from "zod";
import { addressSchema } from "../schemas/address.schema";

type TAddress = z.infer<typeof addressSchema>;

export { TAddress };
