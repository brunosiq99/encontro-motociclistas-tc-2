import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
     
    
    /* Container */
    .container{
        padding: 1rem 2rem;
    }
    @media screen and (min-width: 640px){
        .container{
            padding: 1rem 5rem;
        }
    }
  
`;

export default Styles;