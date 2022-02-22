const express = require("express");
const router = express.Router();
const Memo = require("../schema/memoSchema");

router.route("/:id").get((req, res) => {
  const { id } = req.params;

  Memo.findOne({ id }, (err, memo) => {
    if (err) console.log(err);
    else res.send(memo);
  });
});

router.route("/:id").post((req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  Memo.findOne({ id }, (err, memo) => {
    if (err) console.log(err);
    else if (memo === null) {
      const memoInfo = new Memo({
        id,
        text,
      });
      memoInfo.save().then((memo) => {
        res.json(memo);
      });
    } else {
      Memo.updateOne({ id }, { $set: { text } }, (err, memo) => {
        if (err) console.log(err);
        else res.redirect(`/memo/${id}`);
      });
    }
  });
});

module.exports = router;
