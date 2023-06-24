import React from 'react';
import SlideBanner from '@/components/SlideBanner/SlideBanner';
import Partners from '@/components/Partners/Partners';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

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
            <Footer key="FooterInHome" config={config} />           
        </div>  
    )
}

export default Home;
