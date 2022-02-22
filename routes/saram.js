const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config()
const headers = {
  Accept: 'application/json',
}
const it = require('../dataTable/IT')

const URL = `https://oapi.saramin.co.kr/job-search?access-key=${process.env.API_KEY}`

router.route('/:id').get((req, res) => {
  const { id } = req.params
  const url = URL + `&id=${id}`

  axios({
    method: 'GET',
    url,
    headers,
  }).then((response) => res.json(response.data))
})

router.route('/job/:job').get((req, res) => {
  const { job } = req.params
  let code = null

  it.forEach((el) => {
    if (el.name === job) {
      code = el.code
    }
  })

  if (!code) {
    res.status(404).send('존재하지 않는 직무입니다.')
  }

  const url = URL + `&job_cd=${code}`

  axios({
    method: 'GET',
    url,
    headers,
  }).then((response) => res.json(response.data))
})

router.route('/').post((req, res) => {
  const { keywords, loc_cd, sort } = req.body

  const url =
    URL +
    (keywords ? `&keywords=${encodeURI(keywords)}` : '') +
    (loc_cd ? `&loc_cd=${loc_cd}` : '') +
    (sort ? `&sort=${sort}` : '')

  console.log(url)

  axios({
    method: 'GET',
    url,
    headers,
  }).then((response) => res.json(response.data))
})

module.exports = router
