import React from 'react';
import SlideBanner from '@/components/SlideBanner/SlideBanner';
import Partners from '@/components/Partners/Partners';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
const Home = ({config}) => {
    console.log(config)
    return (
        <div>
            <Header config={config} />
            <main> 
                <SlideBanner 
                />
                <Partners
                    partners={config.partners}
                />
                <p>87542,5225-----</p>
            </main>
            <Footer config={config} />           
        </div>  
    )
}

export default Home;
