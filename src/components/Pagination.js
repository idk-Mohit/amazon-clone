import React from 'react'
import styled from 'styled-components'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Pagination = () => {

    const paginationHandler = (e, mode = 'react', type = null) => {
        var item;
        if (mode === 'react') {
            item = e.target
        }
        else {
            item = e
        }
        console.log(item.value)
        let allButtons = [...document.querySelectorAll('#paginationContainer li')]
        let prevButton = document.getElementById('pagination-prev-button')
        let nextButton = document.getElementById('pagination-next-button')
        if (mode === 'normal') {
            allButtons.forEach(btn => {
                btn.classList.remove('active')
                if (type === 'prev') {
                    if (btn.value === item.value - 1) {
                        btn.classList.add('active')
                    }
                }
                else {
                    if (btn.value === item.value + 1) {
                        btn.classList.add('active')
                    }
                }
            })
        }
        else {
            allButtons.forEach(btn => {
                btn.classList.remove('active')
                item.classList.add('active')
            })
        }
        if (item.value === 2) {
            nextButton.classList.remove('disabled')
            prevButton.classList.add('disabled')
            prevButton.disabled = true
        }
        else if (item.value === 4) {
            prevButton.classList.remove('disabled')
            nextButton.classList.add('disabled')
            nextButton.disabled = true
        }
        else {
            prevButton.classList.remove('disabled')
            nextButton.classList.remove('disabled')
            prevButton.disabled = false
            nextButton.disabled = false
        }


        // FetchProductList(`${name}&page=${item.value}`)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const PrevButton = () => {
        let button = document.querySelector('#paginationContainer li.active')
        paginationHandler(button, 'normal', 'prev')
    }
    const NextButton = () => {
        let button = document.querySelector('#paginationContainer li.active')
        paginationHandler(button, 'normal', 'next')
    }
    return (
        <PaginationContainer id='paginationContainer'>
            <button id='pagination-prev-button' className='flex disabled' onClick={PrevButton}><span><KeyboardArrowLeftIcon /></span> Previous</button>
            <li onClick={paginationHandler} className='pagination-page active' value='1'>1</li>
            <li onClick={paginationHandler} className='pagination-page' value='2'>2</li>
            <li onClick={paginationHandler} className='pagination-page' value='3'>3</li>
            <li onClick={paginationHandler} className='pagination-page' value='4'>4</li>
            <li onClick={paginationHandler} className='pagination-page' value='5'>5</li>
            <button id="pagination-next-button" className='flex' onClick={NextButton}>Next <span><KeyboardArrowRightIcon /></span></button>
        </PaginationContainer>
    )
}

export default Pagination

const PaginationContainer = styled.ul`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    height: 2.8rem;
    gap:0;
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.8rem;
        height: 100%;
        background-color: white;
        border-top: 1px solid rgba(200,200,200,1);
        border-bottom: 1px solid rgba(200,200,200,1);
        color:black;
        cursor: pointer;
        &:hover {
            &:not(.active){
                background-color: var(--lightgray);
            }
        }
    }
    .active{
        border: 1px solid var(--darkblue);
    }

    button {
        align-items: center;
        background-image:none;
        background-color: white;
        border-radius: 0;
        border: 1px solid rgba(200,200,200,1);
        width: 6rem;
        height: 100%;
        justify-content: center;
        span {
            line-height: 0;
        }
        &.disabled{
            .MuiSvgIcon-root{
                fill: var(--gray);
            }
            color:var(--gray);
            cursor: not-allowed;
        }
        &:hover {
            &:not(.disabled){
                background-color: var(--lightgray);
            }
        }
    }
    #pagination-prev-button{
        padding-right:.5rem;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-right: none;
        position:relative;
        &::after{
            content: '';
            width: 1px;
            height: 32px;
            background: #d5d9d9;
            position: absolute;
            right: 0;
            top: 7px;  
        }
        &:hover{
            &::after &:not(.disabled){
                display: none;
            }
        }
    }
    #pagination-next-button{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-left: none;
        position:relative;

        &::before{
            content: '';
            width: 1px;
            height: 32px;
            background: #d5d9d9;
            position: absolute;
            left: 0;
            top: 7px;  
        }
        &:hover{
            &::before{
                display: none;
            }
        }
    }
`