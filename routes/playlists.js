const express = require('express')
const router = express.Router()
const {
  getAllPlaylists,
  createPlaylist,
  getPlaylist,
  updatePlaylist,
  deletePlaylist,
} = require('../controllers/playlists')

router.route('/').get(getAllPlaylists).post(createPlaylist)
router
  .route('/:id')
  .get(getPlaylist)
  .patch(updatePlaylist)
  .delete(deletePlaylist)

module.exports = router
