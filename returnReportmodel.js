const mongoose=require ('mongoose');

const returnSchema = new mongoose.Schema({
    billno:{
        type:Number,
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
    ]


});



module.exports = mongoose.model('return',returnSchema)
