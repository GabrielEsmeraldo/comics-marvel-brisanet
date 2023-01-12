import { CloseButtonContainer, InfoContainer, MapContainer, ModalBackground, ModalCard, ModalContainer, MoreInfo, MoreInfoContainer, SendButton } from "../styles/ModalMap";
import { X } from 'phosphor-react'
import { Card } from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoogleMaps } from "./GoogleMaps";

export function ModalMap({ setModal, comicsData, selectedComic, setModalMap, handleSend }: any) {

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButtonContainer>
          <button onClick={() => setModalMap(false)}><X size={32} /></button>
        </CloseButtonContainer>

        <h2>Onde deseja receber seu quadrinho?</h2>
        <h3>Arraste o marcador para a localização que deseja receber o quadrinho.</h3>
        <GoogleMaps />

        <SendButton onClick={() => handleSend()}>Enviar</SendButton>

      </ModalContainer>
    </ModalBackground>
  )
}