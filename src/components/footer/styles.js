import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    width: 100%;
    background: #f5f5f5;

    & > img {
        width: 300px;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    
    margin: 30px 0;
    color: #444;
    
    text-align: center;

    a {
        padding: 20px 30px;
        background: #FA8DBB;
        color: #fff;
        border-radius: 6px;
        margin: 30px 0;
        font-weight: bold;
        font-size: 18px;
    }

    a:hover {
        opacity: 0.8;
        transition: all 0.2s;
    }
`;