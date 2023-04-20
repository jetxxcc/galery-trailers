const indexCtrl ={}

const Trailerdb = require('../models/Trailers')

indexCtrl.renderIndex = async(req, res) =>{
    const tra = await Trailerdb.find()
    res.render('index', {tra});
}

indexCtrl.renderAbout = async(req, res) =>{
    const tra = await Trailerdb.findById(req.params.id)
    res.render('about', { tra });
}


module.exports = indexCtrl