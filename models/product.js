const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
       "pname":String,
       "pcode":String,
       "pdescrip":String,
       "prce":String,
       "category":String,
       "mnf" :String,
       "exp":String,
       "brand":String,
       "custno":String,
       "img":String,
       "drname":String
    }
)
let productsmodel=mongoose.model("products",schema);
module.exports={productsmodel}