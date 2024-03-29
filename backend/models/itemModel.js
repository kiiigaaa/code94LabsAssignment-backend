const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    SKU: {
        type: String,
        
    },
    
    name: {
        type: String,
        
    },
    price: {
        type: String,
    },
    images: {
        type: [String],
        
    },
    description: {
        type: String,
        
    },
    QTY: {
        type: String,
        
    },
    isFavourite: {
        type: Boolean,
        
    },
    thumbnail:{
        type: Number,
    }
}, {
    timestamps: true,
});

const item = mongoose.model("item", itemSchema);

module.exports = item;
