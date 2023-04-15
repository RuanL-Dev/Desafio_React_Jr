import NewProduct from './products.model'

export const addNewProduct = async (body) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newProduct = { ...body }
    const dbNewProduct = await NewProduct.create(newProduct)
    return dbNewProduct
  } catch (err) {
    throw err
  }
}

export const getProducts = async (limit = 10) => {
  return await NewProduct.find().sort({ Date: -1 }).limit(limit)
}

export const deleteProduct = async (id) => {
  return await NewProduct.findOneAndDelete({
    _id: id
  })
}

export const editProduct = async (body) => {
  return await NewProduct.findOneAndUpdate(
    {
      _id: body._id
    },
    {
      Code: body.Code,
      Title: body.Title,
      Price: body.Price,
      Date: body.Date,
      Description: body.Description,
      isLiked: body.isLiked
    },
    {
      new: true
    }
  )
}
