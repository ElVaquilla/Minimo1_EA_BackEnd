import mongoose, { ObjectId } from "mongoose";

export interface IProperty{
    //_id?: mongoose.Types.ObjectId;
    owner: ObjectId,
    address: string,
    description?: String,
    rating?: ObjectId[],
    //coordinate?: [number,number],
    //picture: [string]
}