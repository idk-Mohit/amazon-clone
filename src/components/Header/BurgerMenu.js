import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BurgerMenu = ({ status, Close }) => {
    const Auth = useSelector(state => state.Auth)
    return (
        <>
            <Container show={status} onClick={Close}>
            </Container>
            <InnerContainer show={status}>
                <Header className='flex'><Link to='/signin/emailCheck' className='flex'><AccountCircleIcon fontSize='large' /><h1>Hello, Sign In</h1></Link></Header>
                <List>
                    <h3>Trending</h3>
                    <Link to={'/productList/Best-Sellers'}><li>Best Sellers</li></Link>
                    <Link to={'/productList/New-Releases'}><li>New Releases</li></Link>
                    <Link to={'/productList/'}><li>Movers and Shakers</li></Link>
                </List>
                <List>
                    <h3>Digital Content And Devices</h3>
                    <Link to={'/productList/Echo'}><li>Echo &amp; Alexa <KeyboardArrowRightIcon /></li></Link>
                    <Link to={'/productList/Fire-Tv'}><li>Fire TV <KeyboardArrowRightIcon /></li></Link>
                    <Link to={'/productList/Kindle e-reader and ebooks'}><li>Kindle E-Readers &amp; eBooks <KeyboardArrowRightIcon /></li></Link>
                    <Link to={'/productList/'}><li>Audible AudioBooks <KeyboardArrowRightIcon /></li></Link>
                    <Link to={'/productList/'}><li>Amazon Prime Video <KeyboardArrowRightIcon /></li></Link>
                    <Link to={'/productList/'}><li>Amazon Prime Music <KeyboardArrowRightIcon /></li></Link>
                </List>
                <List>
                    <h3>Shop By Department</h3>
                    <Link to={'#'}><li>Mobiles, Computers <KeyboardArrowRightIcon /></li></Link>
                    <Link to={'#'}><li>TV, Appliances, Electronics <KeyboardArrowRightIcon /></li></Link>
                    <Link to={'#'}><li>Men's Fashion <KeyboardArrowRightIcon /></li></Link>
                    <Link to={'#'}><li>Women's Fashion <KeyboardArrowRightIcon /></li></Link>
                    <Link to={'#'}><li className='ExpandMore'>See All <ExpandMoreIcon /></li></Link>
                </List>
                <List>
                    <h3>Programs &amp; Features</h3>
                    <Link to={'#'}><li>Gift Cards &amp; Mobile Recharges</li></Link>
                    <Link to={'#'}><li>Flight Tickets</li></Link>
                    <Link to={'#'}><li>#FoundItOnAmazon</li></Link>
                    <Link to={'#'}><li>Clearance store</li></Link>
                </List>
                <List>
                    <h3>Help &amp; Settings</h3>
                    <Link to={'/yourAccount'}><li>Your Account</li></Link>
                    <Link to={'#'}><li>Customer Service</li></Link>
                    <Link to={Auth.isLoggedIn ? '/logout' : '/signin/emailCheck'}><li>{Auth.isLoggedIn ? 'Sign Out' : 'Sign In'}</li></Link>
                </List>
            </InnerContainer>
        </>
    )
}

export default BurgerMenu

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
    position: absolute;
    top: 0;
    left: 0;
    width: 370px;
    height: 100vh;
    background-color: white;
    overflow: auto;
    z-index: 301;
    transition: 300ms ease;
    /* transform: translateX(-100%); */
    transform: ${props => (props.show ? 'translateX(0)' : "translateX(-100%)")};
    /* animation: show 500ms ease; */
    @keyframes show {
        0%{
            transform: translateX(-100%);
        }

        100%{
            transform: translateX(0);
        }
    }
`
const Header = styled.div`
background-color: #232f3e;
padding: .6rem 36px;
height: 60px;
align-items: center;    
a{
    gap: .5rem;
    align-items: center;    
}

h1{
    font-size: 1.1rem;
    letter-spacing: .5px;
}
`

const List = styled.ul`
    padding: 1rem 0;
    color:var(--darkblue);
    border-bottom: 1px solid rgba(200,200,200,1);
    h3{
        padding:0 0 .5rem 36px;
    }

    a{
        color:var(--gray);
        font-size: .9rem;
        font-family:'Amazon-light';
    }
    
    li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:13px 20px 13px 36px;

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