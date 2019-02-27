let express = require("express");

let router = express.Router();

router.get("/", getNewReview);

async function getNewReview(req, res) {
  let _post = req.body;
  console.log(_post);
}

module.exports = router;
