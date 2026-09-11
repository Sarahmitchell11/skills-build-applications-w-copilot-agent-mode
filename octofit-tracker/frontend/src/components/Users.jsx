import { useCollection } from '../api.js'

function Users() {
  const { items: users, loading, error } = useCollection('/api/users/', 'users')

  return <section><p className="eyebrow">Community</p><h1>Members</h1>{loading && <p>Loading members...</p>}{error && <p className="error-message">{error}</p>}<div className="data-grid">{users.map((user) => <article className="data-card" key={user._id}><h2>{user.name}</h2><p>{user.email}</p><strong>{user.weeklyGoalMinutes} min weekly goal</strong></article>)}</div></section>
}

export default Users