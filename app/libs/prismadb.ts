import { PrismaClient } from "@prisma/client";

declare global { 
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV != 'production') globalThis.prisma = client

export default client; 

// next.js hot reloadings puede crear instancias creando warnings, la variablle globalThis no está afectada por ellos, 