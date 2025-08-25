"use client";

import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function signupButton(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const info = { username, email, password };

    try {
      const response = await fetch("../api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });

      if (response.ok) {
        alert("User created successfully!");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred.");
    }
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <title>SyntaxHub - Sign Up</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
            --neon-green: #00ff41;
            --neon-purple: #9d00ff;
            --dark-bg: #111;
            --medium-bg: #181818;
            --light-text: #b6ffb6;
            --card-shadow: 0 4px 12px #00ff4122;
        }
        
        * {
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', 'Consolas', monospace, Arial, sans-serif;
            background: var(--dark-bg);
            margin: 0;
            padding: 0;
            color: var(--neon-green);
            line-height: 1.5;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(0, 255, 65, 0.05) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(157, 0, 255, 0.05) 0%, transparent 20%);
            overflow-x: hidden;
        }
        
        header {
            width: 100%;
            background: #000;
            padding: 15px clamp(10px, 5%, 30px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px #00ff4122;
            position: relative;
            z-index: 10;
            border-bottom: 1px solid rgba(0, 255, 65, 0.2);
            flex-wrap: wrap; 
            gap: 10px;
            box-sizing: border-box;
        }
        
        .logo {
            font-size: clamp(1.5em, 5vw, 2.2em);
            font-weight: bold;
            letter-spacing: 2px;
            color: var(--neon-green);
            text-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
            text-decoration: none;
            white-space: nowrap;
            flex: 0 1 auto;
            min-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .nav-buttons {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
            flex: 1 1 auto;
            min-width: 0;
        }
        
        .nav-btn {
            background: transparent;
            color: var(--neon-green);
            border: 2px solid var(--neon-green);
            border-radius: 4px;
            padding: 8px 15px;
            font-size: clamp(0.8em, 3vw, 1em);
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
            text-transform: uppercase;
            letter-spacing: 1px;
            white-space: nowrap;
            min-width: 80px;
            flex-shrink: 1;
        }
        
        .nav-btn:hover {
            background: var(--neon-green);
            color: #000;
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.7);
            transform: translateY(-2px);
        }
        
        .signup-btn {
            background: var(--neon-green);
            color: #000;
        }
        
        .signup-btn:hover {
            background: transparent;
            color: var(--neon-green);
        }
        
        .signin-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 70vh;
            max-width: 500px;
            margin: 30px auto;
            padding: 40px 30px;
            background: var(--medium-bg);
            border-radius: 12px;
            box-shadow: var(--card-shadow);
            border: 1px solid rgba(0, 255, 65, 0.2);
            position: relative;
            z-index: 2;
        }
        
        .signin-title {
            color: var(--neon-green);
            font-size: clamp(1.8em, 5vw, 2.2em);
            margin-bottom: 30px;
            text-align: center;
            text-shadow: 0 0 8px rgba(0, 255, 65, 0.4);
        }
        
        .signin-form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .input-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .input-label {
            color: var(--light-text);
            font-size: clamp(0.9em, 3vw, 1em);
            font-weight: 600;
        }
        
        .input-field {
            background: rgba(10, 10, 10, 0.7);
            border: 1px solid rgba(0, 255, 65, 0.3);
            border-radius: 4px;
            padding: 12px 15px;
            color: var(--neon-green);
            font-size: 1em;
            transition: all 0.3s ease;
            outline: none;
        }
        
        .input-field:focus {
            border-color: var(--neon-green);
            box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
        }
        
        .input-field::placeholder {
            color: rgba(182, 255, 182, 0.5);
        }
        
        .btn {
            background: var(--neon-green);
            color: var(--dark-bg);
            border: none;
            border-radius: 4px;
            padding: 12px 28px;
            font-size: clamp(0.9em, 3vw, 1em);
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-weight: bold;
            box-shadow: 0 2px 6px #00ff4133;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 10px;
        }
        
        .btn:hover {
            background: transparent;
            color: var(--neon-green);
            border: 2px solid var(--neon-green);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px #00ff4155;
        }
        
        .signin-links {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 15px;
        }
        
        .signin-link {
            color: var(--neon-green);
            text-decoration: none;
            font-size: 0.9em;
            transition: all 0.3s ease;
            text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
        }
        
        .signin-link:hover {
            text-decoration: underline;
            text-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
        }
        
        .divider {
            width: 100%;
            text-align: center;
            border-bottom: 1px solid rgba(0, 255, 65, 0.2);
            line-height: 0.1em;
            margin: 25px 0;
        }
        
        .divider span {
            background: var(--medium-bg);
            padding: 0 10px;
            color: var(--light-text);
            font-size: 0.9em;
        }
        
        .google-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: #fff;
            color: #333;
            border: none;
            border-radius: 4px;
            padding: 12px 28px;
            font-size: clamp(0.9em, 3vw, 1em);
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .google-btn:hover {
            background: #f1f1f1;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .google-btn img {
            width: 24px;
            height: 24px;
        }
        
        footer {
            text-align: center;
            padding: 20px;
            color: var(--light-text);
            font-size: 0.9em;
            margin-top: 40px;
            border-top: 1px solid rgba(0, 255, 65, 0.1);
        }
        
        @media (max-width: 768px) {
            .signin-container {
                padding: 30px 20px;
                margin: 20px;
            }
            
            .signin-links {
                flex-direction: column;
                align-items: center;
                gap: 12px;
            }
        }
        
        @media (max-width: 480px) {
            .signin-container {
                margin: 15px;
                padding: 25px 15px;
            }
            
            .btn, .google-btn {
                padding: 10px 20px;
            }
        }
      `,
        }}
      />

      <header>
        <a
          href="/"
          className="logo"
          style={{
            textShadow:
              "rgba(0, 255, 65, 0.7) 0px 0px 10px, rgba(0, 255, 65, 0.5) 0px 0px 20px",
          }}
        >
          SyntaxHub
        </a>
        <div className="nav-buttons">
          <a href="/signin" className="nav-btn">
            Sign In
          </a>
          <a href="/signup" className="nav-btn signup-btn">
            Sign Up
          </a>
        </div>
      </header>

      <div className="signin-container">
        <h1 className="signin-title">Create Your Account</h1>

        <form className="signin-form" onSubmit={signupButton}>
          <div className="input-group">
            <label htmlFor="input-username" className="input-label">
              Username
            </label>
            <input
              id="input-username"
              type="text"
              className="input-field"
              placeholder="YourUsername"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="input-email" className="input-label">
              Email
            </label>
            <input
              id="input-email"
              type="email"
              className="input-field"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="input-password" className="input-label">
              Password
            </label>
            <input
              id="input-password"
              type="password"
              className="input-field"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword" className="input-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="input-field"
              placeholder="••••••••"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            Sign Up
          </button>

          <div className="signin-links">
            <a href="/signin" className="signin-link">
              Already have an account?
            </a>
          </div>
        </form>

        <div className="divider">
          <span>or sign up with</span>
        </div>

        <button
          className="google-btn"
          onClick={(e) => {
            e.preventDefault();
            console.log("Google Sign-Up triggered");
          }}
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Logo"
          />
          <span>Continue with Google</span>
        </button>
      </div>

      <footer>© 2025 SyntaxHub | The Developer Collaboration Platform</footer>
    </>
  );
}
