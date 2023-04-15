import Joi from 'joi'
import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi)

export const newProductSchema = Joi.object({
  Code: Joi.string().required().max(10),
  Price: Joi.string().required().max(8),
  Date: Joi.string().required(11),
  Description: Joi.string().required().max(70)
})
