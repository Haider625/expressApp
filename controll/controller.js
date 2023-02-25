
const PRODUCTS = require("../mod/model");


module.exports = {
    getall: async (req, res) => {
        const products = await PRODUCTS.find();
        res.json(products)
    },
   
    insertAll: async (req, res)  => {
        console.log(req.body.file);
        const product = await new PRODUCTS({
            name: req.body.name,
            country: req.body.country,
            typeLost: req.body.typeLost,
            lssuer: req.body.lssuer,
            YersLost: req.body.YersLost,
            historyLost: req.body.historyLost,
            PhoneNumber: req.body.PhoneNumber,
            notes: req.body.notes,
            
        }).save()
        if (product){
         res.status(200).json({"product" : product});
        }else{
            res.status(404).json({message : "post is erorr"});
        } 
        
    },
    deleteAll : async (req,res) => {
        const Id = req.params.id;
        const del = await PRODUCTS.findByIdAndDelete(Id);
        res.json({"delete" : del})
    },
    getOne : async (req,res) => {
        const Id = req.params.id;
        const Get = await PRODUCTS.findById(Id);
        res.json({"Get" : Get})
    },
    
  
}

