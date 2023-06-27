import { createGlobalStyle, css } from 'styled-components';

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

    // styles
    .section__titleh2{
        color: #000;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.25rem;
        font-weight: 500;
        text-shadow: 1px 1px 2px #000; 
    }

    
`;

export default Styles;