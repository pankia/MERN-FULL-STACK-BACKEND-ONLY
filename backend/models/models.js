const mongoose  = require('mongoose');

const MusicSchema = mongoose.Schema(
  {
    Title:{
      type: String,
      required: [true, "ENTER title of the song is required"]
    },

    Artist:{
      type: String,
      required: [true, "ENTER ARTIST of the song is required"],    
      default: 0
    },

    Album: {
      type: String,
      required:  [true, "ENTER Album of the song is required"],
      default: 0
    },

    Genre: {
      type: String,
      required:  [true, "ENTER Genre of the song is required"],
      default: 0
    },
    
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Music", MusicSchema)

