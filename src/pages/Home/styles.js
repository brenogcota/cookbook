import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    & > h2 {
        margin-left: 5vw;
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
`;
export const CardRecipe = styled.div`   
    padding: 5px;
    margin: 5vh 5vw;

    p {
        color: #333;
        margin: 5px 2vw;
    }

    img {
        width: 150px;
        border-radius: 16px;
    }

    &:hover {

        padding: 6px;

        img {
            width: 160px;
        }
    }
`;