import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    width: 25%;
    background: var(--darkGrey);
    min-width: 200px;
    height: 60px;
    border-radius: 60px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;

    :hover{
        opacity: 0.8;
    }
`;