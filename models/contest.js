import mongoose from "mongoose";

const constestSchema = mongoose.Schema({
    name: {type:String,required:true},
    resourceId: {type: Number, required: true},
    start: {type: Number,required: true},
    end: {type: Number,required:true},
    duration: {type: Number, required: true},
    link: {type:String,required:true}
});

export default mongoose.model("Contest",constestSchema);

