import mongoose from 'mongoose'

const NewProductSchema = new mongoose.Schema({
  Code: { type: String, required: true, uppercase: true, maxlength: 10 },
  Price: { type: Number, required: true, maxlength: 6 },
  Date: { type: Number, required: true, maxlength: 8 },
  Description: { type: String, required: true, uppercase: true, maxlength: 70 },
  isLiked: { type: Boolean }
})

export default mongoose.models.NewProduct || mongoose.model('NewProduct', NewProductSchema)
