import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from "react-redux/es/exports";
import { returnorderIcon } from '../../../assets/Images';

const TopNavReturnOrder = () => {
    const Auth = useSelector(state => state.Auth)
    return (
        <Container className="nav--hover flex">
            <Link to={Auth.isLoggedIn ? '/order-history' : '/signin/emailCheck'}>
                <div className="flex-column HeaderText">
                    <span className="top__nav__hover__div-first">Returns</span>
                    <span className="top__nav__hover__div-second">&amp; Orders</span>
                </div>
                <div className="HeaderIcon"><img src={returnorderIcon} alt="Icon" /></div>
            </Link>
        </Container>
    )
}

export default TopNavReturnOrder

const Container = styled.div`
.HeaderIcon{
    display: none;

    img{
        width:2.2rem;
    }
}

@media(max-width:940px){
    .HeaderIcon{
        display:flex;
        align-items: center;
    }
    .HeaderText{
        display: none;
    }
}

`