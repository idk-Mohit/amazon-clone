import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { Amazon_Logo_Dark } from '../assets/Images';
import axios from 'axios';

const AddProduct = () => {

    const formSubmitHandler = async (e) => {
        e.preventDefault()
        const InputArr = [...e.nativeEvent.path[0]]
        const dataObj = {
            name: '',
            product: {}

        }
        InputArr.forEach((item) => {
            if (item.localName === 'select') {
                dataObj.name = item.value
            }
            if ((item.localName === 'radio' || 'input' || 'textarea') && (item.localName !== 'select')) {
                if (item.checked === true) {
                    dataObj.product.isRefurbished = item.value
                }
                if ((item.type !== 'radio') && (item.localName !== 'button')) {
                    dataObj.product[`${item.name}`] = item.value
                }
            }
        })
        await axios({
            method: 'post',
            url: 'http://localhost:3001/addProduct',
            data: dataObj
        });

    }

    return (

        <Container>
            <header className="flex">
                <Link to="/">
                    <img src={Amazon_Logo_Dark} alt="" />
                </Link>
            </header>
            <InnerContainer>
                <h1>Add Product</h1>
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <select name="category" id="category" >
                            <option value="mobile">Mobiles</option>
                            <option value="laptop">Laptops</option>
                            <option value="tv">Television</option>
                            <option value="refrigrator">Refrigrator</option>
                            <option value="book">Books</option>
                            <option value="kitchen">Kitchen Supplies</option>
                            <option value="Men_Fashion">Men's Fashion</option>
                            <option value="Women_Fashion">Women's Fashion</option>
                        </select>
                    </div>

                    <div><label htmlFor="name">Enter Product Name</label>
                        <input type="text" id='name' name='name' required /></div>

                    <div><label htmlFor="image">Add Image Address</label>
                        <input type="text" id='image' name='image' required /></div>

                    <div>
                        <label htmlFor="price">Enter Product Price</label>
                        <input type="text" id='price' name='price' required />
                    </div>

                    <div><label htmlFor="about">Enter Product Summary</label>
                        <textarea name="about" id="about" cols="30" rows="10" placeholder='Product Summary' required></textarea></div>

                    <div>
                        <label htmlFor="">Is Product Refurbished</label>
                        <span>
                            <input type={'radio'} value={true} id='true' name='isRefurbished' />
                            <label htmlFor="true">True</label>
                        </span>
                        <span>
                            <input type={'radio'} value={false} id='false' name='isRefurbished' />
                            <label htmlFor="false">False</label></span>
                    </div>

                    <div> <label htmlFor="brand">Enter Product Brand</label>
                        <input type="text" id='brand' name='brand' required /></div>

                    <div><label htmlFor="network">Enter about netwrok</label>
                        <input type="text" id='network' name='network' required /></div>

                    <div>
                        <label htmlFor="rating">Enter Product Rating</label>
                        <input type="text" id='rating' name='rating' required />
                    </div>

                    <button type='submit'>Add Product</button>
                </form>
            </InnerContainer>
        </Container>

    )
}

export default AddProduct


const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
`
const InnerContainer = styled.section`
    min-width:35rem;
    margin: 1rem auto;
    

    border: 1px solid var(--lightgray);
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2) ;

    h1 {
        text-align: center;
    }

    form {
        div {
            margin: 1rem 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        input {
            padding:.5rem;
            margin:0.4rem 0;
            outline-color: var(--orange);
        }

        span {
           label {
            margin-left: .3rem;
           }
        }
         
        button {
            padding:.4rem 0.8rem;
        }

    }
`