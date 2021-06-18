import React from "react";
import styled from 'styled-components';
import { ButtonCheckout } from '../Button/ButtonCheckout';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({ img }) => img});
    background-position: center;
    background-size: cover;

`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 30px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    line-height: 53px;
    font-family: 'Pacifico', cursive;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
    const order = {
        ...openItem
    };

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    // добавления заказа
    const addToOrder = () => {
        setOrders([...orders, order])
        setOpenItem(null);
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</div>
                    </HeaderContent>
                    <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
                </Content>
                
            </Modal>
        </Overlay>
    )
        
};
