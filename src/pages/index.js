import React from 'react';
import Partners from '@/src/components/Partners';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import SlideBanner from '@/src/components/SlideBanner';
import Head from 'next/head';
import Bandas from '../components/Bandas';
import ComoChegar from '../components/ComoChegar';
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
                <Bandas 
                    bands={config.bands}
                />
                <ComoChegar
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
