import {mongoose , Schema } from "mongoose";

//Product Schema
const productSchema = new Schema({
    name: {
     type : String,
     isRequired : true
    },
    desc: {
        type: String
    },
    category_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Product_Category'
    },
    inventory_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product_Inventory'
    },
    price : {
        type : Number,
        isRequired : true
    },
    discount_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Discount'
    },
},
{timestamps: true}
)
const Product = mongoose.model("Product", productSchema)

//Product Category Schema
const productCategorySchema = new Schema({
    name : {
        type : String
    },
    desc : {
        type : String
}
},{timestamps : true})

const ProductCategory = mongoose.model("Product_Category", productCategorySchema)

//Product Inventory Schema
const productInventorySchema = new Schema({
    quantity : {
        type: Number,
        isRequired: true
    }
},{timestamps : true})
const ProductInventory = mongoose.model("Product_Inventory", productInventorySchema)

//Discount Schema
const discountSchema = new Schema({
    name : {
        type : String
    },
    desc : {
        type : String
    },
    discount_percent : {
        type : Number
    },
    active : {
        type : Boolean
    }
},{timestamps : true})
const Discount = mongoose.model("Discount", discountSchema)
