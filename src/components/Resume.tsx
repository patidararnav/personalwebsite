import styled from '@emotion/styled'
import { SectionContainer, SectionTitle, SectionText } from './SharedStyles'

const ResumeContainer = styled.div`
  text-align: center;
`

const ResumeEmbed = styled.div`
  width: 100%;
  height: 800px;
  margin-top: 2rem;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--secondary-bg);
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`

const Resume = () => {
  const embedUrl = "https://drive.google.com/file/d/11KP4Eq8FnfQA1co0LjChDo6g4w2NgbjV/preview";

  return (
    <SectionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle>Resume</SectionTitle>
      <ResumeContainer>
        <SectionText>
          View my resume!
        </SectionText>
        <ResumeEmbed>
          <iframe 
            src={embedUrl}
            allow="autoplay"
            title="Resume PDF"
          />
        </ResumeEmbed>
      </ResumeContainer>
    </SectionContainer>
  )
}

export default Resume 