import { styled } from "styled-components";
import React from "react";

const StyledStandardFooter = styled.footer`
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

const StandardFooter = () => {
    return(
        <StyledStandardFooter>
            <div className="container footer__content ">
                <ul>

                </ul>
                <img key="Footer_Logo" className="footer__logo" src="pageAnosAnteriores/assets/Img/new-logo-23-white.png"/>
                <ul>

                </ul>
            </div>
        </StyledStandardFooter>
    )
}
export default StandardFooter;