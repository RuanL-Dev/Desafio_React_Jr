import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import {
  addNewProduct,
  getProducts,
  deleteProduct,
  editProduct
} from '../../../modules/products/products.service'
import {
  newProductSchema,
  deleteProductSchema,
  editProductSchema
} from '../../../modules/products/products.schema'

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
  .delete(validate(deleteProductSchema), async (req, res) => {
    try {
      const deleteProductAdd = await deleteProduct(req.body.id)
      if (deleteProductAdd) return res.status(200).send({ ok: true })
      return res.status(400).send('Anúncio já deletado')
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .get(async (req, res) => {
    try {
      const showProducts = await getProducts()
      res.status(200).send(showProducts)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .patch(validate(editProductSchema), async (req, res) => {
    try {
      const refreshProduct = await editProduct(req.body)
      if (refreshProduct) res.status(201).send({ ok: true })
      return res.status(400).send(res.message)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })

export default indexProducts
