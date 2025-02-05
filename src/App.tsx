import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Biography from './components/Biography'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Navigation from './components/Navigation'

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
`

const Header = styled.header`
  padding: 6rem 2rem 2rem;
  background-color: var(--secondary-bg);
`

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
`

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--accent-color);
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const TextContainer = styled.div`
  text-align: left;
`

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SmallText = styled.span`
  font-size: 1.8rem;
  font-weight: normal;
  color: var(--primary-text);
`

const ColoredName = styled.span`
  font-size: 4rem;
  font-weight: bold;
  color: var(--accent-color);
`

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--accent-color);
`

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`

const SocialLink = styled.a`
  color: var(--secondary-text);
  font-size: 1.2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Header>
        <HeaderContent>
          <ProfileImage
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/profilepic.jpeg" alt="Profile" />
          </ProfileImage>
          <TextContainer>
            <Title
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SmallText>hey, i'm</SmallText>
              <ColoredName>Arnav Patidar,</ColoredName>
            </Title>
            <Subtitle
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              a computer science student & aspiring software engineer
            </Subtitle>
            <SocialLinks
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SocialLink href="https://www.linkedin.com/in/arnavpatidar" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                LinkedIn
              </SocialLink>
              <SocialLink href="https://github.com/patidararnav" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
                GitHub
              </SocialLink>
            </SocialLinks>
          </TextContainer>
        </HeaderContent>
      </Header>
      <MainContent>
        <section id="about">
          <Biography />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume">
          <Resume />
        </section>
      </MainContent>
    </AppContainer>
  )
}

export default App
