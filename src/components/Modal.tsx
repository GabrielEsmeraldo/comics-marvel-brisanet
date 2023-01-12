import { CloseButtonContainer, InfoContainer, ModalBackground, ModalCard, ModalContainer, MoreInfo, MoreInfoContainer } from "../styles/Modal";
import { X } from 'phosphor-react'
import { Card } from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { ModalMap } from "./ModalMap";

export function Modal({ setModal, comicsData, selectedComic, handleModalMap }: any) {

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButtonContainer>
          <button onClick={() => setModal(false)}><X size={32} /></button>
        </CloseButtonContainer>

        {comicsData.map((comic: any) => {
          if (comic.id === selectedComic) {
            return (
              <MoreInfoContainer key={comic.id}>
                <ModalCard >
                  <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt="" />

                  <span>{comic.prices[0].price === 0 ? 'Sem Estoque' : 'USD ' + comic.prices[0].price}</span>
                </ModalCard>

                <MoreInfo>
                  <InfoContainer>
                    <h2>{comic.title}</h2>

                    <p><span>Quantidade de Páginas: </span>{comic.pageCount}</p>

                    <span>Personagens: {comic.characters.items.map((character: any) => {
                      return (
                        <span key={character.name}>{character.name + ', '} </span>
                      )
                    })}</span>

                    <span>Criadores: {comic.creators.items.map((creator: any) => {
                      return (
                        <span key={creator.name}>{creator.name + ', '} </span>
                      )
                    })}</span>
                  </InfoContainer>

                  <button onClick={() => handleModalMap()}>Comprar Agora</button>

                </MoreInfo>
              </MoreInfoContainer>

            )
          }
        })}

      </ModalContainer>

    </ModalBackground>
  )
}