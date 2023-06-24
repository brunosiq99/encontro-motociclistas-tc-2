import React from "react";
import { styled } from "styled-components";
//import Patrocinadores from "./components/Patrocinadores";
const StyledPartners = styled.section`
    background-color: #fdfdfd;
    overflow-x: hidden;

    h2{
        text-align: center;
        text-transform: uppercase;
        font-size: 1.25rem;
        font-weight: 500;
        text-shadow: 1px 1px 2px #000; 
    }
`
const Partners = ({partners}) => {
    console.log(partners)
    return(
        <StyledPartners
            className="container"
        >
            <h2>Parceiros</h2>
            
        </StyledPartners>
    )
}

export default Partners;