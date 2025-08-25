import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import { NextRequest } from 'next/server';
import jwt from "jsonwebtoken";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
    require: true
  } as any
});

const JWT_SECRET = process.env.JWT_SECRET;

interface UserData {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email, password }: UserData = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    const result = await pool.query(
      `SELECT id, email, password FROM users WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    const user = result.rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email }, // PAYLOAD
      JWT_SECRET,                         // SECRET
      { expiresIn: "10000d" }             // TOKEN VALIDITY
    );

    return new Response(
      JSON.stringify({
        message: "Login successful",
        token,
        user: { id: user.id, username: user.username, email: user.email }
      }),
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Error signing in:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}