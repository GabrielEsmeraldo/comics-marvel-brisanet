import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  
  
  html {
    overflow-x: hidden;

    @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  }

  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
    font-size: 1rem;
  }
`;
 
export default GlobalStyle