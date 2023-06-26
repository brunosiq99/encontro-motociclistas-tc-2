import React from "react";
import { styled } from "styled-components";

const StyledBannerOne = styled.div`
    @font-face { 
        font-family: "Kawit Free"; 
        src: local('Kawit Free'), url('../../../fonts/KawitFree-Italic.ttf') format('TrueType');
    }

    background-image: url('../../../pageAnosAnteriores/assets/Img/2022/banner.png');
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    .banner__content{
        align-items: center;
        backdrop-filter: brightness(30%);
        color: #fdfdfd;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        padding: 2rem 0;
        width: 100%;
    }
    .banner__content p{
        font-family: "Kawit Free", cursive;
        font-size: 2rem;
        text-align: center;
    }
    .banner__logo{
        max-width: 80vw;
        width: 22.5rem;
    }
    .banner__date-and-local p{
        font-weight: 400;
        font-size: 1.15rem;
        text-transform: uppercase;
    }
    div{
        text-align: center;
    }
    @media screen and (min-width: 640px) {
        .banner__content{
            font-size: 1.75rem;
        }
        .banner__logo{
        width: 27.5rem
        }
`

const BannerOne = () => {
    return(
        <StyledBannerOne>
            <div className="banner__content">
                <p>
                    VI
                </p>
                <img 
                    key="BannerOne_Img"
                    src="pageAnosAnteriores/assets/Img/new-logo-23-white.png"
                    className="banner__logo"
                    alt="Encontro Nacional de Motociclistas e Triciclistas de Três Corações, Minas Gerais"
                />
                <div className="banner__date-and-local">
                    <p>Dias 11, 12 e 13 de Agosto</p>
                    <p>Parque Dondinho - Av. Quinto Centenário</p>
                </div>
            </div>
        </StyledBannerOne>
    )
}

export default BannerOne;
