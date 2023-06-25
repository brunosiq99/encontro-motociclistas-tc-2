import { usePathname } from 'next/navigation';
import { returnRandomIntBetween0andX } from "@/src/functions/returnRandomIntBetween0andX";
import React from "react";
import { styled } from "styled-components";
import Link from "next/link";
const StyledHorizontalNav = styled.nav`
    align-items: stretch;
    display: flex;
    height: 100%;
    .link{
        align-items: center;
        display: flex;
        color: #fdfdfd;
        height: 100%;
        font-size: 1.25rem;
        margin-left: 1rem;
        position: relative;
        text-decoration: none;
    }
    .active::after{
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
                const currentPath = usePathname()
                let className = '';
                currentPath == page.path ? className = "link active" : className = "link";
                return(
                    <Link
                        className={className}
                        passHref={true}
                        href={`.${page.path}`}
                        key={`page-ref${returnRandomIntBetween0andX(100000)}`}
                    >
                        {page.name}
                    </Link>
                )              
            })}
        </StyledHorizontalNav>
    )
}

export default HorizontalNav;