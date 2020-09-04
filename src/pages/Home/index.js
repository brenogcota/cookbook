import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';

import bgTop from '../../assets/bgtop.png';
import bgBottom from '../../assets/bgbottom.png';

import { Container, SearchBox, Recipes,RecipesGrid, CardRecipe, ContentAction } from './styles';

import data from '../../services/data';

function Home() {


    return (
        <>
            <Header />
            <Container>
                <img src={bgTop} alt=""/>
                

                <SearchBox>
                    <input type="text" placeholder="Buscar"/>
                </SearchBox>

                
                <h2>Receitas</h2>   

                <RecipesGrid>

                    { data.map( d => {
                    return (
                        <CardRecipe key={d.id}>
                            <Link to={`/receita/${encodeURIComponent(d.id)}`}>
                                <p>{d.titulo}</p>
                                <img src={`http://localhost:3000/public/assets/${d.imagem}`} alt=""></img>
                                <ContentAction>
                                    <span>{d.tempo}</span>
                                    <span>{d.custo}</span>
                                </ContentAction>
                            </Link>
                        </CardRecipe>
                        );
                    })}   

                </RecipesGrid>

                <h2>Receitas</h2>

                <Recipes>

                    { data.map( d => {
                    return (
                    <CardRecipe key={d.id}>
                        <Link to={`/receita/${encodeURIComponent(d.id)}`}>
                            <p>{d.titulo}</p>
                            <img src={`http://localhost:3000/public/assets/${d.imagem}`} alt=""></img>
                            <ContentAction>
                                <span>{d.tempo}</span>
                                <span>{d.custo}</span>
                            </ContentAction>
                        </Link>
                    </CardRecipe>
                    );
                    })}   

                </Recipes>


                <h2>Novidades</h2>

                <Recipes>  

                    { data.map( d => {
                    return (
                        <CardRecipe key={d.id}>
                            <Link to={`/receita/${encodeURIComponent(d.id)}`}>
                                <p>{d.titulo}</p>
                                <img src={`http://localhost:3000/public/assets/${d.imagem}`} alt=""></img>
                                <ContentAction>
                                    <span>{d.tempo}</span>
                                    <span>{d.custo}</span>
                                </ContentAction>
                            </Link>
                        </CardRecipe>
                        );
                    })}                          

                </Recipes>

            <img src={bgBottom} alt=""/>
            </Container>

            <Footer />
        
        </> 
    );
}

export default Home;