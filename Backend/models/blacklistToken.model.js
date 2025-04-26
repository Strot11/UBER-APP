const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "12h", // Token will expire after 12 hour
  },
});
module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);
