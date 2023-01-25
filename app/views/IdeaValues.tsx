import styled from 'styled-components'
import IdeaBox from '@components/IdeaBox'
import { SectionContainer } from '@styles/SectionContainer'
import Button from '@components/Button'

const IdeaValuesContainer = styled(SectionContainer)`
  background-color: ${({theme}) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

const ValuesBoxesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 1.5rem;
`

const ValuesTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.text};
  gap: 10rem;

  div {
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default function IdeaValues() {
  return (
    <IdeaValuesContainer>
      <ValuesBoxesContainer>
        <IdeaBox 
          title='Missão'
          text='It is a long established fact that a reader will be distracted by the readable content of a page when looking'
        />
        <IdeaBox 
          title='Visão'
          text='It is a long established fact that a reader will be distracted by the readable content of a page when looking'
        />
        <IdeaBox 
          title='Valores'
          text='It is a long established fact that a reader will be distracted by the readable content of a page when looking'
        />
      </ValuesBoxesContainer>
      <ValuesTextContainer>
        <div>
          <h2>Título</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <Button fontSize={1}>Criar conta</Button>
      </ValuesTextContainer>
    </IdeaValuesContainer>
  )
}
