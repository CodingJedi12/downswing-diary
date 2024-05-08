// global.d.ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined; // use var instead of namespace to augment globalThis
}