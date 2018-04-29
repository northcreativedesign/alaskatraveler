const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.use(express.static('assets'))

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layouts', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');


app.get("/", function(req, res){
  res.render("landing", {title: 'Alaska Traveler'});
});

app.get("/alaskainterior", function(req, res){
  res.render("interior", {title: 'Alaska Traveler | Alaska Interior Region'});
});

app.listen(process.env.PORT || 8000, function(){
  console.log(`The Alaska Travler Server Has Started`);
});
