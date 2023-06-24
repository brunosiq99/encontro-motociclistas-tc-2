import React, { useState } from 'react';
import SlideBanner from '@/src/components/SlideBanner/SlideBanner';
import Partners from '@/src/components/Partners/Partners';
import Footer from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header/Header';
const Home = ({config}) => {  
    return (
        <div>
            <Header key="HeaderInHome" config={config} />
            <main> 
                <SlideBanner 
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
