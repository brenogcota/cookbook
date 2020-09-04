import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    & > * {
        z-index: 2;
    }

    & > h2 {
        margin-left: 5vw;
        margin-top: 20px;
    }

    & > img:first-child {
        position: absolute;
        top: 0;
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
    grid-template-columns: auto auto auto;
    padding: 0 10vw;

    @media(max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 0 auto;
    }
`;

export const CardRecipe = styled.div`   
    padding: 5px;
    margin: 5vh 5vw;

    p {
        color: #666;
        margin: 5px 5px;
        font-weight: bold;
    }

    img {
        width: 150px;
        border-radius: 16px;
    }

    &:hover {
        opacity: 0.8;
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