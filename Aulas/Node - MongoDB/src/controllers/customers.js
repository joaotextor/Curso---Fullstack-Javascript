const CustomersModel = require('../models/customers')


const add = (req, res) => {
    const { 
        name,
        age,
        email,
        password
    } = req.body

    const register = new CustomersModel({
        name,
        age,
        email,
        password
    })

    register.save()
    res.send('Cadastro realizado com sucesso!')

    res.end()
}


const remove = () => {

}

const edit = () => { 

}

module.exports = {
    add,
    remove,
    edit
}