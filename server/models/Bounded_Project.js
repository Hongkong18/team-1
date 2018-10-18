const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const bounded_projectSchema = new mongoose.Schema({
	name: {
        type: String,
        required: "You must provide a name"
	},
	brief_description: {
		type: String,
		required: "You must provide a description"
	},
	full_description: {
		type: String,
		required: "You must supply a full_description"
	},
	address: {
		type: String,
		required: "Your supply an address"
	},
	date: {
        type: JSON,
		to: {
            type: Date
        },
        from: {
            type: Date
        }
	}
});

// reviewSchema.pre("find", autopopulate);
// reviewSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Bounded_Project", bounded_projectSchema);
