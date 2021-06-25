import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    width: 250px;
    height: 65px;
    background-color: #299B01;
    color: #fff;
    font-size: 21px;
    line-height: 25px;
    border-color: transparent;
    margin: 0 auto;
    font-family: inherit;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        color: #299B01;
        background-color: #fff;
        border-color: #299B01;
    }

    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border-color: #aaa;
    }
`;