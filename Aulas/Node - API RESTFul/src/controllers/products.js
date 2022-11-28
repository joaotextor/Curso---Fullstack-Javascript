const { response } = require('express')
const ProductsModel = require('../modules/products')

const get = async (req, res) => {
    const { id } = req.params
    
    const products = await ProductsModel.find(id ? { _id: id } : null)
    
    res.send(products)
}

const post = async (req, res) => {
  const {
    name,
    brand,
    price
  } = req.body

  console.log(req.body)

  const product = new ProductsModel({
    name,
    brand,
    price
  })

  product.save()

  res.send({
    message: 'success'
  })
} 

module.exports = {
  get,
  post
}