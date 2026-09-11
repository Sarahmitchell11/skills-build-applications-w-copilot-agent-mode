import { useCollection } from '../api.js'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  const { items: teams, loading, error } = useCollection(endpoint, 'teams')

  return <section><p className="eyebrow">Shared goals</p><h1>Teams</h1>{loading && <p>Loading teams...</p>}{error && <p className="error-message">{error}</p>}<div className="data-grid">{teams.map((team) => <article className="data-card" key={team._id}><h2>{team.name}</h2><p>{team.description}</p><strong>{team.members?.length ?? 0} members</strong></article>)}</div></section>
}

export default Teams