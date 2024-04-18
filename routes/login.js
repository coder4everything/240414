const express = require('express');
const router = express.Router();

const {Op} = require('sequelize');


router.route('/')
.get((req,res) => {
  res.render("../views/login");
})
.post(async (req,res, next) => {
  addressIdx = req.body.addressIdx;
  console.log(addressIdx);
  res.render("../views/login",{addressIdx:addressIdx});
});



module.exports = router