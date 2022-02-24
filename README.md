# Playlists API

Playlists API is a project developed using node.js, in which the user can register/login,
and once they are authorized, they're able to create, get, update and delete a 
playlist, as well as view their playlists. The Database used is MongoDB. 
Authorization method is Bearer Token, and extra security libraries were added. For further
info please visit [Playlists API Website](https://playlists-api-01.herokuapp.com/).

## Setup [Taken from [1]]

In order to use the Playlists API, you are required to follow these steps:

1.
```bash
npm install && npm start
```
2. Database connection <br>
2.1. Import connect.js <br>
2.2. Invoke in start() <br>
2.3. Setup .env in the root <br>
2.4. Add MONGO_URI with correct value <br>

## Documentation

[Playlists API Documentation](https://playlists-api-01.herokuapp.com/api-docs/)

## Future features

- Front-end component of the app.
- Better documentation.
- Songs component.
- Call to [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- Facebook and Gmail OAuth2.0 
- Sending emails

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Disclaimer

Thanks to [John Smilga](https://github.com/john-smilga/), I went from not knowing the
basics of node.js to not only learning the basics of it, but also understanding its concepts
and even learning how to use some libraries, make a junior-level app, deploy it and
document it. That said, I attribute most of the coding style in Playlists API to him.
Code ideas directly taken from him (as well as those partially modified) were 
appropiately attributed in the source code.

### References
[1] <br>
[GitHub repo for 06-jobs-api](https://github.com/john-smilga/node-express-course/tree/main/06-jobs-api/final) <br>
[Youtube tutorial for 06-jobs-api](https://youtu.be/rltfdjcXjmk?t=23306)

## License
[MIT](https://choosealicense.com/licenses/mit/)
