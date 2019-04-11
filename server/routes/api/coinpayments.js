let express = require("express");

let resolvers = require("../../data/resolvers");

let router = express.Router();

router.get("/cancel", getCancel);
router.get("/success", getSuccess);
router.post("/verify", getVerify);

async function getCancel(req, res) {
  let _post = req.query;
  let orderId = _post.orderId;
  resolvers.Mutation.postToAddNoteToOrder(null, {
    input: {
      status: "Customer Cancelled Payment...",
      transactionId: "NO_TRANSACTION_ID_SET",
      orderId
    }
  });
  res.redirect("/shop");
}
async function getSuccess(req, res) {
  let _post = req.body;
  console.log("SUCCESS", _post);
  res.send("SUCCESSED");
}
async function getVerify(req, res) {
  let _post = req.body;
  let transactionId = _post.txn_id;
  if (transactionId == "" || transactionId == null)
    res.send("NO TRANSACTION ID");
  let status = _post.status_text;
  if (status == "" || status == null) res.send("NO STATUS");
  let orderId = _post.invoice;
  if (orderId == "" || orderId == null) res.send("NO ORDER ID");
  orderId = orderId
    .toLowerCase()
    .replace("cks", "")
    .replace(/-/g, "");
  resolvers.Mutation.postToAddNoteToOrder(null, {
    input: {
      status,
      transactionId,
      orderId
    }
  });
  res.send("VERIFIED");
}

module.exports = router;
