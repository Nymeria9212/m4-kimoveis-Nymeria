import { z } from "zod";
import { AddressSchema, AddressSchemaRequest } from "../schemas/address.schema";
type TAddress = z.infer<typeof AddressSchema>;
type AddressReq = z.infer<typeof AddressSchemaRequest>;

export { TAddress, AddressReq };
