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

const put = async (req, res) => {
  const { id } = req.params

  const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

  res.send({
    message:'success',
    product
  })

  // const product = await ProductsModel.findOne({ _id: id })

  // await product.updateOne(req.body)

  // res.send({
  //   message: 'success',
  //   product
  // })

}

const remove = async (req, res) => {
  const { id } = req.params

  const remove = await ProductsModel.deleteOne({ _id: id })

  const message = remove.deletedCount === 1 ? 'success' : 'error' 

  res.send({
    message
  })
}

module.exports = {
  get,
  post,
  put,
  remove
}