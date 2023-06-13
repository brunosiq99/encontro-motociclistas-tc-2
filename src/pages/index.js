import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Partners from '@/components/Partners/Partners';
import SlideBanner from '@/components/SlideBanner/SlideBanner';
import Head from 'next/head';
import React from 'react';

const Home = ({config}) => {
    return (
        <div>
            <Head>
                <title>Encontro De Motociclistas de Três Corações/MG</title>
                <meta name="description" content="Nos dias 11, 12 e 13 de Agosto, todos os caminhos te trazem a Três Corações, terra do Rei Pelé. Evento Clássico com grandes shows, áres de camping, troféus" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />  
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Knewave&display=swap" rel="stylesheet" />

            </Head>
            <main>
                <Header 
                    config={config}
                />
                <SlideBanner 
                />
                <Partners
                    partners={config.partners}
                />
                <Footer 
                />
            </main>
        </div>
    )
}

export default Home
