import mongoose, { Schema } from "mongoose";
import { IProperty } from './model'

export const schema = new Schema<IProperty>({
    owner: {type: Schema.Types.ObjectId, ref:'user'},
    address: {type: String, required: false},
    description: {type: String, required: false},
    rating: [{type: Schema.Types.ObjectId,required: false, ref:'reviews'}],
    //coordinate: [{type: Number, required: false}],
    //picture:[{type: String, required: false}] 
})

export default mongoose.model('property',schema)