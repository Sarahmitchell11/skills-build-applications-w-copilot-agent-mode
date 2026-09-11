import { Schema, model } from 'mongoose';

export const LeaderboardEntry = model(
  'LeaderboardEntry',
  new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
      points: { type: Number, required: true, min: 0 },
      rank: { type: Number, required: true, min: 1 },
      period: { type: String, required: true, trim: true },
    },
    { timestamps: true },
  ),
);