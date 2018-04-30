const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.use(express.static('assets'))

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layouts', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');


app.get("/", function(req, res){
  res.render("landing", {title: 'Alaska Traveler'});
});

app.get("/anchorage-area", function(req, res){
  res.render("anchorage_area", {title: 'Alaska Traveler | Anchorage Area'});
});

app.get("/ketchikan-area", function(req, res){
  res.render("ketchikan_area", {title: 'Alaska Traveler | Ketchikan Area'});
});

app.get("/juneau-area", function(req, res){
  res.render("juneau_area", {title: 'Alaska Traveler | Juneau Area'});
});

app.listen(process.env.PORT || 8000, function(){
  console.log(`The Alaska Travler Server Has Started`);
});
