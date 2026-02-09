import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";

// Initialize Arcjet with security rules
const aj = arcjet({
    key: process.env.ARCJET_KEY, // Get your site key from https://app.arcjet.com
    characteristics: ["ip.src"], // Track requests by IP address
    rules: [
        // Shield protects your app from common attacks e.g. SQL injection, XSS
        shield({ mode: "LIVE" }),

        // Create a bot detection rule
        detectBot({
            mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
            // Block all bots except the following
            allow: [
                "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
                "CATEGORY:MONITOR", // Uptime monitoring services
                "CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
            ],
        }),

        // Create a token bucket rate limit
        tokenBucket({
            mode: "LIVE",
            refillRate: 10, // Refill 10 tokens per interval
            interval: 10, // Refill every 10 seconds
            capacity: 100, // Bucket capacity of 100 tokens
        }),
    ],
});

export default aj;
