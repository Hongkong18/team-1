const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ongoing_project = new mongoose.Schema({
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
	volunteers: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Volunteer"
        }
	],
	staff: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Staff"
		}
	],
    keywords: [String]
});

// reviewSchema.pre("find", autopopulate);
// reviewSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Ongoing_project", ongoing_project);
