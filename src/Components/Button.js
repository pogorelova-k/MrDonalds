import React from "react";
import styled from 'styled-components';

const ButtonAdd = styled.button`
    display: block;
    width: 250px;
    height: 65px;
    background: #299B01;
    color: #fff;
    font-size: 21px;
    line-height: 25px;
    border: none;
    margin: 43px auto;
    /* margin-bottom: 43px; */

`;

export const Button = () => (
    <ButtonAdd>
        Добавить
    </ButtonAdd>
);