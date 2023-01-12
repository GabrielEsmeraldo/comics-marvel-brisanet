import styled from "styled-components";

export const ComicsCard = styled.div`
  width: 250px;
  height: 400px;
  background-color: red;
`

export const ComicImage = styled.img`
  width: 200px;
  height: 300px;

  object-fit: contain;
`

export const MainContainer = styled.div`
  width: 100%;
`

export const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  height: 47.38rem;


  background-image: url("../public/marvel-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  min-width: 18.75rem;
  max-width: 36.94rem;
  width: 100%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  svg {
    font-size: 1.88rem;
    top: 0.56rem;
    left: 1.15rem;
    position: absolute;
  }
`

export const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  padding: 0.94rem 0.94rem 0.94rem 4.19rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border-style: none;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
 

  &::placeholder {
    font-size: 1rem;
  }
`

export const SearchButton = styled.button`
  padding: 0 1rem 0 1rem;
  font-size: 1rem;
  color: #ffffff;
  font-weight: 700;
  height: 3rem;
  background-color: green;
  border-style: none;
  border-radius: 0 0.5rem 0.5rem 0;
`

export const ComicsSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 4.69rem;
  padding-bottom: 13rem;
  width: 100%;
  height: auto;
`

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 4rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const ComicContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 68rem;
  gap: 1.5rem;
`
