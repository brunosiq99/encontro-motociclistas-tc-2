import { returnRandomIntBetween0andX } from "@/functions/returnRandomIntBetween0andX";
import React from "react";
import { styled } from "styled-components";
import BannerOne from "./components/BannerOne";


const StyledSlideBanner = styled.section`
    .slider{
        background-color: rgba(0,0,0,0.8);
        height: 82vh;
        margin-top: 8vh;
        overflow: hidden;
        width: 100vw;
    }
    .slides{
        height: 100%;
    }
    .slide{
        height: 100%;
        width: 100vw;
    }

    @media screen and (max-width: 640px) {
        height: 42vh;
    }

`

const SlideBanner = () => {
    //100vw and hidden overflow slider containing all slides defined in config.json
    //Beware: on bannersToLoad only fill imgUrl and href or styledComponent, otherwise the prefference will be for the styledComponent, ignoring imgUrl
    const bannersToLoad = [
        {
            styledComp: <BannerOne />,
            imgSrc:"",
            href:""
        }
    ]
    return(
        <StyledSlideBanner>
            <div className="slider">
                <div className="slides">
                    {
                        bannersToLoad.map((banner) => {
                            if(banner.styledComp !== "" ){
                                return(
                                    <div 
                                        key={`banner${returnRandomIntBetween0andX(5000000)}`}
                                        className="slide"
                                    >
                                        {banner.styledComp}
                                    </div>
                                )
                            }else{
                                return(
                                    <a 
                                        key={`banner${returnRandomIntBetween0andX(5000000)}`}  
                                        href={banner.imgHref} 
                                        className="slide"
                                    >
                                        <img 
                                            
                                            src={banner.imgSrc}
                                        />
                                    </a>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </StyledSlideBanner>
    )
}

export default SlideBanner