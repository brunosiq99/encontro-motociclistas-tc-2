import React from 'react';
import SlideBanner from '@/components/SlideBanner/SlideBanner';
import Partners from '@/components/Partners/Partners';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
const Home = ({config}) => {
    console.log('VAI TOMAR NO CU')
    return (
        <main>
            <Header config={config} />
            <SlideBanner 
            />
            <Partners
                partners={config.partners}
            />
            <Footer config={config} />           
        </main>
    )
}

export default Home;
