import mongoose, { Schema, Document } from "mongoose";

export interface IChallan extends Document {
  clientId: mongoose.Types.ObjectId;
  clientName: string;
  clientAddress: string;
  clientGstin: string;
  challanNo: { type: String, required: true, unique: true },
  challanDate: Date;
  quantity: number;
  createdDate: Date;
  updatedDate: Date;
  total: number;
  grandTotal: number;
  gstAmount: number;
  gstPercentage: number;
  items: {product: string, quantity: number, unitPrice: number}[]
}

const ChallanSchema: Schema = new Schema({
    clientId: { type: mongoose.Types.ObjectId, required: true, ref: "Client" },
    clientName: { type: String, required: true },
    clientAddress: { type: String, required: true },
    clientGstin: { type: String, required: true },
    challanNo: { type: String, required: true , index: true, unique: true},
    challanDate: { type: Date, required: true },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
    gstAmount: { type: Number, required: true },
    gstPercentage: { type: Number, required: true },
    items: { type: [{ product: String, quantity: Number, unitPrice: Number }], required: true },    
    createdDate: { type: Date, required: true },
    updatedDate: { type: Date, required: true },
})

ChallanSchema.index({ challanNo: 1 }, { unique: true });
const Challan = mongoose.models.Challan || mongoose.model<IChallan>("Challan", ChallanSchema);
export default Challan;