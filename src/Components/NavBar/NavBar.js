import React from "react";
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import userImg from '../../image/user.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const UserImg = styled.img`
    width: 31px;
    margin-bottom: 5px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <Login>
            <UserImg src={userImg} alt="user image"/>
            войти
        </Login>
    </NavBarStyled>
)