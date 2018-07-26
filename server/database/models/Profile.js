var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ProfileSchema = new Schema({
  // `title` is required and of type String
  firstName: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  dateJoined: {
    type: Date,
    required: true
  },
  karmaChips: {
    type: Number,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  listings: [{
    type: Schema.Types.ObjectId,
    ref: "Listing"
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: "Review"
  }]
});

// This creates our model from the above schema, using mongoose's model method
var Profile = mongoose.model("Profile", ProfileSchema);

// Export the Article model
module.exports = Profile;
