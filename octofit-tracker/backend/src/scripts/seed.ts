import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Maya Chen', email: 'maya.chen@octofit.test', weeklyGoalMinutes: 240 },
      { name: 'Jordan Rivera', email: 'jordan.rivera@octofit.test', weeklyGoalMinutes: 180 },
      { name: 'Priya Shah', email: 'priya.shah@octofit.test', weeklyGoalMinutes: 210 },
    ]);
    const [maya, jordan, priya] = users;

    if (!maya || !jordan || !priya) {
      throw new Error('Expected three seed users to be created');
    }

    await Team.create({
      name: 'Summit Striders',
      description: 'A team building steady habits through movement.',
      members: users.map((user) => user._id),
    });

    await Activity.create([
      { user: maya._id, type: 'Trail Run', durationMinutes: 52, caloriesBurned: 540, completedAt: new Date('2026-09-09T07:15:00Z') },
      { user: jordan._id, type: 'Strength Training', durationMinutes: 45, caloriesBurned: 310, completedAt: new Date('2026-09-10T17:30:00Z') },
      { user: priya._id, type: 'Yoga Flow', durationMinutes: 35, caloriesBurned: 160, completedAt: new Date('2026-09-11T06:45:00Z') },
    ]);

    await LeaderboardEntry.create([
      { user: maya._id, points: 860, rank: 1, period: '2026-W37' },
      { user: priya._id, points: 780, rank: 2, period: '2026-W37' },
      { user: jordan._id, points: 695, rank: 3, period: '2026-W37' },
    ]);

    await Workout.create([
      { title: 'Morning Mobility', category: 'Mobility', durationMinutes: 20, difficulty: 'Beginner', description: 'A gentle full-body mobility routine to start the day.' },
      { title: 'Tempo Builder', category: 'Running', durationMinutes: 40, difficulty: 'Intermediate', description: 'A paced run with controlled tempo intervals.' },
      { title: 'Power Circuit', category: 'Strength', durationMinutes: 35, difficulty: 'Advanced', description: 'A high-energy circuit for full-body strength.' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
