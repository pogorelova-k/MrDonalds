import React, { useRef } from "react";
import styled from 'styled-components';
import trashImg from "../../image/trash.svg";
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from "../Functions/secondaryFunction";

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
    flex-wrap: wrap;
    margin: 15px 0;
    cursor: pointer;
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

const ToppingsChecked = styled.div`
    font-size: 14px;
    color: #9a9a9a;
    width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
    const toppings = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    const refDeleteButton = useRef(null);

    return (
        <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}/>
            {order.toppings && <ToppingsChecked>Дополнительно: {toppings}</ToppingsChecked>}
        </OrderItemStyled>
)};