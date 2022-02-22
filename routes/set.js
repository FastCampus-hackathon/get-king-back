const express = require("express");
const router = express.Router();
const Set = require("../schema/setSchema");

router.route("/").get((req, res) => {
  Set.find((err, set) => {
    if (err) console.log(err);
    else res.send(set);
  });
});

router.route("/:_id").get((req, res) => {
  const { _id } = req.params;
  Set.findOne({ _id }, (err, set) => {
    if (err) console.log(err);
    else res.send(set);
  });
});

router.route("/create").post((req, res) => {
  const { name, ids } = req.body;

  const setInfo = new Set({
    name,
    ids,
  });

  setInfo.save().then((set) => {
    res.json(set);
  });
});

router.route("/update/name").patch((req, res) => {
  const { name, _id } = req.body;

  Set.updateOne({ _id }, { $set: { name } }, (err, set) => {
    if (err) console.log(err);
    else res.redirect(`/set/${_id}`);
  });
});

router.route("/update/ids").patch((req, res) => {
  const { ids, _id } = req.body;

  Set.updateOne({ _id }, { $set: { ids } }, (err, set) => {
    if (err) console.log(err);
    else res.redirect(`/set/${_id}`);
  });
});

router.route("/delete").delete((req, res) => {
  const { _id } = req.body;

  Set.deleteOne({ _id }, (err, set) => {
    if (err) console.log(err);
    else res.redirect(`/set`);
  });
});

module.exports = router;
