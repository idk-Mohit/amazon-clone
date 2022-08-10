import React from 'react'
import styled from 'styled-components'

const MainPageLoader = () => {
    return (
        <Container>
            <div className="loader"></div>
        </Container>
    )
}

export default MainPageLoader

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  display: grid;
  place-items: center;

  @media (max-width: 1024px) {
    height: calc(100vh - 250px);
  }
`