const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        type: { type: String },
        genre: { type: String },
        content: { type: Array }
    },
    {
        //tells Mongoose to automatically manage createdAt
        // and updatedAt properties on your documents
        timestamps: true
    }
);

module.exports = mongoose.model("List", ListSchema);