import mongoose from 'mongoose'

export const userSchema= new mongoose.Schema({
    username:{type: String, unique: true, index:true, required: true, trim: true},
    password:{type: String, select: false},
    payed:{type: Boolean, select: true}
  })

export const User = mongoose.model('User', userSchema)
  
export const newsSchema= new mongoose.Schema({
    username:{type: String, unique: true, index:true, required: true, trim: true},
    news:{type: Array}
  })

export const News = mongoose.model('News', newsSchema)