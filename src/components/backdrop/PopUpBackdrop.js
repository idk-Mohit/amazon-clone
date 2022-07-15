import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { disablepopupBackdrop } from '../../Store/backdrop-Slice'

const Container = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0,.5);
  z-index: 200;
`

const PopUpBackDrop = () => {
  const dispatch = useDispatch()

  const BackdropHandler = () => {
    dispatch(disablepopupBackdrop())
  }

  return createPortal(<Container onClick={BackdropHandler} />, document.getElementById('popUpBackDrop'))
}

export default PopUpBackDrop