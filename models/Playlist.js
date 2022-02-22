const mongoose = require('mongoose')

const PlaylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
    maxlength: [50, 'Name must be less than 50 characters'],
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user'],
  },
  createdAt: {
    type: Date,
    default: Date(),
  },
})

module.exports = mongoose.model('Playlist', PlaylistSchema)
