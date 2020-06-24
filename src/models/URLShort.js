const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        short_url: {
            type: String,
            required: true,
            unique: true,
        },
        original_url: {
            type: String,
            required: true,
            unique: true,
        }
    }
);

module.exports = model('URLShort', userSchema);