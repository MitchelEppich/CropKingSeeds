let express = require("express");

let resolvers = require("../../data/resolvers");

let router = express.Router();

router.get("/cancel", getCancel);
router.get("/success", getSuccess);
router.post("/verify", getVerify);

async function getCancel(req, res) {
  let _post = req.body;
  console.log("CANCEL", _post);
  // res.send(_user);
}
async function getSuccess(req, res) {
  let _post = req.body;
  console.log("SUCCESS", _post);
  // res.send(_user);
}
async function getVerify(req, res) {
  let _post = req.body;
  console.log("VERIFY", _post, req, res);
  res.send("VERIFY URL");
}

module.exports = router;
