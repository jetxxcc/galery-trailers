const trailerCtrl = {};

const Trailerdb = require("../models/Trailers");

// controllers

trailerCtrl.renderFormTra = (req, res) => {
  res.render("trailer/add");
};

trailerCtrl.createTra = async (req, res) => {
  const tra = new Trailerdb();
  tra.title = req.body.title;
  tra.date = req.body.date;
  tra.director = req.body.director;
  tra.actor = req.body.actor;
  tra.description = req.body.description;
  tra.link = req.body.link;
  tra.filename = req.file.filename;
  tra.path = "../img/uploads/" + req.file.filename;
  tra.originalname = req.file.originalname;
  tra.mimetype = req.file.mimetype;
  tra.size = req.file.size;

  await tra.save();

  res.redirect("/config");

  req.flash("succes_msg", 'Trailer Added Successful')
};

trailerCtrl.renderTra = async (req, res) => {
  const tra = await Trailerdb.find();
  res.render("trailer/allTrailers", { tra });
};

trailerCtrl.renderEditForm = async (req, res) => {
  const tra = await Trailerdb.findById(req.params.id);
  res.render("trailer/edit", { tra });
};

trailerCtrl.updateForm = async (req, res) => {
  const {
    title,
    date,
    director,
    actor,
    description,
    link,
    filename,
    path,
    originalname,
    mimetype,
    size,
  } = req.body;

  await Trailerdb.findByIdAndUpdate(req.params.id, {
    title,
    date,
    director,
    actor,
    description,
    link,
    filename,
    path,
    originalname,
    mimetype,
    size,
  });
  res.redirect("/config");

  req.flash("succes_msg", 'Trailer Updated Successful')
};

trailerCtrl.deleteTra = async (req, res) => {
  await Trailerdb.findByIdAndDelete(req.params.id);
  res.redirect("/config");

  req.flash("succes_msg", 'Trailer Deleted Successful')
};

module.exports = trailerCtrl;
