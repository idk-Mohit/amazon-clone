import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DarkFlagImage, WhiteFlagImage } from '../../../assets/Images';
import { useDispatch } from 'react-redux';
import { disableBackDrop, enableBackDrop } from '../../../Store/backdrop-Slice';

const TopNavLanguage = () => {
  const dispatch = useDispatch()
  const backdropEnableHandler = () => {
    dispatch(enableBackDrop())
  }

  const backdropDisableHandler = () => {
    dispatch(disableBackDrop())
  }
  return (
    <Container className='flex nav--hover' onMouseEnter={backdropEnableHandler} onMouseLeave={backdropDisableHandler}>
      <ImageContainer className="imageContainer flex">
        <img src={DarkFlagImage} alt="" /> <span><ArrowDropDownIcon /></span>
      </ImageContainer>
      {/* Small Triangle Shape on Top of DropDown */}
      <DropDownTriangleTop className='DropDownTriangleTop' />
      <LanguageDropDown className="languageDropdown flex-column">
        {/* Default Language (English) */}
        <InputContainer className="input-radio-container active">
          <CircleSelector className='CircleSelector'>
            <span></span>
          </CircleSelector>
          <InputLabel className='inputLabel'><span>English - EN</span></InputLabel>
        </InputContainer>
        <hr />
        <InputContainer className="input-radio-container">
          <CircleSelector className='CircleSelector'>
            <span></span>
          </CircleSelector>
          <InputLabel className='inputLabel'><span>हिन्दी - HI</span></InputLabel>
        </InputContainer>
        <InputContainer className="input-radio-container">
          <CircleSelector className='CircleSelector'>
            <span></span>
          </CircleSelector>
          <InputLabel className='inputLabel'><span>தமிழ் - TA</span></InputLabel>
        </InputContainer>
        <InputContainer className="input-radio-container">
          <CircleSelector className='CircleSelector'>
            <span></span>
          </CircleSelector>
          <InputLabel className='inputLabel'><span>తెలుగు - TE</span></InputLabel>
        </InputContainer>
        <InputContainer className="input-radio-container">
          <CircleSelector className='CircleSelector'>
            <span></span>
          </CircleSelector>
          <InputLabel className='inputLabel'><span>ಕನ್ನಡ - KN</span></InputLabel>
        </InputContainer>
        <InputContainer className="input-radio-container">
          <CircleSelector className='CircleSelector'>
            <span></span>
          </CircleSelector>
          <InputLabel className='inputLabel'><span>മലയാളം - ML</span></InputLabel>
        </InputContainer>
        <InputContainer className="input-radio-container">
          <CircleSelector className='CircleSelector'>
            <span></span>
          </CircleSelector>
          <InputLabel className='inputLabel'><span>বাংলা - BN</span></InputLabel>
        </InputContainer>
        <InputContainer className="input-radio-container">
          <CircleSelector className='CircleSelector'>
            <span></span>
          </CircleSelector>
          <InputLabel className='inputLabel'><span>मराठी - MR</span></InputLabel>
        </InputContainer>

        {/* Footer (more Information) */}
        <LearnMoreLink>
          <Link className='colored-link' to={'#'}>Learn More</Link>
        </LearnMoreLink>
        <hr />
        <Footer>
          <div><img src={WhiteFlagImage} alt="" /> <p className='flex'>You are shopping on <Link className='colored-link' to={'/'}>Amazon.in</Link></p></div>
          <Link className='colored-link changeCountry' to={'#'}>Change country/region</Link>
        </Footer>
      </LanguageDropDown>
    </Container >
  )
}

export default TopNavLanguage

const Container = styled.div`
  position:relative;
   &:hover {
     .languageDropdown,.DropDownTriangleTop{
       opacity:1;
       pointer-events: all;
       transition:ease 300ms;
     }
   }
`
const ImageContainer = styled.div`
  align-items: flex-end;
      img{
        width:2rem;
        margin-bottom: -3px;
      }
      .MuiSvgIcon-root{
          font-size: 1.2rem;
          margin: -5px -5px -5px 0;
        }
`
// Small Triangle Shape on Top of DropDown
const DropDownTriangleTop = styled.span`
    border: 9px solid transparent;
    border-top-width: 0;
    border-bottom: 9px solid white;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top:2.35rem;
    right: 1.5px;
    opacity:0;
`
const LanguageDropDown = styled.div`
  opacity:0;
  position:absolute;
  top:2.9rem;
  left:-2rem;
  width: 240px;
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
  
  hr{
    border:.5px solid rgba(200,200,200,.5);
  }
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
  gap: .6rem;
  margin: .4rem 0;

  &.active{
    cursor:default;
     .CircleSelector{
       span{
        background-color: var(--orange);
      }
    }
  }

  &:hover{
    &:not(.active){
      .CircleSelector span{
          background-color: #e4a082;
        }
      /* Adding UnderLine to text on hover */
      .inputLabel span{
          text-decoration: underline;
          color:var(--orange);
      }
    }
  }
`
const CircleSelector = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid var(--darkblue);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  > span{
    width: 8px;
    height: 8px;
    border-radius: 50px;
    border: 1px solid transparent;
  }
`
const InputLabel = styled.div`
  span{
    font-size: 0.9rem;
    color:var(--gray);
  }
`
const LearnMoreLink = styled.div`
margin: .4rem 0 .5rem 1.6rem;
  a{
    font-size: 0.8rem;
    font-family: 'Amazon-light';
    font-weight: 600;
  }
`
const Footer = styled.footer`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img{
      width:1.4rem;
    }
    p{
      font-size: .7rem;
      a{
        margin-left: .3rem;
      }
    }
  }

  .changeCountry {
    margin: .5rem auto 0;
    font-size: .8rem ;
  }
`