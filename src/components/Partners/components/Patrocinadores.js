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
        animation: scrollPatrocionio backwards infinite;
        animation-duration: 8s;
        animation-timing-function: linear;
        display: grid;
        grid-template-columns: repeat(${({patrocinadorescount}) => patrocinadorescount}, 20% );
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
            animation: none;
            grid-template-columns: repeat(${({patrocinadorescount}) => patrocinadorescount}, 12.5%);
        }
    }
    //


    @keyframes scrollPatrocionio{
        
        0% {
            transform: translateX(0);
        }
        45% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-100%);
        }
        95% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
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
