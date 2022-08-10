import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { logoutHelper } from '../../../Store/AuthenticationHelper';
import { Logout } from '../../../Store/Auth-Slice';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const MainBurgerMenu = ({ status, Close }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Auth = useSelector(state => state.Auth)

    const NavigateHandler = () => {
        if (Auth.isLoggedIn)
            navigate('/youraccount')
        else
            navigate('/signin/emailCheck', { replace: true })
    }

    const logoutHandler = () => {
        logoutHelper()
        dispatch(Logout())
        navigate('/signin/emailCheck', { replace: true })
    }
    return (
        <>
            {status && <CloseButton className='MenuCloseButton' onClick={Close}><CloseIcon fontSize='large' /></CloseButton>}
            <Container show={status} onClick={Close}>
            </Container>
            <InnerContainer show={status}>
                <Header className='flex-column'>
                    <MobileView>
                        <div className='UserAccount flex' onClick={NavigateHandler}><span>{Auth.isLoggedIn ? `${Auth.user.name}'s Account` : 'Sign In'}</span><PersonOutlineIcon />
                        </div>
                        <div className='heading'>
                            <h3>Browse</h3>
                            <h1>Amazon</h1>
                        </div>
                    </MobileView>
                    <DesktopView>
                        <div className="flex" onClick={NavigateHandler}>
                            <AccountCircleIcon fontSize='large' /><h1>Hello, {Auth.isLoggedIn ? Auth.user.name : 'Sign In'}</h1>
                        </div>
                    </DesktopView>
                </Header>
                <MobileView>
                    <List style={{ padding: 0 }}>
                        <h3 style={{ padding: 0 }}><Link to='/' style={{ fontSize: '1.2rem', color: 'var(--darkblue)' }}>Amazon Home <HomeRoundedIcon /></Link></h3>
                    </List>
                </MobileView>
                <List>
                    <h3>Trending</h3>
                    <li><Link to={'/productList/Best-Sellers'}>Best Sellers</Link></li>
                    <li><Link to={'/productList/New-Releases'}>New Releases</Link></li>
                    <li><Link to={'/productList/'}>Movers and Shakers</Link></li>
                </List>
                <List>
                    <h3>Digital Content And Devices</h3>
                    <li><Link to={'/productList/Echo'}>Echo &amp; Alexa <KeyboardArrowRightIcon /></Link></li>
                    <li><Link to={'/productList/Fire-Tv'}>Fire TV <KeyboardArrowRightIcon /></Link></li>
                    <li><Link to={'/productList/Kindle-e-reader-and-ebooks'}>Kindle E-Readers &amp; eBooks <KeyboardArrowRightIcon /></Link></li>
                    <li><Link to={'/productList/Audio-Books'}>Audible AudioBooks <KeyboardArrowRightIcon /></Link></li>
                    <li><Link to={'/productList/Prime-Vedio'}>Amazon Prime Video <KeyboardArrowRightIcon /></Link></li>
                    <li><Link to={'/productList/Prime-Music'}>Amazon Prime Music <KeyboardArrowRightIcon /></Link></li>
                </List>
                <List>
                    <h3>Shop By Department</h3>
                    <li><Link to={'/productList/mobiles-computers'}>Mobiles, Computers <KeyboardArrowRightIcon /></Link></li>
                    <li><Link to={'/productList/Electronics'}>TV, Appliances, Electronics <KeyboardArrowRightIcon /></Link></li>
                    <li><Link to={'/productList/Men-fashion'}>Men's Fashion <KeyboardArrowRightIcon /></Link></li>
                    <li><Link to={'/productList/Women-fashion'}>Women's Fashion <KeyboardArrowRightIcon /></Link></li>
                    <li><Link to={'#'} className='ExpandMore'>See All <ExpandMoreIcon /></Link></li>
                </List>
                <List>
                    <h3>Programs &amp; Features</h3>
                    <li><Link to={'#'}>Gift Cards &amp; Mobile Recharges</Link></li>
                    <li><Link to={'#'}>Flight Tickets</Link></li>
                    <li><Link to={'#'}>#FoundItOnAmazon</Link></li>
                    <li><Link to={'#'}>Clearance store</Link></li>
                </List>
                <List>
                    <h3>Help &amp; Settings</h3>
                    <Link to={'/yourAccount'}><li>Your Account</li></Link>
                    <li><Link to={'#'}>Customer Service</Link></li>
                    {Auth.isLoggedIn ?
                        <li onClick={logoutHandler}><Link to={'#'}>Sign Out</Link></li>
                        :
                        <li><Link to={'/signin/emailCheck'}>Sign In</Link></li>
                    }
                </List>
            </InnerContainer>
        </>
    )
}

export default MainBurgerMenu

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.8);
    display: ${props => (props.show ? 'block' : 'none')};
    z-index: 300;
`

const InnerContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 370px;
    height: 100%;
    background-color: white;
    overflow: auto;
    z-index: 301;
    transition: 300ms ease;
    transform: ${props => (props.show ? 'translate(0)' : "translate(-100%)")};

    @media (max-width:1024px) {
        width:80%;
    }
`
const Header = styled.div`
background-color: #232f3e;
padding: .6rem 36px; 
    a{
        gap: .5rem;
        align-items: center;    
    }

    h1{
        font-size: 1.1rem;
        letter-spacing: .5px;
    }
`
const MobileView = styled.div`
    display: none;
    div{
        margin: 10px 0;
    }
    .UserAccount {
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
        gap: 5px;
    }

    .heading{
        h1,h3{
            font-family: 'Amazon-light';
            letter-spacing: 1px;
            font-weight: 500;
        }
        h3{
            font-size: 1rem;
        }
        h1{
            font-size: 1.5rem;
            margin-top:-3px;
        }
    }

    @media(max-width:1024px){
        display: block;
    }
`
const DesktopView = styled.div`

    div{
        align-items: center;
        gap: 5px;
    }

    @media(max-width:1024px){
        display: none;
    }
`
const List = styled.ul`
    padding: 1rem 0;
    color:var(--darkblue);
    border-bottom: 5px solid rgba(200,200,200,1);
    h3{
        padding:0 0 .5rem 36px;
    }

    a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color:var(--gray);
        font-size: .9rem;   
        padding:13px 20px 13px 36px;
        width: 100%;
    }
    
    li{
            .MuiSvgIcon-root{
            fill:rgba(160,160,160,1);
            font-size: 1.6rem;
            margin: -5px;
        }

        &:hover{
            background-color: rgba(200,200,200,.5);
            .MuiSvgIcon-root{
                fill:rgba(0,0,0,0.8);
            }
        }
    }
    .ExpandMore{
        justify-content: flex-start;
        gap:.8rem;
    }
`
const CloseButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 380px;
        top:.7rem;
        width: 3rem;
        height: 3rem;
        z-index: 301;
        border-radius: 50px;
        background-color: transparent;
        cursor: pointer;
        .MuiSvgIcon-root{
            fill:white;
        }

        &:hover{
          background-color: white;
          .MuiSvgIcon-root{
            fill:black;
        }
        }

        @media (max-width:1024px) {
            left:83%;
        }
`
