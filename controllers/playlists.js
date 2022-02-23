const Playlist = require('../models/Playlist')
const { StatusCodes } = require('http-status-codes')
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require('../errors')

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
  const playlist = await Playlist.findOne({
    _id: req.params.id,
  })

  if (!playlist) {
    throw new NotFoundError(`No playlist matching the id: ${req.params.id}`)
  }

  const playlistAuthor = playlist.createdBy.toString()

  if (req.user.userId !== playlistAuthor) {
    throw new UnauthenticatedError(
      'You are not allowed to access this resource'
    )
  }

  res.status(StatusCodes.OK).json(playlist)
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
