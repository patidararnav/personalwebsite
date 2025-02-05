import { SectionContainer, SectionTitle, SectionText } from './SharedStyles'

const Biography = () => {
  return (
    <SectionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a 20 year old computer science student currently pursuing my Bachelor's and Master's in Computer Science at Georgia Tech with a specialization in Machine Learning.
         I'm fueled by the wonders technology can bring to the world, and I'm always looking for new ways to make an impact. At Georgia Tech, I am a member of Startup Exchange, where I was the Director of AI ATL 2024, Atlanta's largest
         AI hackathon with over 400 attendees. I also enjoy the financial markets, being apart of the Investments Committee in the Quant Sector and taking part in
         machine learning research with the Financial Service Innovation Lab.
      </SectionText>
    </SectionContainer>
  )
}

export default Biography 