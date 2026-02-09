import "dotenv/config"; // Load env vars FIRST
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// Debug: Check if DATABASE_URL is loaded
const dbUrl = process.env.DATABASE_URL;
// console.log("DATABASE_URL loaded:", dbUrl ? "YES (length: " + dbUrl.length + ")" : "NO - NOT FOUND!");

// Create PostgreSQL Pool with SSL for Neon
const pool = new pg.Pool({
    connectionString: dbUrl,
    ssl: { rejectUnauthorized: false }, // Neon/Supabase requires SSL, but local dev might need this
});

// Create Prisma adapter
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
    log:
        process.env.NODE_ENV === "development"
            ? ["query", "error", "warn"]
            : ["error"],
});

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to database via Prisma");
    } catch (error) {
        console.error(`Database connection error: ${error}`);
        process.exit(1); // will stop the server because of an error
    }
};

const disconnectDB = async () => {
    await prisma.$disconnect();
    console.log("Disconnected from Prisma");
};

export { prisma, connectDB, disconnectDB };
