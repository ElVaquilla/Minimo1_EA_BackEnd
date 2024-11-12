import mongoose, { ObjectId} from 'mongoose'


export interface IReview {
    user: ObjectId,
    property: ObjectId,
    rating: number,
}