import { returnRandomIntBetween0andX } from "@/src/functions/returnRandomIntBetween0andX";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";




const StyledPatrocinadores = styled.div`
    background-color: #fdfdfd;
    overflow: hidden;
    width: calc(100vw - 4rem);
    .patrocinadores__container{
        display: flex;
        width: 200%;
    }
    .slides{
        align-items: center;
        animation: scrollPatrocinio4steps infinite;
        animation-duration: 20s;    //Indication: 5s by step
       
        display: grid;
        grid-template-columns: repeat(${({patrocinadorescount}) => patrocinadorescount}, 25% );
        width: ${({slidesWidth}) => slidesWidth};
    }
    .slide{
        width: 100%;
        padding: 4px;
        list-style: none;   
    }
    .slide img{
        width: 100%;
    }
    @media screen and (min-width: 640px){
        width: calc(100vw - 10rem);
        .slides{
            animation: scrollPatrocinio2steps infinite;
            animation-duration: 10s; //Indication: 5s by step
            grid-template-columns: repeat(${({patrocinadorescount}) => patrocinadorescount}, 12.5%);
        }
    }
    //

    // INDICATED: 
    @keyframes scrollPatrocinio2steps{     
        0% {
            transform: translateX(0);
        }
        48% {
            transform: translateX(0);
        }
        52% {
            transform: translateX(-100%);
        }
        99%{
            transform: translateX(-100%);
        }
    }
    @keyframes scrollPatrocinio3steps{     
        32% {
            transform: translateX(0);
        }
        34% {
            transform: translateX(-100%);
        }
        66% {
            transform: translateX(-100%);
        }
        67% {
            transform: translateX(-200%);
        }
        99% {
            transform: translateX(-200%);
        }
    }
    @keyframes scrollPatrocinio4steps{     
        24% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-100%);
        }
        49% {
            transform: translateX(-100%);
        }
        50% {
            transform: translateX(-200%);
        }
        74% {
            transform: translateX(-200%);
        }
        75% {
            transform: translateX(-300%);
        }
        99% {
            transform: translateX(-300%);
        }
    }
`

const Patrocinadores = ({patrocinadores}) => {
    // this sets the slides width based on windowWidth, quant of advertises and the defined size of each
    const patrocinadoresCount = patrocinadores.length;
    const useUpdateWidthByWindow = () => {
        const [slidesWidth,setSlidesWidth] = useState(0);
        const handleResize = () => {
           const windowDimension = {
                winWidth: window.innerWidth,
                winHeight: window.innerHeight
            }
            setSlidesWidth(
               windowDimension.winWidth > 640 ? patrocinadoresCount * 12.5 + '%' : patrocinadoresCount * 20 + '%'
            )
        }
        useEffect(() => {
            handleResize()
            window.addEventListener('resize', () => {
                handleResize()
            })
            return () => window.removeEventListener('resize', handleResize)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        return slidesWidth
    }
    const slidesWidth = useUpdateWidthByWindow();
    return(
        <StyledPatrocinadores
            slideswidth={slidesWidth}
            patrocinadorescount={patrocinadoresCount}
        >  
            <ul className="slides">
                {patrocinadores.map((patrocinador) => {
                    return(
                        <li className="slide" key={`patrocinio${returnRandomIntBetween0andX(100000)}`}>
                            <img src={`../../../img/parceiros/patrocinadores/${patrocinador.imgFile}`} alt={patrocinador.name} />
                        </li>
                    )
                })}
            </ul>   
        </StyledPatrocinadores>
    )
}


export default Patrocinadores; 