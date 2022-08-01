import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TopNavCart, TopNavLogo } from '../HeaderItems';
import { useNavigate } from 'react-router-dom';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MainBurgerMenu from '../BurgerMenu/MainBurgerMenu';
import UserBurgerMenu from '../BurgerMenu/UserBurgerMenu'
import TopNavSearch from '../DesktopHeader/TopNavSearch';

const MobileTopNav = () => {
    const navigate = useNavigate()
    const Auth = useSelector(state => state.Auth)
    const [UserBurgerStatus, setUserBurgerStatus] = useState(false)
    const [MainBurgerStatus, setMainBurgerStatus] = useState(false)

    useEffect(() => {
        let TopNav = document.querySelector('.MobileTopNav').style
        let TopLogo = document.querySelector('.LogoContainer').style
        let TopSignIn = document.querySelector('.SignInContainer').style
        let TopSearchbar = document.querySelector('.SearchBarContainer').style
        window.addEventListener("scroll", () => {
            if (window.scrollY > 145) {
                TopNav.position = 'fixed'
                TopLogo.display = 'none'
                TopSignIn.display = 'none'
                TopSearchbar.display = 'block'
            } else {
                TopNav.position = 'relative'
                TopLogo.display = 'block'
                TopSignIn.display = 'flex'
                TopSearchbar.display = 'none'
            }
        });
    }, [])

    const UserMenuOpenHandler = () => {
        document.querySelector('body').style.overflowY = 'hidden'
        setUserBurgerStatus(true)
    }
    const MainMenuOpenHandler = () => {
        document.querySelector('body').style.overflowY = 'hidden'
        setMainBurgerStatus(true)
    }
    const UserMenuCloseHandler = () => {
        document.querySelector('body').style.overflowY = 'auto'
        setUserBurgerStatus(false)
    }
    const MainMenuCloseHandler = () => {
        document.querySelector('body').style.overflowY = 'auto'
        setMainBurgerStatus(false)
    }

    const SignInNavigator = () => {
        navigate('/signin/emailCheck')
    }
    return (
        <Container className='MobileTopNav flex' >
            <LeftContainer className='flex'>
                <BurgerMenuContainer onClick={MainMenuOpenHandler}>
                    <MenuOutlinedIcon />
                </BurgerMenuContainer>
                <TopNavLogoContainer className='LogoContainer'>
                    <TopNavLogo />
                </TopNavLogoContainer>
            </LeftContainer>
            <MiddleContainer className='SearchBarContainer'>
                <TopNavSearch />
            </MiddleContainer>
            <RightContainer className='flex'>
                <SignInContainer className='SignInContainer flex' onClick={Auth.isLoggedIn ? UserMenuOpenHandler : SignInNavigator}>
                    {Auth.isLoggedIn ? Auth.user.name : 'Sign In'} <KeyboardArrowRightIcon className='UserRightArrowIcon' />
                    <PersonOutlineIcon />
                </SignInContainer>
                <CartContainer>
                    <TopNavCart />
                </CartContainer>
            </RightContainer>
            <MainBurgerMenu status={MainBurgerStatus} Close={MainMenuCloseHandler} />
            <UserBurgerMenu status={UserBurgerStatus} Close={UserMenuCloseHandler} />
        </Container>
    )
}

export default MobileTopNav

const Container = styled.div`
    background-color: #232f3e;
    top:0;
    width:100%;
    padding: 0.8rem .5rem .6rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    transition: 300ms ease all;
    .MuiSvgIcon-root{
        font-size: 1.8rem;
        margin:-4px;
    }
    .nav--hover{
        border:none;
        padding: 0;
        height:auto;
    }
`
const LeftContainer = styled.div`
    align-items: flex-start;
    gap: .4rem;
`
const MiddleContainer = styled.div`
    display: none;
    width: 80%;
    margin:0 15px;
    box-sizing: border-box;
    .nav__select__container{
        display: none;
    }

    @media(max-width:1024px){
        input{
            font-size: .8rem;
        }  
     margin:0px 5px;    
    }   
`
const RightContainer = styled(LeftContainer)``
const BurgerMenuContainer = styled.div``
const TopNavLogoContainer = styled.div`
    margin-left: 3px;
    div{
        margin-top: 2px;
    }
`
const SignInContainer = styled.div`
    cursor:pointer;
    align-items: center;
    .UserRightArrowIcon{
        font-size:1rem;
        margin:-1px;
    }
`
const CartContainer = styled.div`
    div{
        margin-top: -1px;
    }
    img{
        width:2rem;
    }
    .cartItem{
        background-color:#232f3e !important;
        width: 19px !important;
        height: 19px !important;
        top: -3px !important;
        left: 9.7px !important;
        font-size: .9rem !important;
    }
    h4{
        display: none;
    }
`