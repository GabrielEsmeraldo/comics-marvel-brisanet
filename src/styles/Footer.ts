import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  height: auto;
  background-color: #272525;
  color: white;
  padding-top: 4.81rem;
  padding-bottom: 4.81rem;
  gap: 4rem;

  img {
    width: 11.63rem;
    height: 4.63rem;
  }

  ul {
    list-style: none;
    padding-inline-start: 0;
    justify-content: flex-start;
  }
`

export const FirstList = styled.ul`
  margin-block-start: 0;
  display: flex;
  flex-direction: column;
  gap: 1.19rem;
  width: 200px;

  li {
    font-size: 1rem;
    font-weight: 700;

    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`

export const SecondList = styled.ul`
  margin-block-start: 0;
  display: flex;
  flex-direction: column;
  gap: 1.19rem;
  width: 200px;

  li {
    font-size: 1rem;
    font-weight: 400;

    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`


export const Socials = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1rem;
  }

  ul {
    padding-inline-start: 0;
    display: flex;
    gap: 0.69rem;
    justify-content: flex-start;
    
    li {
      justify-content: flex-start;
      a {
        img {
          width: 1.88rem;
          height: 1.88rem;
        }
      }
    }
  }

  @media (max-width: 768px){
    ul {
      width: 200px;
    }
  }
`