const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')


const add = async (req, res) => {
    const { 
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto
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