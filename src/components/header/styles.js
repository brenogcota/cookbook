import styled from 'styled-components';

export const PageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5vw;
    height: 8vh;

    & > a {
        padding: 10px 20px;
        border-radius: 7px;
        background: #DB664A;
        color: #fff;

        &:hover {
            opacity: 0.9;
            transition: 0.4s all;
        }
    }
`;