const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema 
const ItemSchema = new Schema ({
    name: {
        type: String,
        required: true 
    },
    date: {
        type: Data,
        default: Date.now
    }
});

module.exports= Item = mongoose.module('item', ItemSchema);
