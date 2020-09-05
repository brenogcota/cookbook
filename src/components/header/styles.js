import styled from 'styled-components';

export const PageHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 5vw;
    height: 10vh;

    & > h2 {
        color: #FA8DBB;
    }

    & > a {
        color: #FA8DBB;
    }

    & > a:last-child {
        padding: 2vh 2vw;
        border-radius: 7px;
        background: #FA8DBB;
        color: #fff;
        font-weight: bold;

        &:hover {
            opacity: 0.9;
            transition: 0.4s all;
        }
    }
`;
