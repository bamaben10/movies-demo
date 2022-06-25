const express = require('express');
const cors = require('cors');

const app = express();

// destructure functions from my controller.js
const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller.js');

// middleware - external code you want to run everytime your server starts
app.use(express.json());
app.use(cors());

// now we need to write out our endpoints
app.get('/api/movies', getMovies);
app.delete('/api/movies/:id', deleteMovie);
app.post('/api/movies', createMovie);
app.put('/api/movies/:id', updateMovie);

app.listen(4004, () => {
    console.log("Port is running on 4004");
})
