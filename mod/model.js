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
},
{
    Pname : String  ,
    Pcountry : String ,
    Pgender : String,
    Pwaiting_Place : String,
    PhistoryLost : Date,
    PPhoneNumber : Number,
    Pnotes : String,
})

module.exports = mongoos.model('PRODUCTS',products);