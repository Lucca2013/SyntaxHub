import React from 'react';
import {
  GlobalStyle,
  Header,
  Logo,
  NavButtons,
  NavButton,
  SignupButton,
  MainContent,
  LeftSide,
  Title,
  Description,
  FeaturesList,
  FeatureItem,
  Button,
  RightSide,
  ImageContainer,
  FeaturesSection,
  FeatureCard,
  FeatureLeft,
  FeatureIcon,
  FeatureTitle,
  FeatureRight,
  FeatureDescription,
  Footer
} from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      
      <Header>
        <Logo href="/">SyntaxHub</Logo>
        <NavButtons>
          <NavButton href="/signin">Sign In</NavButton>
          <SignupButton href="/signup">Sign Up</SignupButton>
        </NavButtons>
      </Header>
      
      <MainContent>
        <LeftSide>
          <Title>Welcome to SyntaxHub</Title>
          <Description>
            The social network where developers connect, create, and code together.
          </Description>
          
          <FeaturesList>
            <FeatureItem>Share projects & technical insights</FeatureItem>
            <FeatureItem>Build skilled developer teams</FeatureItem>
            <FeatureItem>Code together in real-time environments</FeatureItem>
            <FeatureItem>Accelerate learning by programming together</FeatureItem>
          </FeaturesList>
          
          <Button href="/signup">Get Started</Button>
        </LeftSide>
        
        <RightSide>
          <ImageContainer>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Developers collaborating on code" 
            />
          </ImageContainer>
        </RightSide>
      </MainContent>
      
      <FeaturesSection>
        <FeatureCard>
          <FeatureLeft>
            <FeatureIcon>💻</FeatureIcon>
            <FeatureTitle>Customizable Profiles</FeatureTitle>
          </FeatureLeft>
          <FeatureRight>
            <FeatureDescription>
              Showcase your skills with customizable profiles with html/css that highlight your expertise, 
              projects, and contributions to the developer community.
            </FeatureDescription>
          </FeatureRight>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureLeft>
            <FeatureIcon>📚</FeatureIcon>
            <FeatureTitle>Knowledge Sharing</FeatureTitle>
          </FeatureLeft>
          <FeatureRight>
            <FeatureDescription>
              Share and discover technical articles, tutorials, and resources with our developer community. 
              Learn from experts and contribute your own insights.
            </FeatureDescription>
          </FeatureRight>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureLeft>
            <FeatureIcon>👥</FeatureIcon>
            <FeatureTitle>Team Building</FeatureTitle>
          </FeatureLeft>
          <FeatureRight>
            <FeatureDescription>
              Find collaborators for your next big project. Connect with developers who complement your skills 
              and build amazing things together.
            </FeatureDescription>
          </FeatureRight>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureLeft>
            <FeatureIcon>🚀</FeatureIcon>
            <FeatureTitle>Real-time Coding</FeatureTitle>
          </FeatureLeft>
          <FeatureRight>
            <FeatureDescription>
              Collaborate in real-time coding environments. Pair program, debug together, and build projects 
              simultaneously with teammates around the world.
            </FeatureDescription>
          </FeatureRight>
        </FeatureCard>
      </FeaturesSection>

      <Footer>
        &copy; 2025 SyntaxHub | The Developer Collaboration Platform
      </Footer>
    </>
  );
}

export default App;