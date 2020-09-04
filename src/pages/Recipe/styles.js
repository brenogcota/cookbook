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

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 10px;
    }

    span {
        font-size: 14px;
    }
`;

export const Step = styled.div`
    background: #fff;
    border-radius: 26px 26px 0 0;
    padding: 15px;

    li {
        list-style: decimal;
        color: #444;
        font-weight: 600;
    }
`;

export const List = styled.div`
    padding: 30px 25px;
    border-bottom: 0.1px solid #ddd;
    display: flex;
    align-items: center;

    input {
        margin-right: 30px;
        padding: 10px;
    }
`;

export const Finished = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    h2 {
        color: #666;
    }
`;