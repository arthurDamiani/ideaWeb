import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: ${({theme}) => theme.values.headerSize};
  padding: 0 2rem;
  background-color: ${({theme}) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
`

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.text};
    text-decoration: none;

    &:hover {
      color: ${({theme}) => theme.colors.secondary};
    }
  }
`