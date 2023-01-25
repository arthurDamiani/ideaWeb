import Image from 'next/image'
import * as H from './Header.styles'
import LogoVertical from 'public/LogoVertical.png'
import Link from 'next/link'
import Button from '@components/Button'

export default function Header() {
  return (
    <H.HeaderContainer>
      <H.NavigationContainer>       
        <Link href='/'>
          <Image 
            src={LogoVertical} 
            width={200}
            height={100}
            alt='Idea logo'
          />
        </Link>
        <Link href='#aboutIdea'>
          Sobre
        </Link>
        <Link href='#'>
          Download
        </Link>
        <Link href='#'>
          Contato
        </Link>
      </H.NavigationContainer>
      <Button fontSize={1}>Login</Button>
    </H.HeaderContainer>
  )
}