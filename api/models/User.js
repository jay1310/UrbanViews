const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profilePic: { type: String, default: "" },
        isAdmin: { type: Boolean, default: false }
    },
    {
        //tells Mongoose to automatically manage createdAt
        // and updatedAt properties on your documents
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);