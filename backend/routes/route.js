const express = require("express");
const router = express.Router();
const {getMusics, getMusic, createMusic, updateMusic, deleteMusic} = require("../controller/controller")

// router.get('/', function (req, res) {
//   res.send("I am learning how to create apis using express js right now")
// })


// get all music
router.get('/', getMusics)


// get by Id
router.get('/:id', getMusic)

// Post a music
router.post('/', createMusic)

// Update a music
router.put('/:id', updateMusic)



// delete a music
router.delete('/:id', deleteMusic)


module.exports = router;
