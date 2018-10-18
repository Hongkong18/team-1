const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Sponsor = new mongoose.Schema({
	name: {
        type: String,
        required: "You must provide a name"
    },
    email: String,
    phone: Number,
	bounded_projects: [
        {
            project : {
                type: mongoose.Schema.ObjectId,
                ref: "Bounded_Project"
            },
            amount : {
                type: Number
            }
        }
    ],
    ongoing_projects: [
        {
            project : {
                type: mongoose.Schema.ObjectId,
                ref: "Ongoing_Project"
            },
            amount : {
                type: Number
            }
        }
    ]
});

// reviewSchema.pre("find", autopopulate);
// reviewSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Sponsor", Sponsor);
