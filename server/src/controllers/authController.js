import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

/**
 * Register a new user
 * POST /auth/register
 * Body: { name, email, password }
 */
export const register = async (req, res) => {
    const { name, email, password, role } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
        return res.status(400).json({
            error: "Missing required fields",
            details: "Please provide name, email, and password.",
        });
    }

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user with Prisma
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role || "STUDENT", // Default to student if not provided
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        // Generate JWT token
        const token = generateToken(user.id, res);

        res.status(201).json({
            status: "success",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Server error during registration" });
    }
};

/**
 * Login user
 * POST /auth/login
 * Body: { email, password }
 */
export const login = async (req, res) => {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
        return res.status(400).json({
            error: "Missing required fields",
            details: "Please provide email and password.",
        });
    }

    try {
        // Get user with Prisma
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Generate JWT token
        const token = generateToken(user.id, res);

        res.status(200).json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Server error during login" });
    }
};

/**
 * Logout user
 * POST /auth/logout
 */
export const logout = async (req, res) => {
    res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ status: "success", message: "Logged out successfully" });
};

/**
 * Get current user profile
 * GET /auth/me
 * Requires: Auth middleware
 */
export const getMe = async (req, res) => {
    res.status(200).json({
        status: "success",
        user: req.user,
    });
};
