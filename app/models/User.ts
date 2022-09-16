import mongoose from "mongoose";
const Schema = mongoose.Schema;
import bcrypt from "bcrypt";
const saltRounds = 10;

export interface UserDoc extends Document {
  username: string;
  password: string;
  email: string;

  comparePassword: (pw: string) => Promise<boolean>;
}

const userSchema = new Schema<UserDoc>({
  username: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  let isValid = await bcrypt.compare(candidatePassword, this.password);
  return isValid;
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    next();
  }

  const salt = bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, await salt);
});

export const User = mongoose.model<UserDoc>("User", userSchema);
