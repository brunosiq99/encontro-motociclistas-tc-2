import { createGlobalStyle } from "styled-components";
const CssReset = createGlobalStyle`
  /* Reset */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
  body {
	font-family: sans-serif;
	background-color: ${({theme}) => theme.backgroundBase};
	color:${({theme}) => theme.textColorBase}
  }

  /* NextJS */
  html {
	display: flex;
	flex-direction: column;
	min-height: 100%;
  }
  body {
	display: flex;
	flex: 1;
  }
  #__next {
	display: flex;
	flex: 1;
  }

  /* Globals */
  button,
  a {
	text-decoration: none;
	opacity: 1;
	transition: .3s;
	&:hover,
	&:focus {
	  opacity: .5;
	}
  }




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

export default CssReset;