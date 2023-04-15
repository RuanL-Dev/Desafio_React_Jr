import Joi from 'joi'
import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi)

export const newProductSchema = Joi.object({
  Code: Joi.string().required().max(10),
  Price: Joi.string().required().max(8),
  Date: Joi.string().required(11),
  Description: Joi.string().required().max(70)
})

export const deleteProductSchema = Joi.object({
  id: Joi.objectId().required()
})

export const editProductSchema = Joi.object({
  id: Joi.objectId(),
  Code: Joi.string(),
  Price: Joi.string(),
  Date: Joi.string(),
  Description: Joi.string(),
  isLiked: Joi.boolean()
})

export const filterProductSchema = Joi.object({
  Code: Joi.string(),
  Price: Joi.string(),
  Date: Joi.string(),
  Description: Joi.string()
})
