const Music = require("../models/models")


const getMusics = async  (req, res) =>{
try {
  const musics = await Music.find({});
  res.status(200).json(musics);
} catch (error) {
  res.status(500).json({message:error.message});
}
};


const getMusic =  async (req, res) => {
try {
  const { id } = req.params;
  const music = await Music.findById(id);
  res.status(200).json(music);
} catch (error) {
  res.status(500).json({message:error.message});
}

};

const createMusic = async (req, res) =>{
  try {
  const music = await Music.create(req.body);
  res.status(200).json(music);
} catch (error) {
  res.status(500).json({message:error.message});
}

};

const updateMusic = async (req, res) => {
  try {
    const { id } = req.params;

    const music = await Music.findByIdAndUpdate(id, req.body);
    
    if (!music) {
      return res.status(404).json({message: "Music not found"})
    }
    
    const updateMusic =  await Music.findById(id);
    res.status(200).json(updateMusic);
  } catch (error) {
    res.status(500).json({message:error.message});
  }

}

const deleteMusic = async (req, res) =>{
  try {
    const { id } = req.params;

    const music = await Music.findByIdAndDelete(id);
    
    if (!music) {
      return res.status(404).json({message: "Music not found"})
    }
    
    res.status(200).json({message: "Music deleted successfully"});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}


module.exports = {
  getMusics,
  getMusic,
  createMusic,
  updateMusic,
  deleteMusic
};