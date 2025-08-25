import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import { NextRequest } from 'next/server';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
    require: true
  } as any
});

interface UserData {
  username: string;
  email: string;
  password: string;
}

interface UserResult {
  id: number;
  username: string;
  email: string;
}

async function userExistsByEmail(email: string): Promise<boolean> {
  const result = await pool.query(
    `SELECT id FROM users WHERE email = $1`,
    [email]
  );
  if(result.rows.length > 0) {
    return true;
  }
  return false;
}

async function userExistsByUsername(username: string): Promise<boolean> {
  const result = await pool.query(
    `SELECT id FROM users WHERE username = $1`,
    [username]
  );
  if(result.rows.length > 0) {
    return true;
  }
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const { username, email, password }: UserData = await req.json();
    
    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    if(password.length < 6) {
      return new Response(
        JSON.stringify({ error: "Password must be at least 6 characters long" }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (await userExistsByEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Email already registered" }),
        { status: 409 }
      );
    }

    if (await userExistsByUsername(username)) {
      return new Response(
        JSON.stringify({ error: "Username already taken" }),
        { status: 409 }
      );
    }


    const result = await pool.query<UserResult>(
      `INSERT INTO users (username, email, password) 
       VALUES ($1, $2, $3) 
       RETURNING id, username, email`,
      [username, email, hashedPassword]
    );

    return new Response(
      JSON.stringify({ 
        message: "User created successfully",
        user: result.rows[0] 
      }),
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating user:", error);

    if (error.code === '23505') {
      return new Response(
        JSON.stringify({ error: "Email already registered" }),
        { status: 409 }
      );
    }
    
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}