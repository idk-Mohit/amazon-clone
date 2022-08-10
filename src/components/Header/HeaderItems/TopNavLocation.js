import React, { useState } from 'react'
import styled from 'styled-components'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useSelector } from 'react-redux';
import TopNavLocationPopUp from './TopNavLocationPopUp';

const TopNavLocation = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    const Auth = useSelector(state => state.Auth)
    const enableBackdropHandler = () => {
        setShowPopUp(true)
    }
    const disableBackdropHandler = () => {
        setShowPopUp(false)
    }
    return (
        <>
            <Container className="nav--hover flex" onClick={enableBackdropHandler}>
                <LocationOnOutlinedIcon className='LocationIcon' />
                <div className="flex-column HeaderText">
                    <span className='top__nav__hover__div-first'>{Auth.isLoggedIn ? `Deliver to ${Auth.user.name}` : 'Hello'}</span>
                    <span className="top__nav__hover__div-second">Select Your Address</span>
                </div>
            </Container>
            {showPopUp && <TopNavLocationPopUp disable={disableBackdropHandler} />}
        </>
    )
}

export default TopNavLocation

const Container = styled.div`
align-items: center;
z-index: 201;

@media (max-width:940px) {
    .HeaderText{
        display: none;
    }
    .LocationIcon{
        font-size: 1.8rem;
        margin: -3px;
    }
}
`