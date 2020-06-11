
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
//var MongoClient = require('mongodb').MongoClient;
var mysql = require('./dbcon1.js');
var app = express();
var port = process.env.PORT ||  7846;
var router = express.Router();

//var mongoHost = process.env.MONGO_HOST;
//var mongoPort = process.env.MONGO_PORT || 27017;
//var mongoUser = process.env.MONGO_USER;
//var mongoPassword = process.env.MONGO_PASSWORD;/
//var mongoDBName = process.env.MONGO_DB_NAME;

//var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;


var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

//app.get('/', function(req, res){
  //var collection = db.collection('home');
  //collection.find({}).toArray(function (err, gameIcons) {
   //if (err) {
    // res.status(500).send({
    //   error: "Error fetching people from DB"
    // });
   //} else {
  //   res.status(200).render('home', {
//       gameIcons: gameIcons
//     });
//   }
// });
//});

console.log('test1')

app.get('/', function(req, res, next){
  var context = {};
  context.data = {};
  mysql.pool.query("SELECT Game_Name,Main_Team,Release_Date FROM Games",  function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.data = rows;
      res.render('home', context);
  });
});

app.get('/index.html', function(req, res){
//  var collection = db.collection('home');
//  collection.find({}).toArray(function (err, gameIcons) {
//   if (err) {
//     res.status(500).send({
//       error: "Error fetching people from DB"
//     });
//   } else {
//     res.status(200).render('home', {
//       gameIcons: gameIcons
//     });
//   }
// });
});


app.get('/people', function(req, res){
  var context = {};
  context.data = {};
  mysql.pool.query("SELECT Game_Name,Main_Team,Release_Date FROM Games",  function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.data = rows;
      res.render('people', context);
  });
  // res.status(200).render('people');
});

app.get('/players/:team', function(req, res, next){

// res.status(200).render('people');
});

// router.post('/', function(req, res){
//   console.log('inside new routerpost')
//   console.log(req.body.Main_Team)
//   console.log(req.body)
//   var mysql = req.app.get('mysql');
//   var sql = "INSERT INTO Games (Game_Name, Main_Team, Release_Date) VALUES (?,?,?)";
//   var inserts = [req.body.Game_Name, req.body.Main_Team, req.body.Release_Date];
//   sql = mysql.pool.query(sql,inserts,function(error, results, fields){
//       if(error){
//           console.log(JSON.stringify(error))
//           res.write(JSON.stringify(error));
//           res.end();
//       }else{
//           console.log('redirecting to people')
//           res.redirect('/people');
//       }
//   });
// });
app.post('/join/addMember', function (req, res, next) {
  if (req.body && req.body.name && req.body.username && req.body.mainteam && req.body.year && req.body.game && req.body.gameid && req.body.playerId) {
  //  var collection = db.collection('players');
    var player = {
      name: req.body.name,
      username: req.body.username,
      mainteam: req.body.mainteam,
      year: req.body.year,
      game: req.body.game,
      gameid: req.body.gameid,
      playerId: req.body.playerId
    };
    console.log('inside new routerpost BEFORE CHANGE')
    console.log(req.body.name)
    console.log(req.body.mainteam)
    console.log(req.body.username)
    console.log(req.body)
    console.log('all together')
    console.log(player);
    // var Game_Name = req.body.name;
    // var Main_Team = req.body.mainteam;
    // var Release_Date = req.body.year;
    // var mysql = req.app.get('mysql');
    var sql = "INSERT INTO Games (Game_Name, Main_Team, Release_Date) VALUES (?,?,?)";
    //var sql2= "DELETE FROM Games WHERE Game_Name= 'Rocket League'";
    var inserts = [req.body.name, req.body.mainteam, req.body.year];
    //var inserts = [req.body.mainteam,req.body.year, req.body.name];
    sql = mysql.pool.query(sql,inserts,function(error, results, fields){
      if(error){
          console.log(JSON.stringify(error))
          res.write(JSON.stringify(error));
          res.end();
      }else{
          console.log('Insert Task completed!')
          // res.redirect('/');
      }
    });
  }
});

app.post('/people/acceptDelete', function (req, res, next) {
  if (req.body && req.body.name ) {
  //  var collection = db.collection('players');
    var player = {
      name: req.body.name,
      username: req.body.username,
      mainteam: req.body.mainteam,
      year: req.body.year,
      game: req.body.game,
      gameid: req.body.gameid,
      playerId: req.body.playerId
    };
    console.log('inside new routerpost BEFORE CHANGE')
    console.log(req.body.name)
    console.log(req.body.mainteam)
    console.log(req.body.username)
    console.log(req.body)
    console.log('all together')
    console.log(player);
    // var Game_Name = req.body.name;
    // var Main_Team = req.body.mainteam;
    // var Release_Date = req.body.year;
    // var mysql = req.app.get('mysql');
//    var sql = "DELETE FROM GAMES WHERE Game_Name= ?;";
   var sql = "DELETE FROM Games WHERE Game_Name= ? ";
    var inserts = [req.body.name];
    sql = mysql.pool.query(sql,inserts,function(error, results, fields){
      if(error){
          console.log(JSON.stringify(error))
          res.write(JSON.stringify(error));
          res.end();
      }else{
          console.log('DELETE Task completed!')
          // res.redirect('/');
      }
    });
  };
});

app.post('/people/acceptUpdate', function (req, res, next) {
  if (req.body && req.body.name && req.body.username && req.body.mainteam && req.body.year && req.body.game && req.body.gameid && req.body.playerId) {
  //  var collection = db.collection('players');
    var player = {
      name: req.body.name,
      username: req.body.username,
      mainteam: req.body.mainteam,
      year: req.body.year,
      game: req.body.game,
      gameid: req.body.gameid,
      playerId: req.body.playerId
    };
    console.log('inside new routerpost BEFORE CHANGE')
    console.log(req.body.name)
    console.log(req.body.mainteam)
    console.log(req.body.username)
    console.log(req.body)
    console.log('all together')
    console.log(player);
    // var Game_Name = req.body.name;
    // var Main_Team = req.body.mainteam;
    // var Release_Date = req.body.year;
    // var mysql = req.app.get('mysql');
    //var sql = "INSERT INTO Games (Game_Name, Main_Team, Release_Date) VALUES (?,?,?)";
    var sql2="UPDATE Games SET Main_Team=?, Release_Date=? WHERE Game_Name=? ";
    var inserts = [req.body.mainteam, req.body.year,req.body.name];
    sql = mysql.pool.query(sql2,inserts,function(error, results, fields){
      if(error){
          console.log(JSON.stringify(error))
          res.write(JSON.stringify(error));
          res.end();
      }else{
          console.log('UPDATE Task completed!')
          // res.redirect('/');
      }
    });
  }
});

app.delete('/resetPage', function (req, res, next) {
    //var collection = db.collection('players');
    if(req.body){
    }
});

app.delete('/deletePlayerCard', function (req, res, next){
  //var collection = db.collection('players');
  // if(req.body && req.body.playerId){
  //   var playerCardGone = {
  //     playerId: req.body.playerId
  //   }
  // }
});

app.get('/join', function(req, res){
  res.status(200).render('join');
});

app.get('/about', function(req, res){
  res.status(200).render('about');
});

app.get('/teams', function(req, res){
  var context = {};
  context.data = {};
  mysql.pool.query("SELECT Game_Name,Main_Team,Release_Date FROM Games",  function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.data = rows;
      res.render('teams', context);
  });
  //var collection = db.collection('roster');
  // res.status(200).render('teams');
});

app.get('*', function (req, res) {
  console.log(req.url);
  res.status(404).render('404');
});

// app.get('/people', function(req, res){
//   //var collection = db.collection('roster');
//   res.status(200).render('people');
// });
//MongoClient.connect(mongoUrl,  { useNewUrlParser: true }, function (err, client) {
//  if (err) {
//    throw err;
//  }
//  console.log("Connected to mongo");
//  db = client.db(mongoDBName);



app.listen(port, function () {
    console.log("== Server listening on port", port);
  });

// let pool = mysql.createPool(config);


/* Adds a person, redirects to the people page after adding */

// router.post('/', function(req, res){
//   console.log('inside new routerpost')
//   console.log(req.body.Main_Team)
//   console.log(req.body)
//   var mysql = req.app.get('mysql');
//   var sql = "INSERT INTO Games (Game_Name, Main_Team, Release_Date) VALUES (?,?,?)";
//   var inserts = [req.body.Game_Name, req.body.Main_Team, req.body.Release_Date];
//   sql = mysql.pool.query(sql,inserts,function(error, results, fields){
//       if(error){
//           console.log(JSON.stringify(error))
//           res.write(JSON.stringify(error));
//           res.end();
//       }else{
//           console.log('redirecting to people')
//           res.redirect('/people');
//       }
//   });
// });

// app.post('/', function (req, res, next) {
//     let context = {};
//     let PlayerToInsert = [];

//     PlayerToInsert.push(req.body.name);
//     PlayerToInsert.push(req.body.reps);
//     PlayerToInsert.push(req.body.weight);
//     PlayerToInsert.push(req.body.date);
//     PlayerToInsert.push(req.body.unit);

//     console.log("PlayerToInsert: " + PlayerToInsert);

//     // Reformat incoming date string to accept assignment requirement formatting
//     // and produce SQL date for Insert:
//     let dateIndex = 3;
//     let dateMoment = moment(PlayerToInsert[dateIndex], "MM-DD-YYYY");
//     PlayerToInsert[dateIndex] = dateMoment.format("YYYY-MM-DD");

//     pool.getConnection(function (err, connection) {
//       // SELECT Game_Name,Main_Team,Release_Date FROM Games
//         connection.query("INSERT INTO Games (Game_Name, Main_Team, Release_date) VALUES(?,?,?)"),
//         // connection.query("INSERT INTO exercises (name, reps, weight, date, unit) VALUES (?, ?, ?, ?, ?)",
//             PlayerToInsert,
//             function (err, result) {
//                 if (err) {
//                     next(err);
//                     return;
//                 }

//                 connection.release();
//                 context.results = {id: result.insertId};
//                 res.setHeader('Content-Type', 'application/json');
//                 res.send(JSON.stringify(context.results));
//             })
//     });
// });
