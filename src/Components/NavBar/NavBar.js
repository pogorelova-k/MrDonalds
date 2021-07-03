import React, { useContext } from "react";
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import userImg from '../../image/user.svg';
import { Context } from "../Functions/context";

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

const User = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

const LogOut = styled.span`
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin-right: 30px;
`;

const Figure = styled.figure`
    margin: 0 30px;
`;

export const NavBar = () => {
    const {auth: { authentication, logIn, logOut }} = useContext(Context);

    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="logo"/>
                <H1>MrDonald's</H1>
            </Logo>
            {authentication ? 
                <User>
                    <Figure>
                        <UserImg src={userImg} alt={authentication.displayName}/>
                        <figcaption>{authentication.displayName}</figcaption>
                    </Figure>
                    <LogOut title="Выйти" onClick={logOut}>x</LogOut>
                </User> : 
                <Login onClick={logIn}>
                    <Figure>
                        <UserImg src={userImg} alt="user image"/>
                        <figcaption>войти</figcaption>
                    </Figure>
                </Login>}
        </NavBarStyled>
    )
}