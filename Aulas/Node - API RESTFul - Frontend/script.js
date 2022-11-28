//CACHE
const productsList = document.getElementById('products-list')

const form = document.getElementById('form')
const formEdit = document.getElementById('formEdit')
const divFormEdit = document.querySelector('.formEdit')



//obtain products list

const API_URL = 'http://localhost:8080/api/products'


const addBtnDeleteOnClick = () => {
    const btnDelete = document.querySelectorAll('.btn-delete')
    btnDelete.forEach(botao => {
        botao.onclick = function(e) {
            e.preventDefault()
            const id = this.dataset.id
            fetch(`${API_URL}/${id}`, {
                method: 'DELETE'})
                .then(response => {
                    response.json().then(data => {
                        console.log(data)
                        if (data.message === 'success') {
                            alert('Produto excluído com sucesso.')
                            obtainProducts()
                        } else {
                            alert('Ocorreu um erro!')
                        }
                    })
                })
        }
    })
}

const addBtnEditOnClick = () => {
    const btnEdit = document.querySelectorAll('.btn-edit')
    btnEdit.forEach(botao => {
        botao.onclick = function(e) {
            
            e.preventDefault()

            divFormEdit.classList.remove('hidden')

            const id = this.dataset.id
            const name = this.dataset.name
            const brand = this.dataset.brand
            const price = this.dataset.price

            document.forms['formEdit'].id.value = id
            document.forms['formEdit'].name.value = name
            document.forms['formEdit'].brand.value = brand
            document.forms['formEdit'].price.value = price
        }
    })
}


const obtainProducts = () => {

    fetch(API_URL)
    .then(response => {
        response.json().then(data => {
            
            const productsHtml = data.map(product => `
            <li>
            ${product.name} - ${product.brand} - ${product.price} - 
                <a href="#" 
                class="btn-edit" 
                data-id="${product._id}" 
                data-name="${product.name}" 
                data-brand="${product.brand}" 
                data-price="${product.price}">
                [Editar]
                </a> - 
                <a href="#" 
                class="btn-delete" 
                data-id="${product._id}">
                [Excluir]
                </a>
            </li>
            `).join('')
            
            productsList.innerHTML = productsHtml

            addBtnDeleteOnClick()
            addBtnEditOnClick()

        })  
    })
}

obtainProducts()

// ADD PRODUCT

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

formEdit.onsubmit = (e) => {
    e.preventDefault()

    const id = document.forms['formEdit'].id.value
    const name = document.forms['formEdit'].name.value
    const brand = document.forms['formEdit'].brand.value
    const price = document.forms['formEdit'].price.value

    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            name,
            brand,
            price
        })
    })
        .then(response => {
            response.json().then(data => {
                console.log(data)
                if (data.message === 'success') {
                    alert('Produto alterado com sucesso.')
                    formEdit.reset()
                    obtainProducts()
                    divFormEdit.classList.add('hidden')
                } else {
                    alert('Ocorreu um erro!')
                }
            })
        })
} 