import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForward from '@material-ui/icons/ArrowForwardIosOutlined';


import data from '../../services/data';

import image from '../../assets/photo-1523049673857-eb18f1d7b578.jpeg'

import { Container, Title, Content, ContentAction, Step, List, About, Ingredients } from './styles';

function Recipe({ match }) {

    const id = decodeURIComponent(match.params.recipe);

    return (
        
        <>
            
            <Container>

            {   data.map( d => {
                if(d.id == id) {
                return ( 
                <>
                <Title>
                    <Link to="/">
                        <ArrowBack />
                    </Link>

                    <h2>{d.titulo}</h2>
                </Title>

                <Content>
                    <img src={image} alt=""/>
                    <ContentAction>
                        <span>{d.tempo}</span>
                        <span>{d.custo}</span>
                        <Link to="/">Start
                            <ArrowForward />
                        </Link>
                    </ContentAction>

                    <Step>

                        <About>
                            <h3>Sobre</h3>
                            <p>{d.descricao}
                            </p>
                        </About>

                        <h3>Ingredientes</h3>
                        <Ingredients>
                            { d.ingredientes.map(i => {
                                return(
                                <div>
                                    <img src={image} alt=""/>
                                    <strong>{i.nome}</strong>
                                    <span>{i.quantidade}</span>
                                </div>
                                );
                            })}
                            
                        </Ingredients>

                        <ul>
                            <h3>Modo de preparo</h3>
                            {
                                d.preparo.map(p => {
                                    return (
                                        <List><input type="checkbox"/><li> { p } </li> </List>
                                    );
                                })
                            }
                            
                        </ul>
                    </Step>
                    
                </Content>
                </>
            ); }

            })}

            </Container>
        </>
    );
}

export default Recipe;