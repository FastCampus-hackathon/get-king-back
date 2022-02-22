const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const headers = {
  Accept: "application/json",
};

const URL = `https://oapi.saramin.co.kr/job-search?access-key=${process.env.API_KEY}`;

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  const url = URL + `&id=${id}`;

  axios({
    method: "GET",
    url,
    headers,
  }).then((response) => res.json(response.data));
});

router.route("/").post((req, res) => {
  const { keywords, loc_cd, sort } = req.body;

  const url =
    URL +
    (keywords ? `&keywords=${encodeURI(keywords)}` : "") +
    (loc_cd ? `&loc_cd=${loc_cd}` : "") +
    (sort ? `&sort=${sort}` : "");

  console.log(url);

  axios({
    method: "GET",
    url,
    headers,
  }).then((response) => res.json(response.data));
});

module.exports = router;
