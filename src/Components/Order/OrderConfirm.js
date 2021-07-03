import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import { ButtonCheckout } from "../Button/ButtonCheckout";
import { projection } from "../Functions/secondaryFunction";
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from "../Functions/secondaryFunction";
import { Context } from "../Functions/context";

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), 
                arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choices'],
}

// функция отправки заказа
const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData)); // заказ
    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder,
    });
}

export const OrderConfirm = () => {
    const {orders: { orders, setOrders },
        auth: { authentication },
        orderConfirm: { setOpenOrderConfirm },
        firebaseDatabase} = useContext(Context);
    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order) => 
            totalPriceItems(order) + result, 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подтвердить заказ</Text>
                <Total>
                    <span>Итого</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout
                    onClick={() => {
                        sendOrder(dataBase, orders, authentication); //отправляем заказ
                        setOrders([]); // очищаем поле заказ
                        setOpenOrderConfirm(false); //закрываем окно
                    }}>Подтвердить</ButtonCheckout>
            </Modal>
        </Overlay>
    )
}