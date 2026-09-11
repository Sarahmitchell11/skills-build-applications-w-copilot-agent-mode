import { Schema, model } from 'mongoose';

export const User = model(
  'User',
  new Schema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true, unique: true, lowercase: true },
      avatarUrl: { type: String, default: '' },
      weeklyGoalMinutes: { type: Number, required: true, min: 0 },
    },
    { timestamps: true },
  ),
);