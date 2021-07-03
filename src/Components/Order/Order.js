import React, { useContext } from "react";
import styled from 'styled-components';
import { ButtonCheckout } from "../Button/ButtonCheckout";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from "../Functions/secondaryFunction";
import { Context } from "../Functions/context";

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background-color: #fff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
    max-width: 380px;
`;

export const OrderTitle = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

export const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`; 

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;



export const Order = () => {

    const {orders: { orders, setOrders },
        openItem: { setOpenItem }, 
        auth: { authentication, logIn },
        orderConfirm: { setOpenOrderConfirm }} = useContext(Context);
    const total = orders.reduce((result, order) => 
        totalPriceItems(order) + result, 0)

    // общее количество товаров в заказе
    const totalCounter = orders.reduce((result, order) => 
        order.count + result, 0)

    // Удаление заказа
    const deleteItem = (index) => {
        const newOrders = orders.filter((item, i) => 
            index !== i);
        setOrders(newOrders);
    };

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ? 
                <OrderList>
                    {orders.map((order, index) => <OrderListItem 
                        key={index}
                        order={order}
                        index={index}
                        deleteItem={deleteItem}
                        setOpenItem={setOpenItem}/>)}
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>ИТОГО</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout onClick={() => authentication ? setOpenOrderConfirm(true) : logIn()}>Оформить</ButtonCheckout>
        </OrderStyled>
    )
};