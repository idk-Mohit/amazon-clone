import axios from 'axios'

async function FetchedProduct(id) {
    const fetchedProduct = await axios({
        method: 'get',
        url: `https://amazon-scraper.chipmunk092000.workers.dev/product/${id.replaceAll(`~`, '/')}`
    })
    return fetchedProduct.data.product_detail
}

async function DeleteProduct(id, email) {
    let data = {
        email: email,
        productId: id,
        quantity: 1
    }
    let url = 'https://diverse-backend.onrender.com/removeFromCart' //Production
    const result = await axios({ url, method: 'post', data })
    if (result) return true
    else return false
}

async function CartHandler(data, url) {
    const response = await axios({
        method: 'post',
        url: url,
        data: data
    })
    return response
}

async function ProductHandler(e, email) {
    const selectValue = parseInt(e.target.value)
    const { id, category, quantity } = JSON.parse(e.target.title)
    if (selectValue > quantity) {
        let data = {
            email,
            productCategory: category,
            productId: id,
            quantity: selectValue - quantity
        }
        let url = 'https://diverse-backend.onrender.com/addToCart'
        let response = await CartHandler(data, url)
        return response
    }
    if (selectValue < quantity) {
        let data = {
            email,
            productId: id,
            quantity: quantity - selectValue
        }
        let url = 'https://diverse-backend.onrender.com/removeFromCart'
        let response = await CartHandler(data, url)
        return response
    }
}

export {
    DeleteProduct,
    CartHandler,
    FetchedProduct,
    ProductHandler
}