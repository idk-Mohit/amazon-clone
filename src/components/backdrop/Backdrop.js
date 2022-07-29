import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { disableBackDrop } from '../../Store/backdrop-Slice'

const Container = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0,.6);
  z-index: 100;
`

const Backdrop = () => {
  const dispatch = useDispatch()

  const BackdropHandler = () => {
    dispatch(disableBackDrop())
  }

  return createPortal(<Container onClick={BackdropHandler} />, document.getElementById('backdrop'))
}
export default Backdrop