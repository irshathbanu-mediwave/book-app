// const express = require('express'); 
// const app = express(); 

// app.get('/', (req, res) => { 
// res.send('<h1>Home page</h1>'); 
// }); 

// app.get('/:id', (req, res) => { 
// res.send(`<h1>${req.params.id}</h1>`); 
// }); 

// app.listen(3000, () => { 
// console.log('Server is up on port 3000'); 
// }); 
// const express = require("express");
// const app = express();
// const movies = [
//   { id: 1, title: "Movie 1" },
//   { id: 2, title: "Movie 2" },
//   { id: 3, title: "Movie 3" },
// ];
// //get 
// app.get("/movies/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const movie = movies.find((m) => m.id === id);
//   if (movie) {
//     res.json(movie);
//   } else {
//     res.status(404).json({ message: "Movie not found" });
//   }
// });


// app.listen(1090, () => {
//   console.log("Server is running on port 1090");
// });
