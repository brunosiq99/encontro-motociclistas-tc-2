import React from "react";
import styled from "styled-components";
import HorizontalNav from "./components/HorizontalNav";



const StyledHeader = styled.header`
    align-items: center;
    background: #030303;
    color: #fdfdfd;
    display: flex;
    height: 8vh;
    
    justify-content: space-between;
    padding: 0 5%;
    position: fixed;
    text-transform: uppercase;
    top: 0;
    width: 100%;
    z-index: 100;
    
    .header__title{
        line-height: 1.05rem;
        text-align: center;
    }
    .header__title h1{
        font-size: 1.1rem;
    }
    .header__title h3{
        font-size: 1rem;
    }
    @media screen and (max-width:560px) {
        justify-content: center;
        .header__title{
            display: none;
        }
    }
`

const Header = ({config}) => {
    return(
        <StyledHeader>
            <div className="header__title">
                <h1>
                    Encontro Nacional 
                    <br/>
                    de Motociclistas
                </h1>
                <h3>
                    Três Corações - MG
                </h3>
            </div>
            <HorizontalNav 
                pages={config.pages}
            />
        </StyledHeader>
    )
}

export default Header;
