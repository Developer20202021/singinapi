const mongoose = require("mongoose");
const SingUpSchema = require("./SingupSchema");





const SingUpModel = mongoose.model('user', SingUpSchema);




module.exports = SingUpModel;