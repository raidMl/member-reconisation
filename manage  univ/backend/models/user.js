const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: { type: String, required: true, minlength: 3, maxlength: 200, unique: true },
    password: { type: String, required: true, minlength: 3, maxlength: 1024, },
    role: { type: String, required: true, minlength: 3, maxlength: 30, default: "student" },
    image: {
        type: String,
        required: false
    },
    faculty: { type: String, required: true, minlength: 6, maxlength: 30, },
    matricule: { type: String, required: false, minlength: 3, maxlength: 30, },
    isin: { type: Boolean, required: true, minlength:4, maxlength:5,default:false }

},


    { timestamps: true }//when data c&u
)

const User = mongoose.model("User", userSchema)
exports.User = User;