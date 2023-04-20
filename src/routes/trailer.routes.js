const { Router } = require("express");
const router = Router();

const {
  renderFormTra,
  createTra,
  renderTra,
  renderEditForm,
  updateForm,
  deleteTra,
} = require("../controllers/trailer.controller");

//new trailer
router.get("/config/add", renderFormTra);

router.post("/config/new-tra", createTra);

//get all trailer

router.get("/config", renderTra);

//edit traler
router.get("/config/edit/:id", renderEditForm);

//put actualizar algo qur existe
router.put("/config/edit/:id", updateForm);

//delete trailer
router.delete('/config/delete/:id', deleteTra)

module.exports = router;
