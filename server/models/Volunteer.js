const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const volunteer = new mongoose.Schema({
	name: {
        type: String,
        required: "You must provide a name"
	},
	email: {
		type: String,
		required: "You must provide an email"
	},
	phone: {
		type: Number,
		required: "You must supply a contact"
    },
    skillset: [String],
	availability: [
        {
            to: {
                type: Date
            },
            from: {
                type: Date
            }
        }
    ]
});

// reviewSchema.pre("find", autopopulate);
// reviewSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Volunteer", volunteer);
