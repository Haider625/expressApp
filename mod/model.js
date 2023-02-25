const mongoos = require('mongoose');

const products = mongoos.Schema({
name : String  ,
country : String ,
typeLost : String ,
lssuer : String ,
YersLost : Date ,
historyLost : Date,
PhoneNumber : Number,
notes : String,
})

module.exports = mongoos.model('PRODUCTS',products);