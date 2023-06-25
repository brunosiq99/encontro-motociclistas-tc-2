import React from 'react';
import Partners from '@/src/components/Partners/Partners';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import SlideBanner from '@/src/components/SlideBanner/SlideBanner';
import Head from 'next/head';
const Home = ({config}) => {  
    return (
        <div>
            <Head>
                <title>Encontro de Motociclistas - Três Corações</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>
            <Header 
                key="HeaderInHome" 
                config={config} 
            />
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
