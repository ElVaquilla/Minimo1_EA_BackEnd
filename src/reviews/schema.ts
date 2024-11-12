import mongoose, { Schema } from "mongoose";

export const schema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  property: { type: Schema.Types.ObjectId, required: true, ref: 'property' },
  rating: { type: Number, required: true }
})

export default mongoose.model('review', schema)
