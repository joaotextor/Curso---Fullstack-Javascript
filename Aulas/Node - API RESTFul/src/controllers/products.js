const ProductsModel = require('../modules/products')

const get = async (req, res) => {
    const { id } = req.params
    
    const products = await ProductsModel.find(id ? { _id: id } : null)
    
    res.send(products)
}

module.exports = {
  get
}