import styled from 'styled-components';


export const Container = styled.div`

    h1 {
        font-size: 56px;
        margin-top: 40px;
        max-width: 670px;
        color: #333;
        margin-bottom: 20px;
    }

    p {
        font-size: 26px;
        max-width: 660px;
        margin-bottom: 10px;
        color: #666;
    }

    p:nth-child(3) {
        margin-bottom: 40px;
    }


    

    

    & > img {
        position: absolute;
        top: 10;
        right: 0;
        width: 300px;
    }

    @media(max-width: 800px) {
        & > img {
            max-width: 60vw;
            z-index: 1;
        }
    }
`;

export const Content = styled.div`
    height: 100vh;
    padding: 5vh 5vw;
    

    a {
        padding: 20px 30px;
        background: #FA8DBB;
        color: #fff;
        border-radius: 6px;
        font-weight: bold;
        font-size: 18px;
    }

    a:hover {
        opacity: 0.8;
        transition: all 0.2s;
    }
    
`;



export const LeftContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    height: 100vh;
    background: #FECCE4;
    padding: 5vh 5vw;
    text-align: right;

    p:nth-child(2) {
        margin-bottom: 40px;
    }

    a {
        padding: 20px 30px;
        background: #FA8DBB;
        color: #fff;
        border-radius: 6px;
        font-weight: bold;
        font-size: 18px;
    }

    a:hover {
        opacity: 0.8;
        transition: all 0.2s;
    }
`;


export const CenterContent = styled.div`
    display: flex;
    justify-content: center;

    height: 100vh;
    background: #eee;
    padding: 5vh 5vw;
    text-align: center;

    div {
        display: flex;
        flex-direction: column;
        max-width: 600px;
    }

    p:nth-child(2) {
        margin-bottom: 40px;
    }

    a {
        padding: 20px 30px;
        background: #FA8DBB;
        color: #fff;
        border-radius: 6px;
        font-weight: bold;
        font-size: 23px;
    }

    a:hover {
        opacity: 0.8;
        transition: all 0.2s;
    }

    & > img {
        position: absolute;
        left: 0;
        width: 230px;
    }
`;
