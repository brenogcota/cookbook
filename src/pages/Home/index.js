import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/header';
import image from '../../assets/photo-1523049673857-eb18f1d7b578.jpeg'
import image2 from '../../assets/photo-1571575173700-afb9492e6a50.jpeg'
import image3 from '../../assets/photo-1578508053827-fe06d4dc2457.jpeg'

import { Container, SearchBox, Recipes, CardRecipe } from './styles';

import data from '../../services/data';

function Home() {
    return (
        <>
            <Header />
            <Container>
                <SearchBox>
                    <input type="text" placeholder="Buscar"/>
                </SearchBox>
                <h2>Receitas</h2>

                <Recipes>

                    { data.map( d => {
                    return (
                    <CardRecipe>
                        <Link to={`/receita/${encodeURIComponent(d.id)}`}>
                            <p>{d.titulo}</p>
                            <img src={image} alt=""></img>
                        </Link>
                    </CardRecipe>
                    );
                    })}   

                </Recipes>


                <h2>Novidades</h2>

                <Recipes>

                    <CardRecipe>
                        <Link to={`/receita/${encodeURIComponent(data.id)}`}>
                            <p>{data.titulo}</p>
                            <img src={image2} alt=""></img>
                        </Link>
                    </CardRecipe>           

                </Recipes>
            </Container>  
        </> 
    );
}

export default Home;