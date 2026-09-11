import { Router } from 'express';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const apiRouter = Router();

apiRouter.get('/users/', async (_request, response, next) => {
  try {
    response.json({ users: await User.find().sort({ name: 1 }).lean() });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/teams/', async (_request, response, next) => {
  try {
    response.json({ teams: await Team.find().populate('members', 'name email').lean() });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/activities/', async (_request, response, next) => {
  try {
    response.json({ activities: await Activity.find().populate('user', 'name').sort({ completedAt: -1 }).lean() });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/leaderboard/', async (_request, response, next) => {
  try {
    response.json({ leaderboard: await LeaderboardEntry.find().populate('user', 'name').sort({ rank: 1 }).lean() });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/workouts/', async (_request, response, next) => {
  try {
    response.json({ workouts: await Workout.find().sort({ difficulty: 1, title: 1 }).lean() });
  } catch (error) {
    next(error);
  }
});

export default apiRouter;