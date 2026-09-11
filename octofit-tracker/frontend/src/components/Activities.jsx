import { useCollection } from '../api.js'

function Activities() {
  const { items: activities, loading, error } = useCollection('/api/activities/', 'activities')

  return <section><p className="eyebrow">Training log</p><h1>Activity</h1>{loading && <p>Loading activities...</p>}{error && <p className="error-message">{error}</p>}<div className="data-grid">{activities.map((activity) => <article className="data-card" key={activity._id}><h2>{activity.type}</h2><p>{activity.user?.name ?? 'OctoFit member'}</p><strong>{activity.durationMinutes} min · {activity.caloriesBurned} cal</strong></article>)}</div></section>
}

export default Activities