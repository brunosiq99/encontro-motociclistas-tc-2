import React, { useState } from 'react';
import Partners from '@/src/components/Partners/Partners';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import SlideBanner from '@/src/components/SlideBanner/SlideBanner';
const Home = ({config,reloaded}) => {  
    return (
        <div>
            <Header 
                key="HeaderInHome" 
                config={config} 
                reloaded={reloaded}
            />
            <main> 
                <SlideBanner 
                    key="SlideBannerInHome"
                    reloaded={reloaded}
                />
                <Partners
                    key="PartnersInHome"
                    partners={config.partners}
                    reloaded={reloaded}
                />
            </main>
            <Footer
                key="FooterInHome" 
                config={config}
                reloaded={reloaded}
            />           
        </div>  
    )
}

export default Home;
