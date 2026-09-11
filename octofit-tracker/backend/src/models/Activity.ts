import { Schema, model } from 'mongoose';

export const Activity = model(
  'Activity',
  new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      type: { type: String, required: true, trim: true },
      durationMinutes: { type: Number, required: true, min: 1 },
      caloriesBurned: { type: Number, required: true, min: 0 },
      completedAt: { type: Date, required: true },
    },
    { timestamps: true },
  ),
);