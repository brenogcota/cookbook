import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    & > * {
        z-index: 2;
    }

    & > h1 {
        align-self: center;
        margin: 40px 0;
        color: #E9967A;
        font-size: 56px;
    }

    & > img:first-child {
        position: absolute;
        top: 10;
        right: 0;
        width: 300px;
        
        z-index: 1;
    }

    & > img:last-child {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 300px;
        z-index: 1;
    }

    @media(max-width: 800px) {
        & > img {
            max-width: 60vw;
            z-index: 1;
        }
    }
`;

export const SearchBox = styled.div`
    display: flex;
    margin: 20px 5vw;

    input {
        border: none;
        border-radius: 6px;
        padding: 10px;
        background: #f2f2f2;
        width: 300px;
    }

    @media (max-width: 600px) {
       justify-content: center;

       input {
           width: 85vw;
       }
    }
`;

export const Recipes = styled.div`
    display: flex;
    overflow-x: auto;
    
    &::-webkit-scrollbar {
        width: 5px;
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }


    &::-webkit-scrollbar-thumb {
        background: #888;
    }
`;

export const RecipesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 10vw;

    @media(max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 0 auto;
    }
`;

export const CardRecipe = styled.div`   
    padding: 20px;
    margin: 5vh 5vw;
    background: ${props => props.background };

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 23px;

    h2 {
        color: #666;
        margin: 15px 5px;
        font-weight: bold;
        max-width: 300px;
    }

    img {
        width: 200px;
        border-radius: 16px;
        margin-top: auto;
    }

    &:hover {
        opacity: 0.9;
        transition: all 0.3s;
    }
`;

export const ContentAction = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: 40px;

    span, a {
        background: #eee;
        border-radius: 6px;
        padding: 2px 5px;
        color: #666;
    }

    a {
        display: flex;
        align-items: center;
        background: #0080ff;
        color: #fff;

    }
    
`;