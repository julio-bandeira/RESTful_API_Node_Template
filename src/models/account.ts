import mongoose, { Schema, Document } from 'mongoose';

// Define account interface
export interface IAccount extends Document {
    duns: string
    emailAddress: string
    dtCreation: Date
}

// Creating account schema
const accountSchema = new Schema<IAccount>({
    duns: { type: String, required: true, unique: true, match: /^\d{9}$/ },
    emailAddress: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    dtCreation: { type: Date, required: true, default: Date.now() }
})

// Creating account model
const Account = mongoose.model<IAccount>('Account', accountSchema);

export default Account;