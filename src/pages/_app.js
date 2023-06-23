import React, {useContext} from 'react';
import { ThemeProvider } from 'styled-components';
import CssReset from '@/styles/CssReset';
import Styles from '@/styles/Styles';
import { ColorModeContext, ColorModeProvider } from '@/styles/ColorMode';
import config from '../../config.json';         //Import all json data and configs

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
            <Styles />
            <Component
                config={config}
                {...pageProps} 
            />
        </ThemeProvider>
    )
}
export default function App(pageProps) {
    return(
        <ProviderWrapper>
            <MyApp {...pageProps}></MyApp>
        </ProviderWrapper>
    )
}
