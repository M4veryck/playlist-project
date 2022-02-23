const getAllPlaylists = (req, res) => {
  res.send('This is the getAllPlaylists')
}

const createPlaylist = (req, res) => {
  res.send('This is the createPlaylist')
}

const getPlaylist = (req, res) => {
  res.send('This is the getPlaylist')
}

const updatePlaylist = (req, res) => {
  res.send('This is the updatePlaylist')
}

const deletePlaylist = (req, res) => {
  res.send('This is the deletePlaylist')
}

module.exports = {
  getAllPlaylists,
  createPlaylist,
  getPlaylist,
  updatePlaylist,
  deletePlaylist,
}
