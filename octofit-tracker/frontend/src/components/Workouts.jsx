import { useCollection } from '../api.js'

function Workouts() {
  const { items: workouts, loading, error } = useCollection('/api/workouts/', 'workouts')

  return <section><p className="eyebrow">Suggested for you</p><h1>Workouts</h1>{loading && <p>Loading workouts...</p>}{error && <p className="error-message">{error}</p>}<div className="data-grid">{workouts.map((workout) => <article className="data-card" key={workout._id}><p className="difficulty">{workout.difficulty}</p><h2>{workout.title}</h2><p>{workout.description}</p><strong>{workout.durationMinutes} min · {workout.category}</strong></article>)}</div></section>
}

export default Workouts