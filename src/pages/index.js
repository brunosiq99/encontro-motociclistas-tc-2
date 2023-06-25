import React, { useState } from 'react';
import Partners from '@/src/components/Partners/Partners';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import SlideBannerSec from '@/src/components/SlideBanner/SlideBanner';
const Home = ({config}) => {  
    return (
        <div>
            <Header key="HeaderInHome" config={config} />
            <main> 
                <SlideBannerSec 
                    key="SlideBannerInHome"
                />
                <Partners
                    key="PartnersInHome"
                    partners={config.partners}
                />
            </main>
            <Footer
                key="FooterInHome" 
                config={config}
            />           
        </div>  
    )
}

export default Home;
