getAllPlaylists = (req, res) => {
  res.send('This is the getAllPlaylists')
}

createPlaylist = (req, res) => {
  res.send('This is the createPlaylist')
}

getPlaylist = (req, res) => {
  res.send('This is the getPlaylist')
}

updatePlaylist = (req, res) => {
  res.send('This is the updatePlaylist')
}

deletePlaylist = (req, res) => {
  res.send('This is the deletePlaylist')
}

module.exports = {
  getAllPlaylists,
  createPlaylist,
  getPlaylist,
  updatePlaylist,
  deletePlaylist,
}