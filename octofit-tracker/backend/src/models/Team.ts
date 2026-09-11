import { Schema, model } from 'mongoose';

export const Team = model(
  'Team',
  new Schema(
    {
      name: { type: String, required: true, trim: true, unique: true },
      description: { type: String, required: true, trim: true },
      members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true },
  ),
);