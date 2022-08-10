import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { logoutHelper } from '../../../Store/AuthenticationHelper';
import { Logout } from '../../../Store/Auth-Slice';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';

const UserBurgerMenu = ({ status, Close }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Auth = useSelector(state => state.Auth)

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
            <InnerContainer className='UserBurgerMenu' show={status}>
                <Header className='flex-column'>
                    <div className="browseMore flex">
                        <span>Browse</span><MenuIcon />
                    </div>
                    <div>
                        <Link to={'/yourAccount'} className="userName">
                            <span>Hello, <h3>{Auth.user.name}</h3></span><h1>YOUR ACCOUNT</h1>
                        </Link>
                    </div>
                </Header>
                <List>
                    <h3>Your Orders</h3>
                    <li><Link to={'/order-history'}>Track and Manage Your Orders</Link></li>
                    <li><Link to={'/order-history'}>Buy Again</Link></li>
                    <li><Link to={'/order-history'}>Return Centre</Link></li>
                    <li><Link to={'/order-history'}>Delivery Speeds &amp; Charges</Link></li>
                    <hr />
                    <li><Link to={'/'}>Customer Service</Link></li>
                </List>
                <List>
                    <h3>Your Account</h3>
                    <li><Link to={'#'}>Lists</Link></li>
                    <li><Link to={'#'}>Recommendations</Link></li>
                    <li><Link to={'#'}>Browsing History</Link></li>
                    <li><Link to={'#'}>Subscribe and Save</Link></li>
                    <li><Link to={'#'}>Your Prime Membership</Link></li>
                    <li><Link to={'#'}>Your Memberships and Subscriptions(YMS)</Link></li>
                    <li><Link to={'#'}>See all account</Link></li>
                </List>
                <List>
                    <h3>Settings</h3>
                    <li><Link to={'#'}><LanguageIcon id='LanguageIcon' /> English</Link></li>
                    <li onClick={logoutHandler}><Link to={'#'}>Sign Out</Link></li>
                </List>
            </InnerContainer>
        </>
    )
}

export default UserBurgerMenu

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
    right: 0;
    width: 370px;
    height: 100%;
    background-color: white;
    overflow: auto;
    z-index: 301;
    transition: 300ms ease;
    transform: ${props => (props.show ? 'translate(0)' : "translate(100%)")};

    @media (max-width:1024px) {
        width:80%;
    }
`
const Header = styled.div`
background-color: #232f3e;
padding: .6rem 36px;  
div{
    margin: 5px 0;
}
.browseMore {
    float: right;
    margin-left: auto;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    span{
        margin-top: -1px;
        font-size: .9rem;
    }
}
.userName{
    padding-bottom:.5rem;
    h1{
        font-size: 1.4rem;
        font-family: 'Amazon-light';
    }
    h3{
        font-size: 1.2rem;
        display:inline;
    }
}
    
`

const List = styled.ul`
    padding: 1rem 0;
    color:var(--darkblue);
    border-bottom: 3px solid rgba(200,200,200,1);
    h3{
        padding:0 0 .5rem 36px;
    }

    a{
        display: flex;
        align-items: center;
        color:var(--gray);
        gap: 1rem;
        font-size: .9rem;   
        padding:13px 20px 13px 36px;
        width: 100%;

        #LanguageIcon {
            font-size: 1.2rem;
            fill: var(--gray);
        }
    }

    hr{
        border: 1px solid rgba(200,200,200,.5);
        width: 90%;
        margin: 3px auto;
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
        right: 380px;
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
            right:83%;
        }
`