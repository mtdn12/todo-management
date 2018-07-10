const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DailySchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  list: [{
    text:{
      type: String,
      required: true,
    }
  }]
})

module.exports = Daily = mongoose.model('defaults', DailySchema)