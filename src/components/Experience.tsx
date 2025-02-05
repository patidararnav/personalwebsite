import styled from '@emotion/styled'
import { SectionContainer, SectionTitle } from './SharedStyles'

const ExperienceItem = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: var(--primary-bg);
  border-radius: 10px;
  border: 1px solid var(--secondary-bg);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  padding: 0.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const ExperienceInfo = styled.div`
  flex-grow: 1;
`

const CompanyName = styled.h3`
  font-size: 1.4rem;
  color: var(--primary-text);
  margin-bottom: 0.5rem;
`

const JobTitle = styled.h4`
  font-size: 1.2rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`

const TimeLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Duration = styled.p`
  font-size: 1rem;
  color: var(--secondary-text);
`

const Location = styled.p`
  font-size: 1rem;
  color: var(--secondary-text);
  font-style: italic;
  
  &:before {
    content: "•";
    margin-right: 1rem;
  }
`

interface ExperienceData {
  company: string;
  logo: string;
  title: string;
  duration: string;
  location: string;
}

const experiences: ExperienceData[] = [
  {
    company: "Databricks",
    logo: "/company-logos/databricks.png",
    title: "Software Engineering Intern",
    duration: "May 2025 - August 2025",
    location: "Mountain View, California"
  },
  {
    company: "Amazon",
    logo: "/company-logos/amazon.jpg",
    title: "Software Development Engineer Intern",
    duration: "May 2024 - August 2024",
    location: "New York City, New York"
  },
  {
    company: "Chick-fil-A",
    logo: "/company-logos/cfa.png",
    title: "Product Management Intern",
    duration: "May 2023 - December 2023",
    location: "Atlanta, Georgia"
  }
]

const Experience = () => {
  return (
    <SectionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle>Experience</SectionTitle>
      
      {experiences.map((exp, index) => (
        <ExperienceItem key={index}>
          <ExperienceHeader>
            <CompanyLogo>
              <img src={exp.logo} alt={`${exp.company} logo`} />
            </CompanyLogo>
            <ExperienceInfo>
              <CompanyName>{exp.company}</CompanyName>
              <JobTitle>{exp.title}</JobTitle>
              <TimeLocationWrapper>
                <Duration>{exp.duration}</Duration>
                <Location>{exp.location}</Location>
              </TimeLocationWrapper>
            </ExperienceInfo>
          </ExperienceHeader>
        </ExperienceItem>
      ))}
    </SectionContainer>
  )
}

export default Experience 