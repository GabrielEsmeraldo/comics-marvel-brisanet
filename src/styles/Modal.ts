import styled from "styled-components";

export const ModalBackground = styled.div`
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.863);
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 65rem;
  max-height: 40.88rem;
  border-radius: 0.5rem;
  background-color: white;
  padding: 3.75rem;
  margin: 1rem;

  @media (max-width: 768px) {
    max-height: 95vh;
    overflow-y: scroll;
  }
`

export const CloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`

export const ModalCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;

  img {
    width: 14.38rem;
    height: 21.81rem;
    border-radius: 0.5rem;
  }

  span {
    margin-top: 1.63rem;
    font-size: 2.25rem;
    font-weight: 700;
  }
`

export const MoreInfoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 2.69rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const MoreInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.88rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 700;
    background-color: #40BB54;
    padding: 0.63rem 0 0.63rem 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-size: 1rem;
  font-weight: 700;

  h2 {
    font-size: 2rem;
  }
`
