import styled from 'styled-components'
import Image from 'next/image'
import Lampada from 'public/Lampada.png'
import { CentralizedSectionContainer } from '@styles/SectionContainer'

const AboutIdeaContainer = styled(CentralizedSectionContainer)`
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.text};

  div {
    max-width: 30rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`

export default function AboutIdea() {
  return (
    <AboutIdeaContainer id='aboutIdea'>
        <div>
          <h2>Sobre a Ideia Social</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <Image 
          src={Lampada} 
          width={550}
          height={400}
          alt='Idea logo'
        />
      </AboutIdeaContainer>
  )
}