import mongoose, { Schema, Document } from "mongoose";

export interface IProgram extends Document {
  clientId: mongoose.Types.ObjectId;
  lotNo: string;
  measurement: string;
  info: string;
  cutting: {
    total: number;
    history: { date: Date; value: number }[];
  };
  stiched: {
    total: number;
    history: { date: Date; value: number }[];
  };
  thredCutting: {
    total: number;
    history: { date: Date; value: number }[];
  };
  press: {
    total: number;
    history: { date: Date; value: number }[];
  };
  nara: {
    total: number;
    history: { date: Date; value: number }[];
  };
  packaging: {
    total: number;
    history: { date: Date; value: number }[];
  };
  createdDate: Date;
  updatedDate: Date;
}

const HistorySchema = {
  total: { type: Number, required: true, default: 0 },
  history: {
    type: [{ date: Date, value: Number }],
    required: true,
    default: [],
  },
}

const ProgramSchema: Schema = new Schema({
  clientId: { type: mongoose.Types.ObjectId, required: true, ref: "Client" },
  lotNo: { type: String, required: true },
  measurement: { type: String, required: true },
  info: { type: String, required: true },
  cutting: HistorySchema,
  stiched: HistorySchema,
  thredCutting: HistorySchema,
  press: HistorySchema,
  nara: HistorySchema,
  packaging: HistorySchema,
  createdDate: { type: Date, required: true },
  updatedDate: { type: Date, required: true },
});

const Program =
  mongoose.models.Program || mongoose.model<IProgram>("Program", ProgramSchema);

export default Program;
