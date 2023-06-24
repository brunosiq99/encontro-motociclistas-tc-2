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

    /* Fonts */
    body{
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
    }
    
`;

export default Styles;