import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const MobileBottomNav = () => {
  const LocationHandler = () =>{
    alert('This Funtionality is currently in Progression')
  }
  return (
    <Container>
      <List className='flex'>
        <li><Link to={'#'}><span>Shop By</span><div>Category</div></Link></li>
        <li><Link to={'#'}>Wish List</Link></li>
        <li><Link to={'#'}>Deals</Link></li>
        <li><Link to={'#'}>Sell</Link></li>
      </List>
      <Location className='flex' onClick={LocationHandler}>
        <LocationOnOutlinedIcon />
        <p>Select a location to see product availability</p>
      </Location>
    </Container>
  )
}

export default MobileBottomNav

const Container = styled.div`
  width: 100%;
`
const List = styled.ul`
  padding:.4rem .8rem .6rem;
  gap: .8rem;
  align-items: center;
  li{
    font-size: .9rem;
    
    span{
      font-size: .7rem;
    }
    div{
      margin-top: -2px;
    }
  }
`
const Location = styled.button`
  align-items: center;
  width: 100%;
  height:45px;
  background: #37475A;
  color:white;
  border: none;
  font-family: "Amazon-light";
  font-weight: 500;
  padding: 0 .4rem;
  &:hover{
    background: #37475A;
  }
`
