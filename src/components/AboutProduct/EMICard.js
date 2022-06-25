import React, { useState } from 'react'
import styled from 'styled-components'


const EMICard = () => {
    const [selectedTab, setSelectedTab] = useState('1')

    const TabHandler = (e) => {
        setSelectedTab(e.target.value)
    }

    return (
        <Container>
            <DropDownContent>
                <h1>EMI Options</h1>
                <InnerContainer>
                    <HeaderButton>
                        <button className={selectedTab === '1' && 'active'} onClick={TabHandler} value='1'>Debit Card EMIs</button>
                        <button className={selectedTab === '2' && 'active'} onClick={TabHandler} value='2' >Other EMIs</button></HeaderButton>
                    {selectedTab === '1' && <DebitCardEMIs>
                        <p>EMI on debit cards is currently available for select customers of following banks:HDFC, ICICI, Axis, Kotak Mahindra, State Bank of India and Federal Bank on products above Rs.5,000. To know more about Debit EMI eligibility and how it works click here</p>
                    </DebitCardEMIs>}
                    {selectedTab === '2' && <OtherEMIS>
                        <p>Other EMIs Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, fugiat quasi? Dolorem asperiores nesciunt repudiandae amet aut ab, vero, incidunt recusandae, dolore consequuntur earum necessitatibus ducimus? Magnam id deserunt dolorem!</p>
                    </OtherEMIS>}
                </InnerContainer>
            </DropDownContent>
        </Container>
    )
}

export default EMICard

const Container = styled.div`
    position: relative;
    display: none;
`
const DropDownContent = styled.div`
    position: absolute;
    right: 0;
    top: 1.2rem;
    width: 25rem;
    background: white;
    z-index: 10;
    border:1px solid var(--lightgray);
    border-radius: 5px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,.2);
    h1{
        padding: 0.4rem;
        border-bottom: 1px solid rgba(200,200,200,.7);
        color:var(--darkblue);
        font-size: 0.9rem;
        font-weight: 600;
    }
    
`
const InnerContainer = styled.div`
        border: 1px solid var(--lightgray);
        margin: 0.5rem;
        p{
           padding: 0.4rem;
        }
`
const HeaderButton = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border:none;
    button {
        background:var(--lightgray);
        color:var(--blue);
        font-family: 'Amazon-light';
        font-weight: 600;
        font-size: 14px;
        padding: 0.8rem 0;
        border-radius: 0;
        border:1px solid transparent;
        &:hover {
            color:var(--orange);
            border-top: 1px solid var(--orange);
        }
    }
    .active{
        background:white;
        color:var(--orange);
        border-top: 1px solid var(--orange);
    }
`
const DebitCardEMIs = styled.div`
    p{
        color:var(--gray);
    }
`
const OtherEMIS = styled.div``
