import React from 'react'
import styled from 'styled-components'

const ImageCard = ({ title, subtitle, image }) => {
  return (
    <Container className='flex'>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
      <DataContainer className='flex-column'>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </DataContainer>
    </Container>
  )
}

export default ImageCard

const Container = styled.div`
  border: 1px solid rgba(200,200,200,1);
  border-radius: 8px;
  padding: 1rem;
  height: 100px;
  cursor:pointer;
  &:hover{
    background-color: #eee;
  }
`
const ImageContainer = styled.div`
  width: 5rem;
  height: 5rem; 
  margin-right: 0.5rem;
  padding: .5rem;
  img {
    width:100%;
}
`
const DataContainer = styled.div`

  h3{
    font-family:'Amazon-light';
    font-weight: 600;
    font-size:1.1rem;
  }
  p{
    font-size: .8rem;
    letter-spacing: 0px;
    color:var(--gray);
    margin-top: .8rem;
  }

`