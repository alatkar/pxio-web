import { PrismaClient } from "@prisma/client";

declare global {
  var prismaDb: PrismaClient | undefined;
}
// NextJs hot reload: To prevent creating multiple clients in Dev env
export const prismaDb = globalThis.prismaDb || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismaDb = prismaDb;