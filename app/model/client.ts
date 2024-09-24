import mongoose, { Schema, Document } from 'mongoose';
import Payment, { IPayment } from './payment';
import { IProgram } from './program';
import { IChallan } from './challan';


interface IClient extends Document {
    name: string;
    slug: string;
    address: string;
    gstin: string;
    programs: IProgram[];
    challans: IChallan[];
    payments: IPayment[];
    createdDate: Date;
    updatedDate: Date;
}

const clientSchema: Schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    address: { type: String, required: true },
    gstin: { type: String, required: true },
    programs: [{ type: Schema.Types.ObjectId, ref: 'Program' }],
    challans: [{ type: Schema.Types.ObjectId, ref: 'Challan' }],
    payments: [{ type: Schema.Types.ObjectId, ref: Payment }], //todo check why not working with Model as strint
    // payments: [{ type: Schema.Types.ObjectId, ref: 'Payment' }],
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
}); 

const Client = mongoose.models.Client || mongoose.model<IClient>('Client', clientSchema);
export default Client;