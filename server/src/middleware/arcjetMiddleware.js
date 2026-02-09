import aj from "../config/arcjet.js";

/**
 * Arcjet security middleware for Express
 * Provides protection against attacks, bots, and rate limiting
 */
const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 });

        // Log decision for monitoring
        console.log("Arcjet decision:", {
            id: decision.id,
            conclusion: decision.conclusion,
            reason: decision.reason,
        });

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({
                    error: "Too Many Requests",
                    message: "Rate limit exceeded. Please try again later.",
                });
            }

            if (decision.reason.isBot()) {
                return res.status(403).json({
                    error: "Forbidden",
                    message: "Bot traffic is not allowed.",
                });
            }

            if (decision.reason.isShield()) {
                return res.status(403).json({
                    error: "Forbidden",
                    message: "Request blocked for security reasons.",
                });
            }

            // Generic denial
            return res.status(403).json({
                error: "Forbidden",
                message: "Access denied.",
            });
        }

        next();
    } catch (error) {
        console.error("Arcjet middleware error:", error);
        // In case of Arcjet errors, allow the request through
        // You can change this behavior based on your security requirements
        next();
    }
};

export default arcjetMiddleware;
