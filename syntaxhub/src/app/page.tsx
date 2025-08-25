export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>SyntaxHub - LinkedIn for Devs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        :root {\n            --neon-green: #00ff41;\n            --neon-purple: #9d00ff;\n            --dark-bg: #111;\n            --medium-bg: #181818;\n            --light-text: #b6ffb6;\n            --card-shadow: 0 4px 12px #00ff4122;\n        }\n        \n        * {\n            box-sizing: border-box;\n        }\n        \n        body {\n            font-family: 'Segoe UI', 'Consolas', monospace, Arial, sans-serif;\n            background: var(--dark-bg);\n            margin: 0;\n            padding: 0;\n            color: var(--neon-green);\n            line-height: 1.5;\n            background-image: \n                radial-gradient(circle at 10% 20%, rgba(0, 255, 65, 0.05) 0%, transparent 20%),\n                radial-gradient(circle at 90% 80%, rgba(157, 0, 255, 0.05) 0%, transparent 20%);\n            overflow-x: hidden;\n        }\n        \n        /* HEADER CORRIGIDO - SEM ULTRAPASSAR */\n        header {\n            width: 100%;\n            background: #000;\n            padding: 15px clamp(10px, 5%, 30px); /* Valor responsivo e seguro */\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            box-shadow: 0 2px 10px #00ff4122;\n            position: relative;\n            z-index: 10;\n            border-bottom: 1px solid rgba(0, 255, 65, 0.2);\n            flex-wrap: wrap; \n            gap: 10px;\n            box-sizing: border-box;\n        }\n        \n        .logo {\n            font-size: clamp(1.5em, 5vw, 2.2em);\n            font-weight: bold;\n            letter-spacing: 2px;\n            color: var(--neon-green);\n            text-shadow: 0 0 10px rgba(0, 255, 65, 0.7);\n            text-decoration: none;\n            white-space: nowrap;\n            flex: 0 1 auto; /* Flexibilidade para encolher */\n            min-width: 120px; /* Reduzido para telas menores */\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        \n        .nav-buttons {\n            display: flex;\n            gap: 10px;\n            flex-wrap: wrap;\n            justify-content: flex-end;\n            flex: 1 1 auto; /* Flexível e pode quebrar */\n            min-width: 0; /* Permite encolhimento */\n        }\n        \n        .nav-btn {\n            background: transparent;\n            color: var(--neon-green);\n            border: 2px solid var(--neon-green);\n            border-radius: 4px;\n            padding: 8px 15px;\n            font-size: clamp(0.8em, 3vw, 1em);\n            cursor: pointer;\n            transition: all 0.3s ease;\n            text-decoration: none;\n            font-weight: bold;\n            box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);\n            text-transform: uppercase;\n            letter-spacing: 1px;\n            white-space: nowrap;\n            min-width: 80px;\n            flex-shrink: 1; /* Permite encolher conforme necessário */\n        }\n        \n        .nav-btn:hover {\n            background: var(--neon-green);\n            color: #000;\n            box-shadow: 0 0 15px rgba(0, 255, 65, 0.7);\n            transform: translateY(-2px);\n        }\n        \n        .signup-btn {\n            background: var(--neon-green);\n            color: #000;\n        }\n        \n        .signup-btn:hover {\n            background: transparent;\n            color: var(--neon-green);\n        }\n        \n        .main-content {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 60vh;\n            max-width: 1200px;\n            margin: 30px auto;\n            background: var(--medium-bg);\n            border-radius: 12px;\n            box-shadow: var(--card-shadow);\n            overflow: hidden;\n            position: relative;\n            padding: 15px;\n            border: 1px solid rgba(0, 255, 65, 0.2);\n        }\n        \n        .left-side {\n            flex: 1;\n            padding: 30px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            z-index: 2;\n        }\n        \n        .left-side h1 {\n            color: var(--neon-green);\n            margin-bottom: 15px;\n            font-size: clamp(1.8em, 5vw, 2.2em);\n            line-height: 1.2;\n        }\n        \n        .left-side p {\n            color: var(--light-text);\n            font-size: clamp(0.9em, 3vw, 1.1em);\n            margin-bottom: 25px;\n            max-width: 95%;\n        }\n        \n        .features-list {\n            list-style-type: none;\n            padding: 0;\n            margin: 15px 0 25px;\n        }\n        \n        .features-list li {\n            position: relative;\n            padding-left: 25px;\n            margin-bottom: 10px;\n            color: var(--light-text);\n            font-size: clamp(0.9em, 3vw, 1em);\n        }\n        \n        .features-list li:before {\n            content: \"▹\";\n            position: absolute;\n            left: 0;\n            color: var(--neon-green);\n        }\n        \n        .btn {\n            background: var(--neon-green);\n            color: var(--dark-bg);\n            border: none;\n            border-radius: 4px;\n            padding: 12px 28px;\n            font-size: clamp(0.9em, 3vw, 1em);\n            cursor: pointer;\n            transition: all 0.3s ease;\n            text-decoration: none;\n            display: inline-block;\n            font-weight: bold;\n            box-shadow: 0 2px 6px #00ff4133;\n            width: fit-content;\n            text-transform: uppercase;\n            letter-spacing: 1px;\n        }\n        \n        .btn:hover {\n            background: transparent;\n            color: var(--neon-green);\n            border: 2px solid var(--neon-green);\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px #00ff4155;\n        }\n        \n        .right-side {\n            flex: 1;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            min-height: 350px;\n            position: relative;\n            z-index: 1;\n        }\n        \n        .image-container {\n            position: relative;\n            width: 100%;\n            max-width: 550px;\n            height: clamp(250px, 40vh, 350px);\n            border-radius: 8px;\n            overflow: hidden;\n            box-shadow: 0 6px 20px #00ff4122;\n            background: linear-gradient(135deg, #1a1a1a, #0d0d0d);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border: 1px solid rgba(0, 255, 65, 0.3);\n        }\n        \n        .image-container img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            transition: transform 0.4s ease;\n        }\n        \n        .image-container:hover img {\n            transform: scale(1.04);\n        }\n        \n        .image-container::before {\n            content: '';\n            position: absolute;\n            top: -2px;\n            left: -2px;\n            right: -2px;\n            bottom: -2px;\n            background: linear-gradient(45deg, #00ff41, #00b32d, #00ff41);\n            z-index: -1;\n            border-radius: 10px;\n            animation: borderAnimation 3s linear infinite;\n        }\n        \n        @keyframes borderAnimation {\n            0% { filter: hue-rotate(0deg); }\n            100% { filter: hue-rotate(360deg); }\n        }\n        \n        .features {\n            max-width: 1200px;\n            margin: 40px auto;\n            padding: 0 20px;\n        }\n        \n        .feature-card {\n            background: var(--medium-bg);\n            border-radius: 8px;\n            padding: 25px;\n            margin-bottom: 25px;\n            box-shadow: var(--card-shadow);\n            transition: all 0.3s ease;\n            border: 1px solid rgba(0, 255, 65, 0.2);\n            display: flex;\n            align-items: center;\n        }\n        \n        .feature-card:hover {\n            transform: translateY(-8px);\n            box-shadow: 0 8px 25px rgba(0, 255, 65, 0.3);\n            border-color: var(--neon-green);\n        }\n        \n        .feature-left {\n            display: flex;\n            align-items: center;\n            width: 40%;\n            padding-right: 25px;\n            border-right: 1px solid rgba(0, 255, 65, 0.2);\n        }\n        \n        .feature-icon {\n            font-size: clamp(2em, 5vw, 2.8em);\n            margin-right: 20px;\n            color: var(--neon-green);\n            text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);\n            min-width: 60px;\n            text-align: center;\n        }\n        \n        .feature-title {\n            color: var(--neon-green);\n            font-size: clamp(1.2em, 4vw, 1.6em);\n            margin: 0;\n            text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);\n        }\n        \n        .feature-right {\n            width: 60%;\n            padding-left: 25px;\n        }\n        \n        .feature-description {\n            color: var(--light-text);\n            font-size: clamp(0.9em, 3vw, 1.1em);\n            margin: 0;\n            line-height: 1.6;\n        }\n        \n        footer {\n            text-align: center;\n            padding: 20px;\n            color: var(--light-text);\n            font-size: 0.9em;\n            margin-top: 40px;\n            border-top: 1px solid rgba(0, 255, 65, 0.1);\n        }\n        \n        @media (min-width: 1200px) {\n            .main-content {\n                padding: 30px;\n            }\n        }\n        \n        @media (max-width: 1100px) {\n            .main-content {\n                flex-direction: column;\n                text-align: center;\n                min-height: auto;\n            }\n            \n            .left-side {\n                align-items: center;\n                padding: 30px 20px;\n            }\n            \n            .left-side p {\n                max-width: 100%;\n            }\n            \n            .btn {\n                margin: 0 auto;\n            }\n            \n            .image-container {\n                height: 300px;\n                max-width: 90%;\n                margin-bottom: 30px;\n            }\n        }\n        \n        @media (max-width: 900px) {\n            .feature-card {\n                flex-direction: column;\n                text-align: center;\n            }\n            \n            .feature-left {\n                width: 100%;\n                padding-right: 0;\n                padding-bottom: 20px;\n                border-right: none;\n                border-bottom: 1px solid rgba(0, 255, 65, 0.2);\n                justify-content: center;\n            }\n            \n            .feature-right {\n                width: 100%;\n                padding-left: 0;\n                padding-top: 20px;\n            }\n        }\n        \n        @media (max-width: 768px) {\n            header {\n                padding: 12px clamp(8px, 4%, 20px);\n                gap: 8px;\n            }\n            \n            .logo {\n                font-size: 1.6em;\n                min-width: 100px;\n            }\n            \n            .nav-buttons {\n                gap: 8px;\n            }\n            \n            .nav-btn {\n                padding: 8px 12px;\n                font-size: 0.85em;\n                min-width: 70px;\n            }\n            \n            .left-side h1 {\n                font-size: 1.8em;\n            }\n            \n            .image-container {\n                height: 250px;\n            }\n        }\n        \n        @media (max-width: 600px) {\n            .nav-btn {\n                flex: 1 1 45%; /* Garante que os botões se ajustem */\n                text-align: center;\n            }\n            \n            .logo {\n                flex: 1 1 100%;\n                text-align: center;\n                margin-bottom: 10px;\n            }\n            \n            .nav-buttons {\n                flex: 1 1 100%;\n                justify-content: center;\n            }\n        }\n        \n        @media (max-width: 480px) {\n            header {\n                flex-direction: column;\n                align-items: center;\n                gap: 12px;\n            }\n            \n            .logo {\n                text-align: center;\n                width: 100%;\n                min-width: auto;\n            }\n            \n            .nav-buttons {\n                width: 100%;\n                justify-content: center;\n            }\n            \n            .nav-btn {\n                padding: 8px 15px;\n                font-size: 0.9em;\n                flex: 0 1 calc(50% - 5px); /* Ajuste preciso para caber dois botões */\n                min-width: auto;\n            }\n            \n            .image-container {\n                height: 200px;\n            }\n            \n            .feature-icon {\n                font-size: 2.2em;\n                margin-right: 15px;\n            }\n            \n            .feature-title {\n                font-size: 1.3em;\n            }\n        }\n        \n        @media (max-width: 360px) {\n            .nav-btn {\n                flex: 1 1 100%; /* Em telas muito pequenas, botões ocupam linha completa */\n                margin-bottom: 5px;\n            }\n            \n            .logo {\n                font-size: 1.4em;\n            }\n        }\n    "
        }}
      />
      <header>
        <a
          href="/"
          className="logo"
          style={{
            textShadow:
              "rgba(0, 255, 65, 0.7) 0px 0px 10px, rgba(0, 255, 65, 0.5) 0px 0px 20px"
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
      <div className="main-content">
        <div className="left-side">
          <h1>Welcome to SyntaxHub</h1>
          <p>
            The social network where developers connect, create, and code together.
          </p>
          <ul className="features-list">
            <li>Share projects &amp; technical insights</li>
            <li>Build skilled developer teams</li>
            <li>Code together in real-time environments</li>
            <li>Accelerate learning by programming together</li>
          </ul>
          <a href="/signup" className="btn">
            Get Started
          </a>
        </div>
        <div className="right-side">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Developers collaborating on code"
            />
          </div>
        </div>
      </div>
      <div className="features">
        <div
          className="feature-card"
          style={{
            boxShadow: "var(--card-shadow)",
            borderColor: "rgba(0, 255, 65, 0.2)"
          }}
        >
          <div className="feature-left">
            <div className="feature-icon">💻</div>
            <h3 className="feature-title">Customizable Profiles</h3>
          </div>
          <div className="feature-right">
            <p className="feature-description">
              Showcase your skills with customizable profiles with html/css that
              highlight your expertise, projects, and contributions to the developer
              community.
            </p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-left">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">Knowledge Sharing</h3>
          </div>
          <div className="feature-right">
            <p className="feature-description">
              Share and discover technical articles, tutorials, and resources with
              our developer community. Learn from experts and contribute your own
              insights.
            </p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-left">
            <div className="feature-icon">👥</div>
            <h3 className="feature-title">Team Building</h3>
          </div>
          <div className="feature-right">
            <p className="feature-description">
              Find collaborators for your next big project. Connect with developers
              who complement your skills and build amazing things together.
            </p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-left">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Real-time Coding</h3>
          </div>
          <div className="feature-right">
            <p className="feature-description">
              Collaborate in real-time coding environments. Pair program, debug
              together, and build projects simultaneously with teammates around the
              world.
            </p>
          </div>
        </div>
      </div>
      <footer>© 2025 SyntaxHub | The Developer Collaboration Platform</footer>
    </>

  )
}
