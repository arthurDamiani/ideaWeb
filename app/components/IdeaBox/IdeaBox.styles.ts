import styled from 'styled-components'

export const BoxContainer = styled.div`
  width: 25rem;
  height: 10rem;
  display: flex;
  flex-direction:column;
`

export const TitleContainer = styled.div`
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 2rem;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.text};
  border-radius: 0 0 8px 8px;

  p {
    max-width: 20rem;
  }
`