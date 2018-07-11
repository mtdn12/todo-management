const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HistorySchema = new Schema({
  list: [{
    type: Schema.Types.ObjectId,
    ref: 'todos',
  }],
  addAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = History = mongoose.model('histories', HistorySchema)