const express = require('express');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const unloginedRouter = require('./routes/unlogined');

const app = express();
app.set('port',process.env.PORT || 5000);

app.use('/',indexRouter);
app.use('/unlogined',unloginedRouter);
app.use('/user',userRouter);


app.listen(app.get('port'), ()=>{
  console.log(app.get('port'),'번 포트에서 대기중');
})