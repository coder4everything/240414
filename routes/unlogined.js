const express = require('express');
const router = express.Router();

const {Op} = require('sequelize');

const Address = require('../models/Address')

router.route('/')
.get((req,res) => {
  res.render("../views/unlogined");
})
.post(async (req,res, next) => {
  try{
    latitudeValue = req.body.latitude;
    longitudeValue = req.body.longitude;

    const address = await Address.findAll({
      where:{
        latitude: {
          [Op.between]: [latitudeValue - 0.01, latitudeValue + 0.01]
        },
        longitude : {
          [Op.between]: [longitudeValue - 0.01, longitudeValue + 0.01]
        }
      }
    });
    res.json(address);
  }catch(err){
    console.error(err);
    next(err);
  }
});



module.exports = router