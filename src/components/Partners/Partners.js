import React from "react";
import { styled } from "styled-components";
import Patrocinadores from "./components/Patrocinadores";
const StyledPartners = styled.section`
    background-color: #fdfdfd;
    overflow-x: hidden;
`
const Partners = ({partners}) => {
    
    return(
        <StyledPartners
            className="container"
        >
            <Patrocinadores 
                patrocinadores={partners.patrocinadores}
            />
        </StyledPartners>
    )
}

export default Partners;