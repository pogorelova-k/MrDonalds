import React from "react";
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from "./ListItem";
import bannerImg from '../image/banner.png';

const MenuStyled = styled.menu`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const Banner = styled.img`
    width: 100%;
    background-position: center;
    background-size: cover;
`;

export const Menu = () => (
    <MenuStyled>
        <Banner src={bannerImg} alt="баннер"/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}/>
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other}/>
        </SectionMenu>
    </MenuStyled>
);