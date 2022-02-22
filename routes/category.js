const express = require("express");
const router = express.Router();
const locMcd = require("../dataTable/loc_mcd");
const locBcd = require("../dataTable/loc_bcd");
const indCd = require("../dataTable/ind_cd");
const IT = require("../dataTable/IT");

// 2차 지역
router.route("/loc_mcd").get((req, res) => {
  res.send(locMcd);
});

router.route("/loc_mcd/:id").get((req, res) => {
  const { id } = req.params;
  const result = locMcd.filter(({ code }) => code === Number(id));
  res.send(result);
});

// 1차 지역
router.route("/loc_bcd").get((req, res) => {
  res.send(locBcd);
});

router.route("/loc_bcd/:id").get((req, res) => {
  const { id } = req.params;
  const result = locBcd.filter(({ code }) => code === Number(id));
  res.send(result);
});

// 직종구분
router.route("/ind_cd").get((req, res) => {
  res.send(indCd);
});

router.route("/ind_cd/:id").get((req, res) => {
  const { id } = req.params;
  const result = indCd.filter(({ code }) => code === Number(id));
  res.send(result);
});

// IT 하위 직업
router.route("/it").get((req, res) => {
  res.send(IT);
});

router.route("/it/:id").get((req, res) => {
  const { id } = req.params;
  const result = IT.filter(({ code }) => code === Number(id));
  res.send(result);
});

module.exports = router;
