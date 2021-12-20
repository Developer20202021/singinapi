const mongoose = require("mongoose");
const SingUpSchema = require("./SingupSchema");





const SingupModel = mongoose.model('user', SingUpSchema);




module.exports = SingupModel;