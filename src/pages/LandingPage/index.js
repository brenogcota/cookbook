import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header';

import { Container, Content, LeftContent, CenterContent } from './styles';

import bgTop from '../../assets/background-top.png';
import bgBottom from '../../assets/background-bottom.png';
import girl from '../../assets/cookerblack.png';

function LandingPage() {
    return (
        <>
            <Container>
                <Header />
                <img src={bgTop} alt=""/>

                <Content>

                    <h1>Quer descobrir como ter aquela renda extra no fim do mês?</h1>
                    <p>Se você é como uma das muitas pessoas que quer uma oportunidade de ter uma renda a mais
                        ou até mesmo se tornar uma empreendedora, então esse conteúdo é pra você</p>
                    <p>Baixe nosso e-book gratuito ou acesse nosso menu de receitas!</p>

                    <Link to="/receitas">
                        Receitas
                    </Link>

                </Content>
                
            </Container>


            <Container>

                <LeftContent>

                    <img src={girl} alt=""/>

                    <div>
                        <h1>E-book Gratuito</h1>
                        <p>Baixe o nosso e-book gratuito e comece a testar as receitas que preparei para você!</p>

                        <a href="/assets/documents/brigadeiros-lucrativos.docx" download>Baixar ebook gratuito</a>
                    </div>

                </LeftContent>

            </Container>

            <Container>
                

                <CenterContent>

                    <div>
                        
                        <h1>Material Completo</h1>
                        <p>E para você que quer ir além e empreender, preparamos um material completo para você,
                            com dicas que vão te ajudar não só quais as melhores receitas mas como conseguir as suas primeiras vendas e
                            conquistar vários clientes!
                        </p>

                        <a href="https://www.hotmart.com/pt-BR" target="_blank" rel="noopener noreferrer">Conheça</a>

                    </div>

                <img src={bgBottom} alt=""/>
                </CenterContent>

                
            </Container>
        </>
    );
}

export default LandingPage;