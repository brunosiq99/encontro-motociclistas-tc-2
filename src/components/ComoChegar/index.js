import React from "react";
import { styled } from "styled-components";

const StyledComoChegar = styled.section`
    .maps{
       width: 100%;
    }
`
const ComoChegar = () => {
    return(
        <StyledComoChegar
            className="container regular-section"
        >
            <h2 className="section__titleh2">Como Chegar</h2>
            <iframe 
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.0332201063275!2d-45.24859542485345!3d-21.701434495907694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cadcf277585b95%3A0x657dd8076629676c!2sParque%20Dondinho!5e0!3m2!1spt-BR!2sbr!4v1688227396995!5m2!1spt-BR!2sbr" 
                height="450" 
                style={{border:0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>

        </StyledComoChegar>
    )
}

export default ComoChegar;


