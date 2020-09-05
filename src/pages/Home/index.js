import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';

import bgTop from '../../assets/bgtop.png';
import bgBottom from '../../assets/bgbottom.png';

import { Container, SearchBox, Recipes, RecipesGrid, CardRecipe, ContentAction } from './styles';

import data from '../../services/data';

function Home() {


    return (
        <>
            <Header />
            <Container>
                <img src={bgTop} alt=""/>
                
                <h1>Receitas</h1>   

                <RecipesGrid>

                    { data.map( d => {
                    return (
                        <CardRecipe key={d.id} background={d.background}>
                            <Link to={`/receita/${encodeURIComponent(d.id)}`}>
                                <h2>{d.titulo}</h2>
                                <img src={`http://localhost:3000/public/assets/${d.imagem}`} alt=""></img>
                            </Link>
                        </CardRecipe>
                        );
                    })}   

                </RecipesGrid>

            <img src={bgBottom} alt=""/>
            </Container>

            <Footer />
        
        </> 
    );
}

export default Home;