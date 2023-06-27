import React from "react";
import { styled } from "styled-components";
import Patrocinadores from "./components/Patrocinadores";
//import Patrocinadores from "./components/Patrocinadores";
const StyledPartners = styled.section`
    background-color: #fdfdfd;
    overflow-x: hidden;

`
const Partners = ({partners}) => {
    return(
        <StyledPartners
            className="container regular-section"
        >
            <h2 className="section__titleh2">Parceiros</h2>
            <Patrocinadores 
                patrocinadores={partners.patrocinadores}
            />
        </StyledPartners>
    )
}

export default Partners;
