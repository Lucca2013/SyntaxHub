import styled, { createGlobalStyle } from 'styled-components';

// Variáveis de cores
const COLORS = {
  neonGreen: '#00ff41',
  neonPurple: '#9d00ff',
  darkBg: '#111',
  mediumBg: '#181818',
  lightText: '#b6ffb6',
};

// Estilos globais
export const GlobalStyle = createGlobalStyle`
  :root {
    --neon-green: ${COLORS.neonGreen};
    --neon-purple: ${COLORS.neonPurple};
    --dark-bg: ${COLORS.darkBg};
    --medium-bg: ${COLORS.mediumBg};
    --light-text: ${COLORS.lightText};
    --card-shadow: 0 4px 12px #00ff4122;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', 'Consolas', monospace, Arial, sans-serif;
    background: ${COLORS.darkBg};
    margin: 0;
    padding: 0;
    color: ${COLORS.neonGreen};
    line-height: 1.5;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(0, 255, 65, 0.05) 0%, transparent 20%),
      radial-gradient(circle at 90% 80%, rgba(157, 0, 255, 0.05) 0%, transparent 20%);
    overflow-x: hidden;
  }

  @keyframes borderAnimation {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;

// Componentes estilizados
export const Header = styled.header`
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

  @media (max-width: 768px) {
    padding: 12px clamp(8px, 4%, 20px);
    gap: 8px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const Logo = styled.a`
  font-size: clamp(1.5em, 5vw, 2.2em);
  font-weight: bold;
  letter-spacing: 2px;
  color: ${COLORS.neonGreen};
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.7);
  text-decoration: none;
  white-space: nowrap;
  flex: 0 1 auto;
  min-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1.6em;
    min-width: 100px;
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
    min-width: auto;
  }

  @media (max-width: 360px) {
    font-size: 1.4em;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex: 1 1 auto;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const NavButton = styled.a`
  background: transparent;
  color: ${COLORS.neonGreen};
  border: 2px solid ${COLORS.neonGreen};
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
  text-align: center;

  &:hover {
    background: ${COLORS.neonGreen};
    color: #000;
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.7);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.85em;
    min-width: 70px;
  }

  @media (max-width: 600px) {
    flex: 1 1 45%;
  }

  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 0.9em;
    flex: 0 1 calc(50% - 5px);
    min-width: auto;
  }

  @media (max-width: 360px) {
    flex: 1 1 100%;
    margin-bottom: 5px;
  }
`;

export const SignupButton = styled(NavButton)`
  background: ${COLORS.neonGreen};
  color: #000;

  &:hover {
    background: transparent;
    color: ${COLORS.neonGreen};
  }
`;

export const MainContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  max-width: 1200px;
  margin: 30px auto;
  background: ${COLORS.mediumBg};
  border-radius: 12px;
  box-shadow: 0 4px 12px #00ff4122;
  overflow: hidden;
  position: relative;
  padding: 15px;
  border: 1px solid rgba(0, 255, 65, 0.2);

  @media (min-width: 1200px) {
    padding: 30px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    text-align: center;
    min-height: auto;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  @media (max-width: 1100px) {
    align-items: center;
    padding: 30px 20px;
  }
`;

export const Title = styled.h1`
  color: ${COLORS.neonGreen};
  margin-bottom: 15px;
  font-size: clamp(1.8em, 5vw, 2.2em);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const Description = styled.p`
  color: ${COLORS.lightText};
  font-size: clamp(0.9em, 3vw, 1.1em);
  margin-bottom: 25px;
  max-width: 95%;

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

export const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 15px 0 25px;
`;

export const FeatureItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: ${COLORS.lightText};
  font-size: clamp(0.9em, 3vw, 1em);

  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${COLORS.neonGreen};
  }
`;

export const Button = styled.a`
  background: ${COLORS.neonGreen};
  color: ${COLORS.darkBg};
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
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: transparent;
    color: ${COLORS.neonGreen};
    border: 2px solid ${COLORS.neonGreen};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px #00ff4155;
  }

  @media (max-width: 1100px) {
    margin: 0 auto;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  position: relative;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  height: clamp(250px, 40vh, 350px);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 6px 20px #00ff4122;
  background: linear-gradient(135deg, #1a1a1a, #0d0d0d);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 255, 65, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ff41, #00b32d, #00ff41);
    z-index: -1;
    border-radius: 10px;
    animation: borderAnimation 3s linear infinite;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: 1100px) {
    height: 300px;
    max-width: 90%;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const FeaturesSection = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const FeatureCard = styled.div`
  background: ${COLORS.mediumBg};
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: 0 4px 12px #00ff4122;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 255, 65, 0.2);
  display: flex;
  align-items: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 255, 65, 0.3);
    border-color: ${COLORS.neonGreen};
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FeatureLeft = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  padding-right: 25px;
  border-right: 1px solid rgba(0, 255, 65, 0.2);

  @media (max-width: 900px) {
    width: 100%;
    padding-right: 0;
    padding-bottom: 20px;
    border-right: none;
    border-bottom: 1px solid rgba(0, 255, 65, 0.2);
    justify-content: center;
  }
`;

export const FeatureIcon = styled.span`
  font-size: clamp(2em, 5vw, 2.8em);
  margin-right: 20px;
  color: ${COLORS.neonGreen};
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
  min-width: 60px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2.2em;
    margin-right: 15px;
  }
`;

export const FeatureTitle = styled.h3`
  color: ${COLORS.neonGreen};
  font-size: clamp(1.2em, 4vw, 1.6em);
  margin: 0;
  text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);

  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;

export const FeatureRight = styled.div`
  width: 60%;
  padding-left: 25px;

  @media (max-width: 900px) {
    width: 100%;
    padding-left: 0;
    padding-top: 20px;
  }
`;

export const FeatureDescription = styled.p`
  color: ${COLORS.lightText};
  font-size: clamp(0.9em, 3vw, 1.1em);
  margin: 0;
  line-height: 1.6;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  color: ${COLORS.lightText};
  font-size: 0.9em;
  margin-top: 40px;
  border-top: 1px solid rgba(0, 255, 65, 0.1);
`;