const router = require("express").Router();

const {
  getAll,
  getOne,
  create,
  remove,
  update,
} = require("../controllers/bookController");

router.get("/all", getAll);
router.get("/one", getOne);
router.post("/add", create);
router.delete("/remove", remove);
router.put("/edit", update);

module.exports = router;
