import React from "react";
import styled from 'styled-components';
import trashImg from "../image/trash.svg";

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    `;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 20px;
    min-width: 65px;
    text-align: right;
`;

export const OrderListItem = () => (
    <OrderItemStyled>
        <ItemName>JS Burger</ItemName>
        <span>1</span>
        <ItemPrice>250₽</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
);