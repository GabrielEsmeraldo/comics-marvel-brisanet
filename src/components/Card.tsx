import { ComicContainer } from '../styles/Card'

export function Card({id, title, image, price, handleModal}: any) {
  return (
    <ComicContainer key={id} onClick={() => handleModal(id)}>
      <img src={image} alt="" />

      <h3>{title}</h3>
      <span>{price}</span>
    </ComicContainer>
  )
}