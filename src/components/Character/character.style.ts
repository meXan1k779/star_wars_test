import styled from 'styled-components';

export const CharWrapper = styled.div`
    width: 400px;
    margin: 0 auto;
    height: 600px;
    background-color: #fcfcfc;
`;

export const Text = styled.span`
    font-size: 20px;
    display: block;
    padding: 4px;
`;

export const CharImg = styled.div<{ src?: string}>`
    background-image: url(${({ src }) => src});
    background-size: cover;
    height: 440px;
`;