import mongoose from 'mongoose'

const NewProductSchema = new mongoose.Schema({
  Code: { type: String, required: true, uppercase: true, maxlength: 10 },
  Title: { type: String, required: true, uppercase: true, maxlength: 50, unique: true },
  Price: { type: String, required: true, maxlength: 8 },
  Date: { type: String, required: true, maxlength: 11 },
  Description: { type: String, required: true, uppercase: true, maxlength: 300, unique: true },
  isLiked: { type: Boolean }
})

export default mongoose.models.NewProduct || mongoose.model('NewProduct', NewProductSchema)
