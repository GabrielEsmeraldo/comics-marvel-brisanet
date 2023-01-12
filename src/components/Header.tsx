import MarvelLogo from '../assets/marvel-logo.svg'
import { HeaderContainer } from '../styles/Header'

export function Header() {
  return (
    <HeaderContainer>
      <img src={MarvelLogo} alt="" />
    </HeaderContainer>
  )
}