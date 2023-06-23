
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { styled } from "styled-components";
import Partners from "@/components/Partners/Partners";

// the old "Anos Anteriores" page was transcribed with the css styles
// posteriorly it will be remade in react pattern 
const StyledAnosAnteriores = styled.div`
    background-color: rgba(0,0,0,0.9);
    color: #fdfdfd;

    padding-top: 3rem;

    // editon.css
    .edition{
        flex-direction: column;
        display: flex;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
    }
    .img-before{
        flex-direction: column-reverse;
    }
    .edition__content{
        margin: 1rem;
        width: 100%;
    }
    .edition__content___title{
        margin: 0.5rem 0;
    }
    .edition__content___text{ 
        margin: 0.25rem 0;
        text-indent: 2rem;
    }
    .edition__images{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: block;
        margin: 1rem;
        height: 45vh;
        width: 100%;
    }

    @media screen and (min-width: 640px) {
        .edition{
            align-items: stretch;
            flex-direction: row;
        }
        .edition__content{
            width: 50%;
        }
        .edition__images{
            
            width: 50%;
        }
    }
    @media screen and (min-width: 960px) {
        .edition__content{
            width: 60%;
        }
        .edition__images{
            width: 40%;
        }
    }

    // edition-images.css
    #imagev{
        background-image: url('./pageAnosAnteriores/assets/Img/2022/images/sabado/1.png');
    }
    #imageiv{
        background-image: url('./pageAnosAnteriores/assets/Img/2020/foto1.jpg');
    }
    #imageiii{
        background-image: url('./pageAnosAnteriores/assets/Img/lecambada2019.jpg');
    }
    #imageii{
        background-image: url('./pageAnosAnteriores/assets/Img/2016/foto5.jpg');
    }
    #imagei{
        background-image: url('./pageAnosAnteriores/assets/Img/2015/foto5.jpg');
    }
`

const AnosAnteriores = ({config}) => {
    
    return(
        <StyledAnosAnteriores>
            <Header config={config} />
            <main>
                <section className="edition container">
                    <div className="edition__content">
                        <h3 className="edition__content___title main__subtitles">V Encontro de Motociclistas de Três Corações - MG</h3>
                        <p className="edition__content___text">
                                Após 2 anos, pudemos nos reunir novamente, o ENCONTRO NACIONAL DE MOTOCICLISTAS DE TRÊS CORAÇÕES
                            retornou e foi um sucesso. Nesta 5ª edição do Encontro, além de um grande público nos 3 dias
                            de evento, contamos com a participação de 108 motoclubes de 56 cidades e 4 estados.
                        </p>
                        <p className="edition__content___text">
                                O Encontro Nacional de Motociclistas de Três Corações foi um evento beneficente, foram arrecadados
                            577kg de alimentos e 21 litros de óleo de soja. As doações foram encaminhadas para o Instituto Sagrada
                            Face de Jesus Cristo, que desenvolve seu trabalho junto a crianças, adolescentes e jovens em situação 
                            de risco pessoal e social
                        </p>
                    </div>
                    <div className="edition__images" id="imagev"></div>
                </section>
                <section className="edition container img-before">
                    <div className="edition__images" id="imageiv"></div>
                    <div className="edition__content">
                        <h3 className="edition__content___title main__subtitles">IV Encontro de Motociclistas de Três Corações - MG [LIVE]</h3>
                        <p className="edition__content___text main__text">
                            Em 2020 foi um ano difícil jamais visto na atualidade com uma pandemia que deixa o mundo
                        inteiro parado por um período e nos levou a alternativa de fazer o diferente e não deixar de
                        realizar aquilo que a gente mais gosta, encontrar os irmãos mesmo que por meio virtual, e
                        realizamos uma LIVE tentando se aproximar ao máximo das características de um Encontro de
                        Motociclistas.
                        </p>
                        <p className="edition__content___text main__text">
                            Obedecendo as normas da vigilância sanitária, com pouco público e organizadores levamos aos
                        irmãos a forma transmitida do evento para que em suas casas pudessem assistir e relembrar
                        os momentos de encontro.
                        </p>
                        <p className="edition__content___text main__text">
                            Sendo assistido até mesmo fora do Brasil, fizemos o cenário próximo ao real com a chegada
                        dos motociclistas, área de camping, locutor e duas bandas sensacionais com o Rock Clássico e
                        o Rock Brasil 80.
                        </p>
                        <a href="https://www.youtube.com/watch?v=emMJQO_Mqvo"><p className="edition__content___text main__text">Assista no youtube</p></a>
                    </div>
                </section>
                <section className="edition container">
                    <div className="edition__content">
                        <h3 className="edition__content___title main__subtitles">III Encontro de Motociclistas de Três Corações - MG</h3>
                        <p className="edition__content___text">
                                2019 foi o retorno do ENCONTRO NACIONAL DE MOTOCICLISTAS DE TRÊS CORAÇÕES MG com
                            a UNIÃO DE MOTOCICLISTAS E MOTOCLUBES o que é a característica da realização do mesmo.
                            Então foi realizado o 3° Encontro Nacional de Motociclistas de Três Corações MG com a
                            presença da sociedade tricordiana, cidades vizinhas e a honra de ter recebido em nossa Três
                            Corações, motociclista de 4 REGIÕES DO PAÍS, 8 estados, 52 cidades e 107 Motoclubes
                            registrados.
                            
                        </p>
                        <p className="edition__content___text">
                                13 incríveis bandas se apresentaram de sexta a domingo com destaque para Queen Cover e
                            Elvis Presley Cover dentre outras de igual qualidade.
                        </p>
                        <p className="edition__content___text">
                                A extrutura de camping é fantástica com diversos banheiros com chuveiros quentes e sem
                            acesso a motocicleta oferecendo maior descanso aos estradeiros, nesta área pedimos
                            RESPEITO E SILÊNCIO com os que ainda estejam descansando.
                        </p>    
                        <p className="edition__content___text">
                                Nosso evento é feito e pensado em todos, somos dedicados para fazer o melhor pra vocês,
                            temos uma equipe com vários Motoclubes a disposição para receber todas as orientações
                            vinda de vocês que nos ajudam a realizar este evento.
                            Somos sempre gratos pela presença de todos.
                        </p>
                    </div>
                    <div className="edition__images" id="imageiii"></div>
                </section>
                <section className="edition container img-before">
                    <div className="edition__images" id="imageii"></div>
                    <div className="edition__content">
                        <h3 className="edition__content___title main__subtitles">II Encontro de Motociclistas de Três Corações - MG</h3>
                        <p className="edition__content___text">
                                Em 22 de abril de 2016 novamente moto clubes de Três Corações se uniram para a organização 
                            do 2º Encontro de Motociclistas de Três Corações, onde se confraternizaram no Parque 
                            Dondinho 267 motos clubes de oito Estados em uma festa com muita música, motos e amigos, 
                            fomentando o setor de turismo em nossa cidade, evento este que arrecadou quantidade 
                            expressiva de alimentos doados as Instituições de nossa cidade, entre elas APAE, Asilo São 
                            Vicente de Paula, Lar Anjo da Guarda.
                        </p>
                    </div>
                </section>
                <section className="edition container">
                    <div className="edition__content">
                        <h3 className="edition__content___title main__subtitles">I Encontro de Motociclistas de Três Corações - MG</h3>
                        <p className="edition__content___text">
                                Em 2015, moto clubes e motociclistas de nossa cidade se juntaram para organização do 
                            Primeiro Encontro de Motociclistas de Três Corações, com realização da Prefeitura Municipal 
                            e organizado pelos moto clubes, evento este que marcou como um dos melhores encontros 
                            daquele ano do sul de Minas Gerais e colocou a cidade de Três Corações no roteiro de 
                            eventos motociclisticos. A opinião positiva de todos visitantes foi unanime sobre a 
                            grandiosidade e hospitalidade do evento e o comercio teve grande retorno com toda 
                            movimentação da cidade. Para entrada no evento foi solicitada a doação de 2 kg de alimento 
                            para posteriormente distribuirmos por entidades de Três Corações , Asilo SSPV e Abrigo Anjo
                            da Guarda arrecadamos mais de 500 kg de alimentos.
                        </p>
                    </div>
                    <div className="edition__images" id="imagei"></div>
                </section> 
            </main>
            <Partners 
                partners={config.partners}
            />
            <Footer config={config} />
        </StyledAnosAnteriores>
    )
}

export default AnosAnteriores;