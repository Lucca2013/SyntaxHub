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

export async function POST(req: NextRequest) {
  try {
    const { username, email, password }: UserData = await req.json();
    
    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ error: "Todos os campos são obrigatórios" }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await pool.query<UserResult>(
      `INSERT INTO users (username, email, password) 
       VALUES ($1, $2, $3) 
       RETURNING id, username, email`,
      [username, email, hashedPassword]
    );

    return new Response(
      JSON.stringify({ 
        message: "Usuário criado com sucesso",
        user: result.rows[0] 
      }),
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Erro ao criar usuário:", error);
    
    if (error.code === '23505') {
      return new Response(
        JSON.stringify({ error: "Email já cadastrado" }),
        { status: 409 }
      );
    }
    
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor" }),
      { status: 500 }
    );
  }
}