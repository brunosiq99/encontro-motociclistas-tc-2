import { styled } from "styled-components";
import React from "react";

const StyledFooter = styled.footer`
    background-color: #030303;
    bottom: 0;
    width: 100vw;
    
    .footer__content{
        align-items: center;
        display: flex;
        justify-content: space-around;
    
    } 
    .footer__logo{
        width: 12rem;
    }
    
    
`

const Footer = () => {
    return(
        <StyledFooter>
            <div className="container footer__content ">
                <ul>

                </ul>
                <img className="footer__logo" src="https://www.encontromotociclistas.com.br/assets/Img/new-logo-23-white.png"/>
                <ul>

                </ul>
            </div>
        </StyledFooter>
    )
}
export default Footer;