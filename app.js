var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver').v1;

var app = express();

//View Engine 
app.set('views',path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'neo'));
var session = driver.session();

app.get('/',function(req, res){
session
.run('MATCH(n:City) RETURN n LIMIT 25')
.then(function(result){
var cityArr = [];
result.records.forEach(function(record){
cityArr.push({
id: record._fields[0].identity.low,
name: record._fields[0].properties.name
});
});
res.render('index',{
cities:cityArr
});
})
.catch(function(err){
console.log(err);
});

});

app.get('/index1',function(req, res){
session
.run('MATCH (n:Hotel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Iwannina"}) return n')
.then(function(result1){
hotelArr = [];
result1.records.forEach(function(record){
hotelArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
category: record._fields[0].properties.category,
roomscat: record._fields[0].properties.roomscategory,
roomsaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel,
num:      record._fields[0].properties.rooms
});
});

session
.run('MATCH (n:Museum),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Iwannina"}) return n')
.then(function(result2){
musArr = [];
result2.records.forEach(function(record){
musArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
musaddr: record._fields[0].properties.address,
price:      record._fields[0].properties.price
});
});

session
.run('MATCH (n:Rent),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Iwannina"}) return n')
.then(function(result3){
rentArr = [];
result3.records.forEach(function(record){
rentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
rentaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel
});
});

session
.run('MATCH (n:Sights),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Iwannina"}) return n')
.then(function(result4){
sightArr = [];
result4.records.forEach(function(record){
sightArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
sightaddr: record._fields[0].properties.address											
});
});

session
.run('MATCH (n:Travel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Iwannina"}) return n')
.then(function(result5){
travArr = [];
result5.records.forEach(function(record){
travArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
travaddr: record._fields[0].properties.address,
tel: record._fields[0].properties.tel											
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651094380"}) return n')
.then(function(result6){
carArr = [];
result6.records.forEach(function(record){
carArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651032988"}) return n')
.then(function(result7){
carArr1 = [];
result7.records.forEach(function(record){
carArr1.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651046333"}) return n')
.then(function(result8){
carArr2 = [];
result8.records.forEach(function(record){
carArr2.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651043901"}) return n')
.then(function(result9){
carArr3 = [];
result9.records.forEach(function(record){
carArr3.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651078400"}) return n')
.then(function(result10){
carArr4 = [];
result10.records.forEach(function(record){
carArr4.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});

session	
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"6945638388"}) return n')
.then(function(result11){
carArr5 = [];
result11.records.forEach(function(record){
carArr5.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651110102"}) return n')
.then(function(result12){
carArr6 = [];
result12.records.forEach(function(record){
carArr6.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651044836"}) return n')
.then(function(result13){
carArr7 = [];
result13.records.forEach(function(record){
carArr7.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651047444"}) return n')
.then(function(result14){
carArr8 = [];
result14.records.forEach(function(record){
carArr8.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651020000"}) return n')
.then(function(result15){
carArr9 = [];
result15.records.forEach(function(record){
carArr9.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651094380"}) return n')
.then(function(result16){
motArr = [];
result16.records.forEach(function(record){
motArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651032988"}) return n')
.then(function(result17){
motArr1 = [];
result17.records.forEach(function(record){
motArr1.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651046333"}) return n')
.then(function(result18){
motArr2 = [];
result18.records.forEach(function(record){
motArr2.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651043901"}) return n')
.then(function(result19){
motArr3 = [];
result19.records.forEach(function(record){
motArr3.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651078400"}) return n')
.then(function(result20){
motArr4 = [];
result20.records.forEach(function(record){
motArr4.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"6945638388"}) return n')
.then(function(result21){
motArr5 = [];
result21.records.forEach(function(record){
motArr5.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651110102"}) return n')
.then(function(result22){
motArr6 = [];
result22.records.forEach(function(record){
motArr6.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651044836"}) return n')
.then(function(result23){
motArr7 = [];
result23.records.forEach(function(record){
motArr7.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651047444"}) return n')
.then(function(result24){
motArr8 = [];
result24.records.forEach(function(record){
motArr8.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2651020000"}) return n')
.then(function(result25){
motArr9 = [];
result25.records.forEach(function(record){
motArr9.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('Match (n:Routes) WHERE n.Apo="Iwannina" OR n.To = "Iwannina" return n')
.then(function(result26){
routeArr = [];
result26.records.forEach(function(record){
routeArr.push({
id:record._fields[0].identity.low,
from:record._fields[0].properties.Apo,
to:record._fields[0].properties.To,
company:record._fields[0].properties.Company,
day:record._fields[0].properties.day,
hours:record._fields[0].properties.Hours,
kind:record._fields[0].properties.kind,
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Pamvotis Travel"}) return n')
.then(function(result27){
tripArr = [];
result27.records.forEach(function(record){
tripArr.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Kassaros Travel"}) return n')
.then(function(result28){
tripArr1 = [];
result28.records.forEach(function(record){
tripArr1.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Fairways Club"}) return n')
.then(function(result29){
tripArr2 = [];
result29.records.forEach(function(record){
tripArr2.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Joleko"}) return n')
.then(function(result30){
tripArr3 = [];
result30.records.forEach(function(record){
tripArr3.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Koni Travel"}) return n')
.then(function(result31){
tripArr4 = [];
result31.records.forEach(function(record){
tripArr4.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Packet),(c:Trips),(v:Travel),(d:City) WHERE (n)-[:BELONGS]-(c) AND (c)-[:BELONGS]-(v) AND (v)-[:LOCATED]-(d{name:"Iwannina"}) return n')
.then(function(result32){
packArr = [];
result32.records.forEach(function(record){
packArr.push({
id:record._fields[0].identity.low,
pack:record._fields[0].properties.Packet,
person:record._fields[0].properties.NumberPersons,																																																																																																																					
price:record._fields[0].properties.Price
});
});

session
.run('MATCH (n:Hotel),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Iwannina"}) return n')
.then(function(result33){
coopHotArr = [];
result33.records.forEach(function(record){
coopHotArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});

session
.run('MATCH (n:Rent),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Iwannina"}) return n')
.then(function(result34){
coopRentArr = [];
result34.records.forEach(function(record){
coopRentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});
res.render('index1',{
hotels:hotelArr,
museums:musArr,
rents:rentArr,
sights:sightArr,
travels:travArr,
cars:carArr,
cars1:carArr1,
cars2:carArr2,
cars3:carArr3,
cars4:carArr4,
cars5:carArr5,
cars6:carArr6,
cars7:carArr7,
cars8:carArr8,
cars9:carArr9,
motor:motArr,
motor1:motArr1,
motor2:motArr2,
motor3:motArr3,
motor4:motArr4,
motor5:motArr5,
motor6:motArr6,
motor7:motArr7,
motor8:motArr8,
motor9:motArr9,
routes:routeArr,
trips:tripArr,
trips1:tripArr1,
trips2:tripArr2,
trips3:tripArr3,
trips4:tripArr4,
packets:packArr,
coopers:coopHotArr,
coopers1:coopRentArr
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
condole.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});

})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});

})
.catch(function(err){
console.log(err);
});
});


app.post('/Reservations/add',function(req,res){
var resnumm = parseInt((Math.random() * 100000), 10);
var resnum = resnumm.toString();
var fname = req.body.fname;
var lname = req.body.lname;
var mail = req.body.mail;
var phone = req.body.phone;
var hotname = req.body.hotname;
var htype = req.body.htype;
var rnum =req.body.rnum;
var chkin = req.body.chkin;
var chkout =req.body.chkout;
var gnum = req.body.gnum;

session
.run('CREATE (n:Reservations{resnum:{resnumParam},fname:{fnameParam},lname:{lnameParam},mail:{mailParam},phone:{phoneParam},hotname:{hotnameParam},htype:{htypeParam},rnum:{rnumParam},chkin:{chkinParam},chkout:{chkoutParam},gnum:{gnumParam}}) RETURN n',{resnumParam:resnum,fnameParam:fname,lnameParam:lname,mailParam:mail,phoneParam:phone,hotnameParam:hotname,htypeParam:htype,rnumParam:rnum,chkinParam:chkin,chkoutParam:chkout,gnumParam:gnum})
.then(function(result){
res.redirect('/');
session.close();
})
.catch(function(err){
console.log(err);
});

res.redirect('/');
});
app.post('/Reservations/remove',function(req,res){
var fname1 = req.body.fname1;
var lname1= req.body.lname1;
var resnum1 =req.body.resnum1;

session
.run('MATCH (n:Reservations{fname:{fname1Param},lname:{lname1Param},resnum:{resnum1Param}}) DELETE n ',{fname1Param:fname1,lname1Param:lname1,resnum1Param:resnum1})
.then(function(result){
res.redirect('/');
session.close();
})
.catch(function(err){
console.log(err);
});

res.redirect('/');
});
app.post('/Carres/add',function(req,res){
var resnumm1 = parseInt((Math.random() * 100000), 10);
var resnum3 = resnumm1.toString();
var fname2 = req.body.fname2;
var lname2 = req.body.lname2;
var mail1 =req.body.mail1;
var cmpname = req.body.cmpname;
var cmchoose = req.body.cmchoose;
var vehnum =req.body.vehnum;
var din = req.body.din;
var dout = req.body.dout;


session
.run('CREATE (n:Carres{resnum:{resnum3Param},fname:{fname2Param},lname:{lname2Param},email:{mail1Param},cmpname:{cmpnameParam},cmchoose:{cmchooseParam},vehnum:{vehnumParam},dayin:{dinParam},dayout:{doutParam}}) RETURN n',{resnum3Param:resnum3,fname2Param:fname2,lname2Param:lname2,mail1Param:mail1,cmpnameParam:cmpname,cmchooseParam:cmchoose,vehnumParam:vehnum,dinParam:din,doutParam:dout})
.then(function(result){
res.redirect('/');
session.close();
})
.catch(function(err){
console.log(err);
});

res.redirect('/');
});
app.post('/Carres/remove',function(req,res){
var fname3 = req.body.fname3;
var lname3= req.body.lname3;
var resnum2= req.body.resnum2;

session
.run('MATCH (n:Carres{fname:{fname3Param},lname:{lname3Param},resnum:{resnum2Param}}) DELETE n ',{fname3Param:fname3,lname3Param:lname3,resnum2Param:resnum2})
.then(function(result){
res.redirect('/');
session.close();
})
.catch(function(err){
console.log(err);
});

res.redirect('/');
});

app.get('/index2',function(req, res){
session
.run('MATCH (n:Hotel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Thesprotia"}) return n')
.then(function(tresult1){
thotelArr = [];
tresult1.records.forEach(function(record){
thotelArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
category: record._fields[0].properties.category,
roomscat: record._fields[0].properties.roomscategory,
roomsaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel,
num:      record._fields[0].properties.rooms
});
});

session
.run('MATCH (n:Museum),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Thesprotia"}) return n')
.then(function(tresult2){
tmusArr = [];
tresult2.records.forEach(function(record){
tmusArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
musaddr: record._fields[0].properties.address,
price:      record._fields[0].properties.price
});
});

session
.run('MATCH (n:Rent),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Thesprotia"}) return n')
.then(function(tresult3){
trentArr = [];
tresult3.records.forEach(function(record){
trentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
rentaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel
});
});

session
.run('MATCH (n:Sights),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Thesprotia"}) return n')
.then(function(tresult4){
tsightArr = [];
tresult4.records.forEach(function(record){
tsightArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
sightaddr: record._fields[0].properties.address											
});
});

session
.run('MATCH (n:Travel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Thesprotia"}) return n')
.then(function(tresult5){
ttravArr = [];
tresult5.records.forEach(function(record){
ttravArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
travaddr: record._fields[0].properties.address,
tel: record._fields[0].properties.tel											
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665097536"}) return n')
.then(function(tresult6){
tcarArr = [];
tresult6.records.forEach(function(record){
tcarArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665027137"}) return n')
.then(function(tresult7){
tcarArr1 = [];
tresult7.records.forEach(function(record){
tcarArr1.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665306765"}) return n')
.then(function(tresult8){
tcarArr2 = [];
tresult8.records.forEach(function(record){
tcarArr2.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665093454"}) return n')
.then(function(tresult9){
tcarArr3 = [];
tresult9.records.forEach(function(record){
tcarArr3.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665027999"}) return n')
.then(function(tresult10){
tcarArr4 = [];
tresult10.records.forEach(function(record){
tcarArr4.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});

session	
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665023796"}) return n')
.then(function(tresult11){
tcarArr5 = [];
tresult11.records.forEach(function(record){
tcarArr5.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665023881"}) return n')
.then(function(tresult12){
tcarArr6 = [];
tresult12.records.forEach(function(record){
tcarArr6.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665024569"}) return n')
.then(function(tresult13){
tcarArr7 = [];
tresult13.records.forEach(function(record){
tcarArr7.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665027666"}) return n')
.then(function(tresult14){
tcarArr8 = [];
tresult14.records.forEach(function(record){
tcarArr8.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665025277"}) return n')
.then(function(tresult15){
tcarArr9 = [];
tresult15.records.forEach(function(record){
tcarArr9.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665097536"}) return n')
.then(function(tresult16){
tmotArr = [];
tresult16.records.forEach(function(record){
tmotArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665027137"}) return n')
.then(function(tresult17){
tmotArr1 = [];
tresult17.records.forEach(function(record){
tmotArr1.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665306765"}) return n')
.then(function(tresult18){
tmotArr2 = [];
tresult18.records.forEach(function(record){
tmotArr2.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665093454"}) return n')
.then(function(tresult19){
tmotArr3 = [];
tresult19.records.forEach(function(record){
tmotArr3.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665027999"}) return n')
.then(function(tresult20){
tmotArr4 = [];
tresult20.records.forEach(function(record){
tmotArr4.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665023796"}) return n')
.then(function(tresult21){
tmotArr5 = [];
tresult21.records.forEach(function(record){
tmotArr5.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665023881"}) return n')
.then(function(tresult22){
tmotArr6 = [];
tresult22.records.forEach(function(record){
tmotArr6.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665024569"}) return n')
.then(function(tresult23){
tmotArr7 = [];
tresult23.records.forEach(function(record){
tmotArr7.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665027666"}) return n')
.then(function(tresult24){
tmotArr8 = [];
tresult24.records.forEach(function(record){
tmotArr8.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2665025277"}) return n')
.then(function(tresult25){
tmotArr9 = [];
tresult25.records.forEach(function(record){
tmotArr9.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('Match (n:Routes) WHERE n.Apo="Igoumenitsa" OR n.To = "Igoumenitsa" return n')
.then(function(tresult26){
trouteArr = [];
tresult26.records.forEach(function(record){
trouteArr.push({
id:record._fields[0].identity.low,
from:record._fields[0].properties.Apo,
to:record._fields[0].properties.To,
company:record._fields[0].properties.Company,
day:record._fields[0].properties.day,
hours:record._fields[0].properties.Hours,
kind:record._fields[0].properties.kind,
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Euroline"}) return n')
.then(function(tresult27){
ttripArr = [];
tresult27.records.forEach(function(record){
ttripArr.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Oscar Travel"}) return n')
.then(function(tresult28){
ttripArr1 = [];
tresult28.records.forEach(function(record){
ttripArr1.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Kotsis Travel"}) return n')
.then(function(tresult29){
ttripArr2 = [];
tresult29.records.forEach(function(record){
ttripArr2.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Aquarious Travel"}) return n')
.then(function(tresult30){
ttripArr3 = [];
tresult30.records.forEach(function(record){
ttripArr3.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Revis Travel"}) return n')
.then(function(tresult31){
ttripArr4 = [];
tresult31.records.forEach(function(record){
ttripArr4.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Packet),(c:Trips),(v:Travel),(d:City) WHERE (n)-[:BELONGS]-(c) AND (c)-[:BELONGS]-(v) AND (v)-[:LOCATED]-(d{name:"Thesprotia"}) return n')
.then(function(tresult32){
tpackArr = [];
tresult32.records.forEach(function(record){
tpackArr.push({
id:record._fields[0].identity.low,
pack:record._fields[0].properties.Packet,
person:record._fields[0].properties.NumberPersons,																																																																																																																					
price:record._fields[0].properties.Price
});
});

session
.run('MATCH (n:Hotel),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Thesprotia"}) return n')
.then(function(tresult33){
tcoopHotArr = [];
tresult33.records.forEach(function(record){
tcoopHotArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});

session
.run('MATCH (n:Rent),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Thesprotia"}) return n')
.then(function(tresult34){
tcoopRentArr = [];
tresult34.records.forEach(function(record){
tcoopRentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});
res.render('index2',{
thotels:thotelArr,
tmuseums:tmusArr,
trents:trentArr,
tsights:tsightArr,
ttravels:ttravArr,
tcars:tcarArr,
tcars1:tcarArr1,
tcars2:tcarArr2,
tcars3:tcarArr3,
tcars4:tcarArr4,
tcars5:tcarArr5,
tcars6:tcarArr6,
tcars7:tcarArr7,
tcars8:tcarArr8,
tcars9:tcarArr9,
tmotor:tmotArr,
tmotor1:tmotArr1,
tmotor2:tmotArr2,
tmotor3:tmotArr3,
tmotor4:tmotArr4,
tmotor5:tmotArr5,
tmotor6:tmotArr6,
tmotor7:tmotArr7,
tmotor8:tmotArr8,
tmotor9:tmotArr9,
troutes:trouteArr,
ttrips:ttripArr,
ttrips1:ttripArr1,
ttrips2:ttripArr2,
ttrips3:ttripArr3,
ttrips4:ttripArr4,
tpackets:tpackArr,
tcoopers:tcoopHotArr,
tcoopers1:tcoopRentArr
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
condole.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});

})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});

})
.catch(function(err){
console.log(err);
});
});

app.get('/index3',function(req, res){
session
.run('MATCH (n:Hotel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Preveza"}) return n')
.then(function(result1){
hotelArr = [];
result1.records.forEach(function(record){
hotelArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
category: record._fields[0].properties.category,
roomscat: record._fields[0].properties.roomscategory,
roomsaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel,
num:      record._fields[0].properties.rooms
});
});

session
.run('MATCH (n:Museum),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Preveza"}) return n')
.then(function(result2){
musArr = [];
result2.records.forEach(function(record){
musArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
musaddr: record._fields[0].properties.address,
price:      record._fields[0].properties.price
});
});

session
.run('MATCH (n:Rent),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Preveza"}) return n')
.then(function(result3){
rentArr = [];
result3.records.forEach(function(record){
rentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
rentaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel
});
});

session
.run('MATCH (n:Sights),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Preveza"}) return n')
.then(function(result4){
sightArr = [];
result4.records.forEach(function(record){
sightArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
sightaddr: record._fields[0].properties.address											
});
});

session
.run('MATCH (n:Travel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Preveza"}) return n')
.then(function(result5){
travArr = [];
result5.records.forEach(function(record){
travArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
travaddr: record._fields[0].properties.address,
tel: record._fields[0].properties.tel											
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2682024124"}) return n')
.then(function(result6){
carArr = [];
result6.records.forEach(function(record){
carArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2106879800"}) return n')
.then(function(result7){
carArr1 = [];
result7.records.forEach(function(record){
carArr1.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2682021555"}) return n')
.then(function(result8){
carArr2 = [];
result8.records.forEach(function(record){
carArr2.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2130213120"}) return n')
.then(function(result9){
carArr3 = [];
result9.records.forEach(function(record){
carArr3.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"6942473231"}) return n')
.then(function(result10){
carArr4 = [];
result10.records.forEach(function(record){
carArr4.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});




session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2682024124"}) return n')
.then(function(result16){
motArr = [];
result16.records.forEach(function(record){
motArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2106879800"}) return n')
.then(function(result17){
motArr1 = [];
result17.records.forEach(function(record){
motArr1.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2682021555"}) return n')
.then(function(result18){
motArr2 = [];
result18.records.forEach(function(record){
motArr2.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2130213120"}) return n')
.then(function(result19){
motArr3 = [];
result19.records.forEach(function(record){
motArr3.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"6942473231"}) return n')
.then(function(result20){
motArr4 = [];
result20.records.forEach(function(record){
motArr4.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});



session
.run('Match (n:Routes) WHERE n.Apo="Preveza" OR n.To = "Preveza" return n')
.then(function(result26){
routeArr = [];
result26.records.forEach(function(record){
routeArr.push({
id:record._fields[0].identity.low,
from:record._fields[0].properties.Apo,
to:record._fields[0].properties.To,
company:record._fields[0].properties.Company,
day:record._fields[0].properties.day,
hours:record._fields[0].properties.Hours,
kind:record._fields[0].properties.kind,
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Kiss Travel"}) return n')
.then(function(result27){
tripArr = [];
result27.records.forEach(function(record){
tripArr.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Malizoglou Tours"}) return n')
.then(function(result28){
tripArr1 = [];
result28.records.forEach(function(record){
tripArr1.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Katsavaros Travel Agency"}) return n')
.then(function(result29){
tripArr2 = [];
result29.records.forEach(function(record){
tripArr2.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Kosmas Tours"}) return n')
.then(function(result30){
tripArr3 = [];
result30.records.forEach(function(record){
tripArr3.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Events Management"}) return n')
.then(function(result31){
tripArr4 = [];
result31.records.forEach(function(record){
tripArr4.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Packet),(c:Trips),(v:Travel),(d:City) WHERE (n)-[:BELONGS]-(c) AND (c)-[:BELONGS]-(v) AND (v)-[:LOCATED]-(d{name:"Preveza"}) return n')
.then(function(result32){
packArr = [];
result32.records.forEach(function(record){
packArr.push({
id:record._fields[0].identity.low,
pack:record._fields[0].properties.Packet,
person:record._fields[0].properties.NumberPersons,																																																																																																																					
price:record._fields[0].properties.Price
});
});

session
.run('MATCH (n:Hotel),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Preveza"}) return n')
.then(function(result33){
coopHotArr = [];
result33.records.forEach(function(record){
coopHotArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});

session
.run('MATCH (n:Rent),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Preveza"}) return n')
.then(function(result34){
coopRentArr = [];
result34.records.forEach(function(record){
coopRentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});
res.render('index3',{
hotels:hotelArr,
museums:musArr,
rents:rentArr,
sights:sightArr,
travels:travArr,
cars:carArr,
cars1:carArr1,
cars2:carArr2,
cars3:carArr3,
cars4:carArr4,
motor:motArr,
motor1:motArr1,
motor2:motArr2,
motor3:motArr3,
motor4:motArr4,
routes:routeArr,
trips:tripArr,
trips1:tripArr1,
trips2:tripArr2,
trips3:tripArr3,
trips4:tripArr4,
packets:packArr,
coopers:coopHotArr,
coopers1:coopRentArr
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
condole.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});

})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});

});

app.get('/index4',function(req, res){
session
.run('MATCH (n:Hotel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Arta"}) return n')
.then(function(result1){
hotelArr = [];
result1.records.forEach(function(record){
hotelArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
category: record._fields[0].properties.category,
roomscat: record._fields[0].properties.roomscategory,
roomsaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel,
num:      record._fields[0].properties.rooms
});
});

session
.run('MATCH (n:Museum),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Arta"}) return n')
.then(function(result2){
musArr = [];
result2.records.forEach(function(record){
musArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
musaddr: record._fields[0].properties.address,
price:      record._fields[0].properties.price
});
});

session
.run('MATCH (n:Rent),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Arta"}) return n')
.then(function(result3){
rentArr = [];
result3.records.forEach(function(record){
rentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
rentaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel
});
});

session
.run('MATCH (n:Sights),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Arta"}) return n')
.then(function(result4){
sightArr = [];
result4.records.forEach(function(record){
sightArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
sightaddr: record._fields[0].properties.address											
});
});

session
.run('MATCH (n:Travel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Arta"}) return n')
.then(function(result5){
travArr = [];
result5.records.forEach(function(record){
travArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
travaddr: record._fields[0].properties.address,
tel: record._fields[0].properties.tel											
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2681051177"}) return n')
.then(function(result6){
carArr = [];
result6.records.forEach(function(record){
carArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2681051177"}) return n')
.then(function(result16){
motArr = [];
result16.records.forEach(function(record){
motArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Houliaras Tours"}) return n')
.then(function(result27){
tripArr = [];
result27.records.forEach(function(record){
tripArr.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Airnet Travel"}) return n')
.then(function(result28){
tripArr1 = [];
result28.records.forEach(function(record){
tripArr1.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Mandalos Tours"}) return n')
.then(function(result29){
tripArr2 = [];
result29.records.forEach(function(record){
tripArr2.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});


session
.run('MATCH (n:Packet),(c:Trips),(v:Travel),(d:City) WHERE (n)-[:BELONGS]-(c) AND (c)-[:BELONGS]-(v) AND (v)-[:LOCATED]-(d{name:"Arta"}) return n')
.then(function(result32){
packArr = [];
result32.records.forEach(function(record){
packArr.push({
id:record._fields[0].identity.low,
pack:record._fields[0].properties.Packet,
person:record._fields[0].properties.NumberPersons,																																																																																																																					
price:record._fields[0].properties.Price
});
});

session
.run('MATCH (n:Hotel),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Arta"}) return n')
.then(function(result33){
coopHotArr = [];
result33.records.forEach(function(record){
coopHotArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});

session
.run('MATCH (n:Rent),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Arta"}) return n')
.then(function(result34){
coopRentArr = [];
result34.records.forEach(function(record){
coopRentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});
res.render('index4',{
hotels:hotelArr,
museums:musArr,
rents:rentArr,
sights:sightArr,
travels:travArr,
cars:carArr,
motor:motArr,
trips:tripArr,
trips1:tripArr1,
trips2:tripArr2,
packets:packArr,
coopers:coopHotArr,
coopers1:coopRentArr
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
condole.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});

});
app.get('/index5',function(req, res){
session
.run('MATCH (n:Hotel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Parga"}) return n')
.then(function(result1){
hotelArr = [];
result1.records.forEach(function(record){
hotelArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
category: record._fields[0].properties.category,
roomscat: record._fields[0].properties.roomscategory,
roomsaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel,
num:      record._fields[0].properties.rooms
});
});

session
.run('MATCH (n:Museum),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Parga"}) return n')
.then(function(result2){
musArr = [];
result2.records.forEach(function(record){
musArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
musaddr: record._fields[0].properties.address,
price:      record._fields[0].properties.price
});
});

session
.run('MATCH (n:Rent),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Parga"}) return n')
.then(function(result3){
rentArr = [];
result3.records.forEach(function(record){
rentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
rentaddr: record._fields[0].properties.address,
tel:      record._fields[0].properties.tel
});
});

session
.run('MATCH (n:Sights),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Parga"}) return n')
.then(function(result4){
sightArr = [];
result4.records.forEach(function(record){
sightArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
sightaddr: record._fields[0].properties.address											
});
});

session
.run('MATCH (n:Travel),(c:City) WHERE (n)-[:LOCATED]-(c{name:"Parga"}) return n')
.then(function(result5){
travArr = [];
result5.records.forEach(function(record){
travArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name,
travaddr: record._fields[0].properties.address,
tel: record._fields[0].properties.tel											
});
});


session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2684032584"}) return n')
.then(function(result6){
carArr = [];
result6.records.forEach(function(record){
carArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});
session
.run('MATCH (n:Carrent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2684032732"}) return n')
.then(function(result7){
carArr1 = [];
result7.records.forEach(function(record){
carArr1.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
seats:record._fields[0].properties.seats,
costday:record._fields[0].properties.costday
});
});


session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2684032584"}) return n')
.then(function(result16){
motArr = [];
result16.records.forEach(function(record){
motArr.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});
session
.run('MATCH (n:Motorent),(c:Rent) WHERE (n)-[:BELONGS]-(c{tel:"2684032732"}) return n')
.then(function(result17){
motArr1 = [];
result17.records.forEach(function(record){
motArr1.push({
id:record._fields[0].identity.low,
number:record._fields[0].properties.number,
category:record._fields[0].properties.category,
cubic:record._fields[0].properties.cubic,
costday:record._fields[0].properties.costday
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Parga Holidays"}) return n')
.then(function(result27){
tripArr = [];
result27.records.forEach(function(record){
tripArr.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});

session
.run('MATCH (n:Trips),(c:Travel) WHERE (n) - [:BELONGS] - (c{name:"Its Services"}) return n')
.then(function(result28){
tripArr1 = [];
result28.records.forEach(function(record){
tripArr1.push({
id:record._fields[0].identity.low,
code:record._fields[0].properties.Codetrip,
start:record._fields[0].properties.Starpoint,
dest:record._fields[0].properties.Destination,																																																										
hours:record._fields[0].properties.Hours,																																																
price:record._fields[0].properties.price
});
});



session
.run('MATCH (n:Packet),(c:Trips),(v:Travel),(d:City) WHERE (n)-[:BELONGS]-(c) AND (c)-[:BELONGS]-(v) AND (v)-[:LOCATED]-(d{name:"Parga"}) return n')
.then(function(result32){
packArr = [];
result32.records.forEach(function(record){
packArr.push({
id:record._fields[0].identity.low,
pack:record._fields[0].properties.Packet,
person:record._fields[0].properties.NumberPersons,																																																																																																																					
price:record._fields[0].properties.Price
});
});

session
.run('MATCH (n:Hotel),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Parga"}) return n')
.then(function(result33){
coopHotArr = [];
result33.records.forEach(function(record){
coopHotArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});

session
.run('MATCH (n:Rent),(t:Travel), (c:City) WHERE (t)-[:COOPERATES]-(n) AND (n)-[:LOCATED]-(c{name:"Parga"}) return n')
.then(function(result34){
coopRentArr = [];
result34.records.forEach(function(record){
coopRentArr.push({
id:record._fields[0].identity.low,
name: record._fields[0].properties.name

});
});
res.render('index5',{
hotels:hotelArr,
museums:musArr,
rents:rentArr,
sights:sightArr,
travels:travArr,
cars:carArr,
cars1:carArr1,
motor:motArr,
motor1:motArr1,
trips:tripArr,
trips1:tripArr1,
packets:packArr,
coopers:coopHotArr,
coopers1:coopRentArr
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
condole.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});
})
.catch(function(err){
console.log(err);
});

});

app.listen(3000);
console.log('Server Started on port 3000');

module.exports = app;