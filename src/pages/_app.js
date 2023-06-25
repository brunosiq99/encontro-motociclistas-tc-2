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
    const context = useContext(ColorModeContext)
    return(            
        <ThemeProvider theme={config.colorStyles[context.mode]}>
            <CssReset />
            
            <Component
                {...pageProps} 
                config={config}
            />
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
