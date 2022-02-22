const express = require('express')
const router = express.Router()
require('../controllers/playlists')

router.route('/').get(getAllPlaylists).post(createPlaylist)
router.route('/:id').get(getPlaylist).patch(updatePlaylist).delete(deletePlaylist)

module.exports = router