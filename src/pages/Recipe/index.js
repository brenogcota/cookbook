import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForward from '@material-ui/icons/ArrowForwardIosOutlined';


import data from '../../services/data';
import finish from '../../assets/cookerblack.png';

import { Container, Title, Content, ContentAction, Step, About, Ingredients, Preparation, Tips, Finished } from './styles';

function Recipe({ match }) {

    const id = decodeURIComponent(match.params.recipe);

    return (

            <Container>

            {   data.map( d => {
                if(d.id == id) {
                return ( 
                <>
                <Title key={d.id}>
                    <Link to="/">
                        <ArrowBack />
                    </Link>

                    <h2>{d.titulo}</h2>
                </Title>

                <Content>
                    <img src={`http://localhost:3000/public/assets/${d.imagem}`} alt=""/>

                    <Step>

                        <About>
                            <h3>Sobre</h3>
                            <p>{d.descricao}</p>
                        </About>

                        <h3>Ingredientes</h3>
                        <Ingredients>
                            { d.ingredientes.map(i => {
                                return(
                                <div key={i.nome}>
                                    <img src={`http://localhost:3000/public/assets/${i.imagem}`} alt=""/>
                                    <strong>{i.nome}</strong>
                                    <span>{i.quantidade}</span>
                                </div>
                                );
                            })}
                            
                        </Ingredients>

                        
                        <Preparation>
                            <h3>Modo de preparo</h3>
                            {
                                d.preparo.map(p => {
                                    return (
                                        <div>
                                            <input type="checkbox"/>
                                            <li key={p}> { p } </li>
                                        </div>
                                    );
                                })
                            }
                            
                        </Preparation>

                        <Tips>
                            <h3>Dicas</h3>
                            {
                                d.dicas.map(dica => {
                                    return (
                                        <div>
                                            <li key={dica}> { dica } </li>
                                        </div>
                                    );
                                })
                            }
                            
                        </Tips>

                    <Finished>
                        <h2>Bom Apetite!</h2>
                        <img src={finish} alt=""/>
                    </Finished>
                    
                    </Step>

                    
                </Content>
                </>
            ); }

            })}

            </Container>
    );
}

export default Recipe;