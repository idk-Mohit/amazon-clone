import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Amazon_Logo } from '../../../assets/Images'

const TopNavLogo = () => {
    return (
        <Container className='nav--hover'>
            <Link to={'/'}>
                <img src={Amazon_Logo} alt='Nav_Logo' />
                <span>.in</span>
            </Link>
        </Container>
    )
}

export default TopNavLogo

const Container = styled.div`
    padding: 0.7rem 0.4rem 0.2rem;
    img {
        width:6rem;
    }
  `