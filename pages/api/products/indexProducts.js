import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import { addNewProduct } from '../../../modules/products/products.service'
import { newProductSchema } from '../../../modules/products/products.schema'

const indexProducts = createHandler()

indexProducts
  .post(validate({ body: newProductSchema }), async (req, res) => {
    try {
      const newProduct = await addNewProduct(req.body)
      res.status(201).json(newProduct)
    } catch (err) {
      return res.status(400).send(err.message)
    }
  }) 

export default indexProducts
