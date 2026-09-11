import { Schema, model } from 'mongoose';

export const Workout = model(
  'Workout',
  new Schema(
    {
      title: { type: String, required: true, trim: true },
      category: { type: String, required: true, trim: true },
      durationMinutes: { type: Number, required: true, min: 1 },
      difficulty: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
      description: { type: String, required: true, trim: true },
    },
    { timestamps: true },
  ),
);