import styled from "styled-components";

export const ComicContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition-duration: 0.2s;
  
  img {
    width: 14.38rem;
    height: 21.81rem;
    border-radius: 0.5rem;
  }

  h3 {
    text-align: center;
    width: 14.38rem;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &:hover {
    transform: scale(1.05);
  }
  
`