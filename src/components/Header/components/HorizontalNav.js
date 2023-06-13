
import { returnRandomIntBetween0andX } from "@/functions/returnRandomIntBetween0andX";
import React from "react";
import { styled } from "styled-components";
const StyledHorizontalNav = styled.nav`
    align-items: stretch;
    display: flex;
    height: 100%;
    a{
        align-items: center;
        display: flex;
        color: #fdfdfd;
        height: 100%;
        font-size: 1.25rem;
        margin-left: 1rem;
        position: relative;
        text-decoration: none;
    }
    a:first-child::after{
        position: absolute;
        content: "";
        background: orange;
        bottom: 0;
        height: 5pt;
        width: 100%;
    }
`
const HorizontalNav = ({pages}) => {
    return(
        <StyledHorizontalNav>
            {pages.map((page)=>{
                // Add especial class for the active page anchor
                let className = "aActive";
                //page.url === getCurrentURL() ? className = "aActive": className = "";

                return(
                    <a 
                        key={`page-ref${returnRandomIntBetween0andX(100000)}`}
                        href={page.url}
                        className={className}
                    >
                        {page.name}
                    </a>
                )              
            })}
        </StyledHorizontalNav>
    )
}

export default HorizontalNav;
