import mongoose, { Schema } from "mongoose";

const journalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
mongoose.models = {};

export default mongoose.models.Journal || mongoose.model("Journal", journalSchema);