import React from "react";
import { styled } from "styled-components";
import Patrocinadores from "./components/Patrocinadores";
const StyledPartners = styled.section`

`
const Partners = ({partners}) => {
    return(
        <StyledPartners>
            <Patrocinadores 
                patrocinadores={partners.patrocinadores}
            />

        </StyledPartners>
    )
}

export default Partners;