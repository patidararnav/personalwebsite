import styled from '@emotion/styled'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(30, 30, 30, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

const NavLink = styled.a<{ isActive?: boolean }>`
  color: ${props => props.isActive ? 'var(--accent-color)' : 'var(--primary-text)'};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background-color: var(--accent-color);
    transition: all 0.3s ease;
  }

  &:hover {
    color: var(--accent-color);
    
    &:after {
      width: 100%;
    }
  }
`

const Navigation = () => {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    const navHeight = 70 // Approximate height of the nav bar
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Nav>
      <NavContainer>
        <NavLink href="#about" onClick={scrollToSection('about')}>
          About
        </NavLink>
        <NavLink href="#experience" onClick={scrollToSection('experience')}>
          Experience
        </NavLink>
        <NavLink href="#projects" onClick={scrollToSection('projects')}>
          Projects
        </NavLink>
        <NavLink href="#resume" onClick={scrollToSection('resume')}>
          Resume
        </NavLink>
      </NavContainer>
    </Nav>
  )
}

export default Navigation 