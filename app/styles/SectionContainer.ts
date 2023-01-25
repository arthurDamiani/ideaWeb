import styled from 'styled-components'

export const CentralizedSectionContainer = styled.div`
  width: 100%;
  height: ${({theme}) => `calc(100vh - ${theme.values.headerSize})`};
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SectionContainer = styled.div`
  width: 100%;
  height: ${({theme}) => `calc(100vh - ${theme.values.headerSize})`};
  padding-bottom: 10rem;
`