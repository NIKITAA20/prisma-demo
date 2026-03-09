import { createRequire } from 'module';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const require = createRequire(import.meta.url);
const { PrismaClient } = require('../generated/prisma');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
    log:['query']
});

export default prisma