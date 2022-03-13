import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 180px;
    height: 300px;
    border: 1px solid white;
    margin: 10px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: transform ease-in 0.4s;
    }
`;

export const CardImg = styled.div<{ src?: string}>`
    background-image: url(${({ src }) => src});
    background-size: cover;
    height: 270px;
`;

export const CardTitle = styled.div`
    background-color: lightslategray;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    color: #fff;
`;