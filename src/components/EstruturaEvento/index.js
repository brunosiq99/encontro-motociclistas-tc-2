import React from "react";
import { styled } from "styled-components";
import { returnRandomIntBetween0andX } from "@/src/functions/returnRandomIntBetween0andX";

// Font Awesome Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground, faGuitar, faCaravan, faStore, faBurger, faShower, faMotorcycle, faShield, faTree } from "@fortawesome/free-solid-svg-icons";


const StyledEstruturaEvento = styled.section`
    
    .icon-awesome{
        margin-right: 1rem;
        width: 2rem;
    }
    li{
        align-items: center;
        display: flex;
        list-style: none;
        margin: 0.75rem;
    }
    span{
        font-weight: 500;
        text-transform: uppercase;
    }
    @media screen and (min-width: 800px){
        .grid{
            display: grid;
            column-gap: 1rem;
            grid-template-columns: max-content auto;
        }
        .img-dondinho{
            aspect-ratio: unset;
            background-image: url('img/general/foto-aerea-dondinho.png');
            background-size: cover;
            background-position: center;
            height: 100%;
        }
    }
    @media screen and (min-width: 1080px){
        .grid{
            column-gap: 4rem;
        }
    }
`
const EstruturaEvento = () => {
    const estruturaeventolist = [
        {
            description:"Bandas de Rock",
            faicon: faGuitar
        },{
            description:"Expositores",
            faicon: faStore
        },{
            description:"Praça de Alimentação",
            faicon: faBurger
        },{
            description:"Estacionamento para motos e triciclos",
            faicon: faMotorcycle
        },{
            description:"Área de lazer/piquenique",
            faicon: faTree
        },{
            description:"Área de Camping Coberta",
            faicon: faCampground
        },{
            description:"Chuveiro Quente",
            faicon: faShower
        },{
            description:"Estrutura para motorhomes",
            faicon: faCaravan
        },{
            description:"Seguranças durante todo o evento",
            faicon: faShield
        }
    ]
    return(
        <StyledEstruturaEvento
            className="container regular-section"
        >
            <h2 className="section__titleh2">Estrutura do evento</h2>
            <div className="grid">
                <ul>
                    {
                        estruturaeventolist.map((i)=>{
                            return(
                                <li
                                    key={'estrutura-list' + returnRandomIntBetween0andX(999999)}
                                >
                                    <FontAwesomeIcon className="icon-awesome" icon={i.faicon} />
                                    <span>{i.description}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="img-dondinho">

                </div>
            </div>

            
        </StyledEstruturaEvento>
    )
}

export default EstruturaEvento;
 