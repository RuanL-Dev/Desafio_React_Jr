import mongoose from 'mongoose'

const NewProductSchema = new mongoose.Schema({
  Code: { type: String, required: true, uppercase: true, maxlength: 10 },
  Price: { type: String, required: true, maxlength: 8 },
  Date: { type: String, required: true, maxlength: 11 },
  Description: { type: String, required: true, uppercase: true, maxlength: 70, unique: true },
  isLiked: { type: Boolean }
})

export default mongoose.models.NewProduct || mongoose.model('NewProduct', NewProductSchema)
