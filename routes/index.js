const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
  res.send('Hello, Express');
  //로그인 세션이 없는 경우 unlogined로
  //로그인 세션이 있는 경우 main으로
})


router.post('/main',(req,res) => {
  req.session.name = req.body.id;
  console.log(req.sessionID);
  res.render('../views/main');

})

module.exports = router