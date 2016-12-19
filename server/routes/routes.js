const express =  require('express');
const app = express();
var ytdlCore = require('ytdl-core');

// bundle our routes
var apiRoutes = express.Router();

/* GET home page. */
apiRoutes.get('/', function(req, res, next) {
  res.send("API HOME PAGE");
});

apiRoutes.get('/get',function(req,res,next){
  var url = req.query.video_url;
  if(url!=null)
  {
    ytdlCore.getInfo(url, function(err, info) {
      if(err){
        //console.log("error");
      }
      else {
        //console.log(info);
        res.json({data:info,error:null});
      }
    });
  }
  else{
    res.json({data:null,error:"No url provided!",});
  }
});

// connect the api routes under /api/*
//app.use('/api', apiRoutes);
module.exports = apiRoutes;
