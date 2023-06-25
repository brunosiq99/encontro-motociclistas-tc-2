import React, {useContext, useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import CssReset from '@/src/styles/CssReset';
import Styles from '@/src/styles/Styles';
import { ColorModeContext, ColorModeProvider } from '@/src/styles/ColorMode';
import config from '@/config.json';         //Import all json data and configs

const ProviderWrapper = ({children}) => {
  	return(
	  	<ColorModeProvider initialMode={"light"}>
		  	{children}
	  	</ColorModeProvider>
  	)
}

const MyApp = ({Component, pageProps}) => {
    const [reloaded, setReloaded] = useState('false')
    const context = useContext(ColorModeContext)
    return(            
        <ThemeProvider theme={config.colorStyles[context.mode]}>
            <CssReset />
            
            <Component
                reloaded={reloaded}
                {...pageProps} 
                config={config}
            />
	    {
                // for some reason the Styled Components is not loading corretly in first load, so it's a way of reloading page components
                useEffect(()=>{
                    if(reloaded==='false'){
                        setTimeout(()=>{
                            setReloaded('true')
			    console.log("Recarregou")
                        },5000)
                        //window.location.reload(false)
                    }
                },[])
            }
        </ThemeProvider>
    )
}
export default function App(pageProps) {
    
    
    return(
        <ProviderWrapper>
            <MyApp {...pageProps} ></MyApp>
        </ProviderWrapper>
    )
}
