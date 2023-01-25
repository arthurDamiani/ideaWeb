import styled from 'styled-components'
import Button from '@components/Button'
import { CentralizedSectionContainer } from '@styles/SectionContainer'

const ExchangeIdeasContainer = styled(CentralizedSectionContainer)`
  background-image: url('WallpaperBranco.png');
  flex-direction: column;
  gap: 2rem;
  color: ${({theme}) => theme.colors.primary};

  h2 {
    font-size: 5rem;
  }
`

export default function ExchangeIdeas() {
  return (
    <ExchangeIdeasContainer>
      <h2>Troque ideias</h2>
      <Button fontSize={2} secondary >Criar conta</Button>
    </ExchangeIdeasContainer>
  )
}