import styled from '@emotion/styled'
import { SectionContainer, SectionTitle, Button } from './SharedStyles'

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ProjectCard = styled.div`
  background-color: var(--primary-bg);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  border: 1px solid var(--secondary-bg);

  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary-text);
  margin-bottom: 1rem;
`

const ProjectDescription = styled.p`
  color: var(--secondary-text);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  background-color: var(--secondary-bg);
  color: var(--accent-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

interface ProjectData {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  posterUrl?: string;
  image: string;
}

const projects: ProjectData[] = [
  {
    title: "BinVision",
    description: "Developed a ResNet34 computer vision model to identify trash with 90% accuracy, running on a Raspberry Pi and deployed on AWS EC2. Created a React app displaying real-time classification statistics via Firebase, now used by 250+ users daily in the GT library.",
    techStack: [
      "React",
      "Flask",
      "Firebase",
      "Express.js",
      "Computer Vision",
      "AWS EC2",
      "Raspberry Pi"
    ],
    githubUrl: "https://github.com/ronaks-code/bin-vision",
    demoUrl: "https://devpost.com/software/binvision",
    image: "/project-images/BinVision.png"
  },
  {
    title: "FinTech vs TechFin",
    description: "Developed a classification methodology for fintech companies using NLP models (BERT, Longformer, SVM) on SEC-10K filings. Created an investment strategy based on the classification that outperformed SPY by 220%. Won Best Poster Award at GT's Undergraduate Research Symposium and presented at Posters at the Georgia Capitol",
    techStack: [
      "Python",
      "BERT",
      "Longformer",
      "SVM",
      "TFIDF",
      "NLP"
    ],
    posterUrl: "https://drive.google.com/file/d/1a6VgsvPIQoXjqF_mv8KUwg92v6sUbPFL/view?usp=sharing",
    image: "/project-images/FinTech.png"
  }
]

const Projects = () => {
  return (
    <SectionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle>Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage>
              <img src={project.image} alt={`${project.title} preview`} />
            </ProjectImage>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>
              {project.description}
            </ProjectDescription>
            <TechStack>
              {project.techStack.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              {project.githubUrl && (
                <Button href={project.githubUrl} target="_blank">GitHub</Button>
              )}
              {project.demoUrl && (
                <Button href={project.demoUrl} target="_blank">Demo</Button>
              )}
              {project.posterUrl && (
                <Button href={project.posterUrl} target="_blank">Poster</Button>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  )
}

export default Projects 