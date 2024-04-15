const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const unloginedRouter = require('./routes/unlogined');

const app = express();
app.set('port',process.env.PORT || 5000);

app.set("view engine", "ejs");

//추가 로그 보기
app.use(morgan('dev'));

//정적 요소 접근
//실제 서버의 폴더 경로에는 public이 있지만 요청 주소에는 public이 없다
app.use('/',express.static(path.join(__dirname,'public')));

//요청의 본문에 있는 데이터를 해석해서 req.body로 만들어주는 미들웨어
//https://velog.io/@jejualrock/TIL-Node.js-express.json-%EA%B3%BC-express.urlencoded-%EC%9D%98-%EC%B0%A8%EC%9D%B4
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:process.env.COOKIE_SECRET,
  cookie:{
    httpOnly:true,
    secure:false,
  },
  name:'session-cookie',
}));
//store라는 옵션도 있음
//세션 정보를 메모리가 아니라 데이터베이스에 저장하도록 하는 것
//레디스가 자주 쓰임

app.use('/',indexRouter);
app.use('/unlogined',unloginedRouter);
app.use('/user',userRouter);


app.listen(app.get('port'), ()=>{
  console.log(app.get('port'),'번 포트에서 대기중');
})