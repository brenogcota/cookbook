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
            display: none;
        }

        h1 {
            font-size: 2em;
        }

        p {
            font-size: 1em;
        }
    }
`;

export const Content = styled.div`
    height: 100vh;
    padding: 5vh 5vw;
    

    a {
        padding: 2vh 6vw;
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

    height: 100%;
    min-height: 100vh;
    background: #FECCE4;
    padding: 5vh 5vw;
    text-align: center;


    p:nth-child(2) {
        margin-bottom: 40px;
    }

    a {
        padding: 2vh 6vw;
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

    @media (max-width: 800px) {

        & {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        img {
            max-width: 300px;
        }
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
        padding: 3vh 6vw;
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

    @media(max-width: 800px) {
        & > img {
            display: none;
        }
    }
`;

export const MailBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 40px;

    h2 {
        color: #666;
    }

    span {
        margin: 10px 0;
        font-size: 16px;
        color: #666;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        input {
            border: none;
            outline: none;
            padding: 2vh 2vw;
            background: #f1f1f1;
            margin: 7px 0;
            border-radius: 6px;
        }

        button {
            padding: 2vh 2vw;
            margin-top: 20px;
            background: #FA8DBB;
            color: #fff;
            border-radius: 6px;
            font-weight: bold;
            font-size: 18px;
            border: none;
            outline: none;
        }

        button:hover {
            opacity: 0.8;
            transition: all 0.2s;
        }
    }

`;
