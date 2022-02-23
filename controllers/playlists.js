<<<<<<< HEAD
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
=======
const Playlist = require('../models/Playlist')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError, UnauthenticatedError } = require('../errors')

// helper function for getPlaylist and updatePlaylist
const playlistValidator = async (playlist, req) => {
  if (!playlist) {
    throw new NotFoundError(`No playlist matching the id: ${req.params.id}`)
  }

  const playlistAuthor = playlist.createdBy.toString()

  if (req.user.userId !== playlistAuthor) {
    throw new UnauthenticatedError(
      'You are not allowed to access this resource'
    )
  }

  return true
}

// controllers
const getAllPlaylists = async (req, res) => {
  const playlists = await Playlist.find({ createdBy: req.user.userId }).sort(
    '-createdAt'
  )

  res
    .status(StatusCodes.OK)
    .json({ playlists: playlists, count: playlists.length })
}

const createPlaylist = async (req, res) => {
  const newPlaylist = await Playlist.create({
    name: req.body.name,
    createdBy: req.user.userId,
  })
  res.status(StatusCodes.CREATED).json(newPlaylist)
}

const getPlaylist = async (req, res) => {
  const playlist = await Playlist.findOne({ _id: req.params.id })
  await playlistValidator(playlist, req)
  res.status(StatusCodes.OK).json(playlist)
}

const updatePlaylist = async (req, res) => {
  const playlist = await Playlist.findOne({ _id: req.params.id })
  await playlistValidator(playlist, req)
  const updatedPlaylist = await Playlist.findOneAndUpdate(
    { _id: playlist._id },
    req.body,
    { new: true, runValidators: true, overwrite: false }
  )
  res.status(StatusCodes.OK).json(updatedPlaylist)
}

const deletePlaylist = async (req, res) => {
  const playlist = await Playlist.findOne({ _id: req.params.id })
  await playlistValidator(playlist, req)
  const deletedPlaylist = await Playlist.findOneAndDelete({ _id: playlist._id })
  res.status(StatusCodes.OK).json({ success: true })
>>>>>>> feature/playlists
}

module.exports = {
  getAllPlaylists,
  createPlaylist,
  getPlaylist,
  updatePlaylist,
  deletePlaylist,
}
