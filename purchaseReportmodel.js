const mongoose=require ('mongoose');

const purchaseSchema = new mongoose.Schema({
    billno:{
        type:String,
    },
    from:{
        type:Number,
    },
    to:{
        type:Number,
    },
    vendor:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"vendor"
        }
   ],

});



module.exports = mongoose.model('purchase',purchaseSchema);
