const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");


const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please provide a username"],
            trim: true,
            minLength: [3, "Username must be at least 3 characters"],
            maxLength: [100, "Username is too large"]
        },
        email: {
            type: String,
            validate: [validator.isEmail, "Provide a valid Email"],
            trim: true,
            lowercase: true,
            unique: true,
            required: [true, "Email address is required"],
        },
        password: {
            type: String,
            required: [false, "Password is required"],
            minLength: [6, "Must be at least 6 character"],
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
    }
);
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        //  only run if password is modified, otherwise it will change every time we save the user!
        return next();
    }
    const password = this.password;
    const hashedPassword = bcrypt.hashSync(password);
    this.password = hashedPassword;

    next();
});
// comparePassword
userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcrypt.compareSync(password, hash);
    return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
