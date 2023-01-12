import FacebookLogo from "../assets/facebook-logo.svg"
import InstagramLogo from "../assets/instagram-logo.svg"
import TwitterLogo from "../assets/twitter-logo.svg"
import MarvelLogo from "../assets/marvel-logo.svg"
import { FirstList, FooterContainer, SecondList, Socials } from "../styles/Footer"

export function Footer() {
  return (
    <FooterContainer>
      <img src={MarvelLogo} alt="" />

      <FirstList>
        <li><a href="#">Sobre a Marvel</a></li>
        <li><a href="#">Perguntas frequentes</a></li>
        <li><a href="#">Carreiras</a></li>
        <li><a href="#">Estágio</a></li>
      </FirstList>

      <SecondList>
        <li><a href="#">Propaganda</a></li>
        <li><a href="#">Disney+</a></li>
        <li><a href="#">Marvelhq.com</a></li>
        <li><a href="#">Resgatar quadrinhos digitais</a></li>
      </SecondList>

      <Socials>
        <h3>Siga a Marvel</h3>
        <ul>
          <li><a href="https://www.instagram.com/marvel/" target="_blank"><img src={InstagramLogo} alt="" /></a></li>
          <li><a href="https://www.facebook.com/MarvelBR" target="_blank"><img src={FacebookLogo} alt="" /></a></li>
          <li><a href="https://twitter.com/MarvelBR" target="_blank"><img src={TwitterLogo} alt="" /></a></li>
        </ul>
      </Socials>

    </FooterContainer>
  )
}