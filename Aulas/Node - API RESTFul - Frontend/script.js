//CACHE
const productsList = document.getElementById('products-list')

const form = document.getElementById('form')



//obtain products list

const API_URL = 'http://localhost:8080/api/products'

const obtainProducts = () => {

    fetch(API_URL)
    .then(response => {
        response.json().then(data => {
            
            const productsHtml = data.map(product => `
            <li>
            ${product.name} - ${product.brand} - ${product.price}
            </li>
            `).join('')
            
            productsList.innerHTML = productsHtml
        })
        
    })
}

obtainProducts()

// REGISTER PRODUCT

form.onsubmit = (e) => {
    e.preventDefault()

    const name = document.forms['form'].name.value
    const brand = document.forms['form'].brand.value
    const price = document.forms['form'].price.value

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            brand,
            price
        })
    }).then(response => {
            response.json().then(data => {
                if (data.message === 'success') {
                    obtainProducts()
                    form.reset()
                    alert('Cadastro realizado com sucesso!')
                } else {
                    alert('Ops, ocorreu um erro. Tente novamente.')
                }
            })
        })
}