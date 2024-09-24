import mongoose, { Schema, Document } from "mongoose";
import { IN, OUT } from "../constant";

const paymentEnum = [IN, OUT];

export interface IPayment extends Document {
  clientId: mongoose.Types.ObjectId;
  amount: number;
  challanId: mongoose.Types.ObjectId;
  challanNo: string;
  type: string;
  createdDate: Date;
}

const paymentSchema: Schema = new Schema({
  clientId: { type: mongoose.Types.ObjectId, required: true, ref: "Client" },
  challanId: { type: mongoose.Types.ObjectId, ref: "Challan" },
  challanNo: { type: String},
  amount: { type: Number, required: true },
  type: { type: String, required: true, enum: paymentEnum },
  createdDate: { type: Date, required: true, default: Date.now },
  updatedDate: { type: Date, required: true, default: Date.now },
});

const Payment = mongoose.models.Payment || mongoose.model<IPayment>("Payment", paymentSchema);
export default Payment;