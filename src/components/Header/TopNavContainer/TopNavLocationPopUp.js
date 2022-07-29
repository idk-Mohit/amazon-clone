import React from 'react'
import styled from 'styled-components'

const TopNavLocationPopUp = ({ disable }) => {
  const pinCodeFormHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Container onClick={disable}>
      </Container>
      <PopUpCard>
        <h3>Choose your location</h3>
        <Data className="data flex-column">
          <p>Select a delivery location to see product availability and delivery options</p>
          <button className='data__signin--button'>Sign in to see your address</button>
          <LineThroughDiv>
            <span>or enter an Indian pincode</span>
          </LineThroughDiv>
          <form onSubmit={pinCodeFormHandler} className="pincode flex">
            <input type="text" name='pincode' required />
            <button type='submit'>Apply</button>
          </form>
          <LineThroughDiv>
            <span>or</span>
          </LineThroughDiv>
          <select name="deliver" id="deliverSelect">
            <option>Deliver outside India</option>
            <option value="Srilanka">Sri Lanka</option>
          </select>
        </Data>
      </PopUpCard>
    </>
  )
}

export default TopNavLocationPopUp

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 200;
  background-color: rgba(0,0,0,.6);
`
const PopUpCard = styled.div`
  position: fixed;
  top: 30%;
  left: 35%;
  z-index: 201;
  background:white;
  border: 1px solid rgba(200,200,200,.5);
  border-radius: 10px;
  box-shadow: 0px 5px 8px 0px rgba(0,0,0,.2);
  max-width: 375px;
  height: fit-content;
  transition: 300ms ease all;
  animation: showCard 300ms ease-in-out;

  @keyframes showCard {
    0% {
      opacity: 0;
      transform:translateY(-50px);
      pointer-events: none;
    }

    100%{
      opacity: 1;
      transform:translateY(0px);
      pointer-events: all;
    }
  }

  h3{
    padding: 16px 24px;
    background: #F0F2F2;
    border-bottom: 1px solid #D5D9D9;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    font-size: 1rem;
  }
`
const Data = styled.div`
  padding: 16px 24px;
  gap: 0.4rem;

  p{
    color:#767676;
    font-size: 0.75rem;
  }

  button{
    padding: 0.5rem;
    border-radius: 8px;
  }

  .data__signin--button{
    background:var(--yellow);
    border-color: #FCD200;
  }

  .pincode{
    display: flex;
    gap:.5rem;
    input{
      width: 65%;
      border: 1px solid #888C8C;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgb(15 17 17 / 15%) inset;
      outline-color: var(--blue);
      padding: 0 10px;
    }
    button{
      width: auto;
      flex-grow: 2;
      background: white;
      border-color: #D5D9D9;
      box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    }
  }

  #deliverSelect{
    border-color: #D5D9D9;
    border-radius: 8px;
    color: #0F1111;
    background: #F0F2F2;
    padding: 0.5rem;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  }
`

const LineThroughDiv = styled.div`
  text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin:5px 0;
    line-height: 0;
     &::after{
      content: "";
      width: 100%;
      background-color: transparent;
      display: block;
      height: 1px;
      border-top: 1px solid #e7e7e7;
      position: absolute;
      top: 50%;
      margin-top: -1px;
      z-index: 1;
     }
      span{
      line-height: 1;
      font-size: 12px;
      color: #767676;
      font-weight: 400;
      z-index: 2;
      position: relative;
      display: inline-block;
      background-color: #fff;
      padding: 0 8px 0 7px;
      }
`