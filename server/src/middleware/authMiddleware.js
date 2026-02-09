import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

export const authMiddleware = async (req, res, next) => {
    let token;

    // Get token from Authorization header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({ error: "Unauthorized - No token provided" });
    }

    try {
        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get user with Prisma
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        if (!user) {
            return res.status(401).json({ error: "Unauthorized - User not found" });
        }

        // Attach user to request
        req.user = user;
        next();
    } catch (error) {
        console.error("Auth middleware error:", error);
        return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }
};
