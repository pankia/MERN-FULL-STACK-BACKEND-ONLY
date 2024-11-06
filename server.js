const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./backend/config/db');
const dotenv  = require("dotenv").config();

connectDb();

const app = express()
// const MusicRoute =  require("./backend/routes/route.js")
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// Middleware using json
app.use(express.json());

// Middleware using URLENCODED FORM
app.use(express.urlencoded({extended: false}))



app.use('/api/musics', require('./backend/routes/route'))
// app.post('/api/Musics', async (req,res) =>{
//   try {
//     const music = await Music.create(req.body)
//     res.status(200).json(music);
//   } catch (error) {
//     res.status(500).json({message:error.message});
//   }
// });

// app.get('/api/musics', async (req,res) =>{
//   try {
//     const musics = await Music.find({})
//     res.status(200).json(musics)
//   } catch (error) {
//     res.status(500).json({message:error.message})
//   }
// });

// app.get('/api/musics/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const music = await Music.findById(id);
//     res.status(200).json(music);
//   } catch (error) {
//     console.error(error); // Log the error for debugging
//     res.status(500).json({ message: error.message });
//   }
// });

// app.put('/api/musics/:id', async(req,res) => {
// try {
//     const { id } = req.params;
//     const music = await Music.findByIdAndUpdate(id,req.body);
//     res.status(200).json(music)
// } catch (error) {
//   res.status(500).json({message:error.message})
// }
// });

// app.delete('/api/musics/:id', async(req,res) => {
// try {
//   const { id } = req.params;
//   const music = await Music.findByIdAndDelete(id, req.body)
//   if (!music) {
//       return res.status(404).json({message: "Music not found"})
//     }
    
//     res.status(200).json({message: "Music Deleted successfully"})
// } catch (error) {
//   res.status(500).json({message:error.message})
// }
// })



const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`A Server is Running on port ${port}`);
})
