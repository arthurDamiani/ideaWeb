import {ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent} from 'react'
import styled from 'styled-components'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  fontSize: number;
  secondary?: boolean;
}

const StyledButton = styled.button<{fontSize: number, secondary?: boolean}>`
  border-radius: 50px;
  padding: 0.5rem 1rem;
  font-size: ${p => `${p.fontSize}rem`};
  font-weight: bold;
  background-color: ${p => p.secondary ? p.theme.colors.primary : p.theme.colors.text};
  color: ${p => p.secondary ? p.theme.colors.text : p.theme.colors.primary};
`

export default function Button({fontSize, secondary, children, ref, ...props}: ButtonProps) {
  return <StyledButton {...props} fontSize={fontSize} secondary={secondary} >{children}</StyledButton>
}