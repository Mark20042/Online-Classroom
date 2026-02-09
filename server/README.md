# Template Backend (Supabase)

A minimal Express.js backend template with Supabase for authentication.

---

## Features

- ✅ User authentication (register, login, logout)
- ✅ JWT token-based sessions
- ✅ Supabase database integration
- ✅ Password hashing with bcrypt
- ✅ Protected routes middleware

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env

# 3. Configure your Supabase credentials in .env

# 4. Create the users table in Supabase (see below)

# 5. Start development server
npm run dev
```

---

## Environment Variables

Create a `.env` file with:

```env
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"
PORT=8080
NODE_ENV="development"
```

> Get your Supabase credentials from: **Supabase Dashboard → Settings → API**

---

## Supabase Table Setup

Run this SQL in **Supabase → SQL Editor**:

```sql
-- Create users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy: Service role can do everything
CREATE POLICY "Service role has full access"
  ON users
  FOR ALL
  USING (auth.role() = 'service_role');
```

---

## API Endpoints

### Public Routes

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register new user | `{ name, email, password }` |
| POST | `/auth/login` | Login user | `{ email, password }` |
| POST | `/auth/logout` | Logout user | - |

### Protected Routes

| Method | Endpoint | Description | Headers |
|--------|----------|-------------|---------|
| GET | `/auth/me` | Get current user | `Authorization: Bearer <token>` |

---

## API Examples

### Register

```bash
curl -X POST http://localhost:8080/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": "uuid-here",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "jwt-token-here"
  }
}
```

### Login

```bash
curl -X POST http://localhost:8080/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "password123"}'
```

### Get Current User

```bash
curl http://localhost:8080/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## Project Structure

```
template-backend/
├── src/
│   ├── config/
│   │   └── supabase.js      # Supabase client
│   ├── controllers/
│   │   └── authController.js # Auth logic
│   ├── middleware/
│   │   └── authMiddleware.js # JWT verification
│   ├── routes/
│   │   └── authRoutes.js    # Auth endpoints
│   ├── utils/
│   │   └── generateToken.js # JWT generation
│   └── server.js            # Express app
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `express` | Web framework |
| `@supabase/supabase-js` | Supabase client |
| `bcryptjs` | Password hashing |
| `jsonwebtoken` | JWT authentication |
| `cookie-parser` | Cookie handling |
| `cors` | Cross-origin requests |
| `dotenv` | Environment variables |
| `nodemon` (dev) | Auto-restart server |

---

## Adding More Features

### Adding a Protected Route

```javascript
// In your routes file
import { authMiddleware } from "../middleware/authMiddleware.js";

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You are authenticated!", user: req.user });
});
```

### Adding a New Table

1. Create table in Supabase SQL Editor
2. Create controller in `src/controllers/`
3. Create routes in `src/routes/`
4. Register routes in `src/server.js`
