import Joi from 'joi'
import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi)

export const newProductSchema = Joi.object({
  Code: Joi.string()
    .required()
    .max(10)
    .message('O campo "Código" pode ter no máximo {{#limit}} caracteres'),
  Title: Joi.string()
    .required()
    .max(50)
    .message('O campo "Título" pode ter no máximo {{#limit}} caracteres'),
  Price: Joi.string()
    .required()
    .max(8)
    .message('O campo "Preço" pode ter no máximo {{#limit}} caracteres'),
  Date: Joi.string().required(11),
  Description: Joi.string()
    .required()
    .max(300)
    .message('O campo "Descrição" pode ter no máximo {{#limit}} caracteres')
})

export const deleteProductSchema = Joi.object({
  id: Joi.objectId().required()
})

export const editProductSchema = Joi.object({
  id: Joi.objectId(),
  Code: Joi.string()
    .required()
    .max(10)
    .message('O campo "Código" pode ter no máximo {{#limit}} caracteres'),
  Title: Joi.string()
    .required()
    .max(50)
    .message('O campo "Título" pode ter no máximo {{#limit}} caracteres'),
  Price: Joi.string()
    .required()
    .max(8)
    .message('O campo "Preço" pode ter no máximo {{#limit}} caracteres'),
  Date: Joi.string().required(11),
  Description: Joi.string()
    .required()
    .max(300)
    .message('O campo "Descrição" pode ter no máximo {{#limit}} caracteres'),
  isLiked: Joi.boolean()
})
