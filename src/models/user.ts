import mongoose, { Schema, Document, Types } from 'mongoose';
import { IAccount } from './account';

// Definindo a interface para o usuário
export interface IUser extends Document {
    idAccount: Types.ObjectId | IAccount
    emailAddress: string
    passwordHash: string
    name: string
    dtBirth: Date,
    dtCreation: Date,
}

// Criando o schema do usuário
const userSchema = new Schema<IUser>({
    emailAddress: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
    dtBirth: { type: Date, required: true },
    dtCreation: { type: Date, required: true, default: Date.now() },
    idAccount: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
})

// Criando o modelo do usuário
const User = mongoose.model<IUser>('User', userSchema);

export default User;