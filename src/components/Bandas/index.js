import React from "react";
import { styled } from "styled-components";

const StyledBandas = styled.section`
    .bands-flex{
        align-items: center;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 1rem;
    }
    .back-orange{
        aspect-ratio: 5/6;
        background-color: orange;
        border-radius: 5px;
        overflow: hidden;
        width: 260px;
    }
    .band-banner{ 
        background-size: cover;
        background-position: center;
        height: 100%;
        position: relative;   
        width: 100%;
    }
    .band-banner p{
        background-color: orange;
        bottom: 20px;
        font-size: 1.25rem;
        font-weight: 800;
        margin-left: 15%;
        margin-right: 15%;
        padding: 0.5rem 0;
        position: absolute;
        text-align: center;
        text-transform: uppercase;
        width: 70%;
    }
    .back-misterious{
        width: 100px;
        margin: 0.75rem;
        text-align: center;
    }
    .back-misterious img{
        width: 80%;
    }
    @media screen and (min-width: 560px){
        .bands-flex{
            justify-content: space-around;
        } 
    }
    @media screen and (min-width: 720px){     
        .band-banner{

            filter: opacity(0.7);
            transition: 0.5s;
        }
        .band-banner:hover{
            filter: opacity(1);
            transform: scale(1.1);
        }
    }

`
//import '../../../public/'
const Bandas = ({bands}) => {
    console.log(bands)
    return(
        <StyledBandas
            className="container regular-section"
        >
            <h2 className="section__titleh2">Bandas</h2>
            <div className="bands-flex">
                {
                    bands.map((band) => {
                        const imgUrl = 'img/bands/' + band.img;
                        const backGroundImgStyle = {
                            backgroundImage: `url("${imgUrl}")`
                        }
                        if (imgUrl != 'img/bands/who.png'){
                            return(
                                <div className="back-orange"> 
                                    <div 
                                        className="band-banner"
                                        key={'band' + band.name}
                                        style={backGroundImgStyle}
                                    >
                                    <p>{band.name}</p>
                                    </div>
                                </div>
                            )
                        }else{
                            return(
                                <div className="back-orange back-misterious"> 
                                    <img src={`img/bands/${band.img}`} />
                                </div>
                            )
                        }
                    })
                }
            </div>      
        </StyledBandas>
    )
}
export default Bandas;