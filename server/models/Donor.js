const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const donor = new mongoose.Schema({
	name: {
        type: String,
        required: "You must provide a name"
	},
	email: String,
	phone: Number,
	amount: [Number]
});

// reviewSchema.pre("find", autopopulate);
// reviewSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Donor", donor);
