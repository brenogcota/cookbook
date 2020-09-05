import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0 200px;
    background: #e3e3e3;


    @media (max-width: 800px) {
       padding: 0 6px;
    }
    
`;

export const Title = styled.div`
    display: flex;
    margin-top: 5vh;


    & > a {
        margin-right: 5vw;
    }
`;

export const Content = styled.div`
    background: #e3e3e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5vh;

    img {
        max-width: auto;
        max-height: 400px;
    }

`;

export const ContentAction = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 50px;
    margin: 0 5vw;
    

    span, a {
        background: #eee;
        border-radius: 16px;
        padding: 8px 12px;
    }

    a {
        display: flex;
        align-items: center;
        background: #0080ff;
        color: #fff;

    }
    
`;

export const About = styled.div`

    margin: 20px 0;

    p {
        margin: 5px;
        color: #444;
    }

`;

export const Ingredients = styled.div`
    display: flex;
    overflow-x: auto;
    margin-bottom: 20px;

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

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        text-align: center;
        max-width: 200px;
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 10px;
    }

    strong {
        margin-top: 8px;
    }

    span {
        font-size: 14px;
        margin: 5px;
    }
`;

export const Step = styled.div`
    background: #fff;
    border-radius: 26px 26px 0 0;
    padding: 15px;
    margin-top: 7vh;

    li {
        list-style: decimal;
        color: #444;
        font-weight: 600;
    }
`;

export const Preparation = styled.ul`

    div {
        padding: 30px 25px;
        border-bottom: 0.1px solid #ddd;
        display: flex;
        align-items: baseline;
    }

    input {
        margin-right: 30px;
        padding: 10px;
    }

`;

export const Tips = styled.ul`

    padding: 30px 0;

    div {
        padding: 5px 40px;
        display: flex;
        align-items: center;
    }
    
    li {
        padding: 10px;
        list-style: circle;
        color: #666;
    }
`;

export const Finished = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    img {
        max-width: 70vw;
    }

    h2 {
        color: #666;
    }

`;