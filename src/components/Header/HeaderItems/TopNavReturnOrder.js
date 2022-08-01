import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from "react-redux/es/exports";

const TopNavReturnOrder = () => {
    const Auth = useSelector(state => state.Auth)
    return (
        <Container className="nav--hover flex">
            <Link to={Auth.isLoggedIn ? '/order-history' : '/signin/emailCheck'} className="flex-column">
                <span className="top__nav__hover__div-first">Returns</span>
                <span className="top__nav__hover__div-second">&amp; Orders</span></Link>
        </Container>
    )
}

export default TopNavReturnOrder

const Container = styled.div``