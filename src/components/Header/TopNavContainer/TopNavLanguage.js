import React from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FlagImage } from '../../../assets/Images';
import { useDispatch } from 'react-redux';
import { disableBackDrop, enableBackDrop } from '../../../Store/backdrop-Slice';

const TopNavLanguage = (props) => {
  const dispatch = useDispatch()
  const backdropEnableHandler = () => {
    dispatch(enableBackDrop())
  }

  const backdropDisableHandler = () => {
    dispatch(disableBackDrop())
  }
  return (
    <Container className='flex nav--hover' onMouseEnter={backdropEnableHandler} onMouseLeave={backdropDisableHandler}>
      <div className="imageContainer flex">
        <img src={FlagImage} alt="" /> <span><ArrowDropDownIcon /></span>
      </div>
      <LanguageDropDown className="languageDropdown flex-column">
        <div className="input-radio-container">
          <input type="radio" name="langauge" id="english" />
          <label htmlFor="english">English</label>
        </div>
        <div className="input-radio-container">
          <input type="radio" name="langauge" id="hindi" />
          <label htmlFor="hindi">हिन्दी</label>
        </div>
      </LanguageDropDown>
    </Container>
  )
}

export default TopNavLanguage

const Container = styled.div`
position:relative;
    .imageContainer{
      align-items: flex-end;
      img{
        width:2rem;
      }
      .MuiSvgIcon-root{
          font-size: 1.2rem;
          margin-right: -5px;
        }
    }

    &:hover {
      .languageDropdown{
        opacity:1;
        pointer-events: all;
        transition:ease 300ms;
      }
    }
`

const LanguageDropDown = styled.div`
    opacity:0;
    position:absolute;
    top:2.98rem;
    right:-1rem;
    width: 10rem;
    padding:1rem;
    pointer-events: none;
    background-color: white;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
    z-index: 90;
    color: black;
    cursor: default;
    transition:ease 300ms;
    border-radius: 3px;
    border: 1px solid var(--lightgray);

    div{
      display: flex;
      align-items: center;
      cursor:pointer;
      label{
        margin-left: .5rem;
        font-size: .9rem;
        color:var(--gray);
        cursor:pointer;

        &:hover{
          text-decoration: underline;
        }
      }

      input{


        &:hover{

        }
      }

      &:hover{
        
      }
    }
`