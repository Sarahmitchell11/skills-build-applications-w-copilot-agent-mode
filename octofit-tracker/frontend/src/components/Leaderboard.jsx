import { useCollection } from '../api.js'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  const { items: leaderboard, loading, error } = useCollection(endpoint, 'leaderboard')

  return <section><p className="eyebrow">This week</p><h1>Leaderboard</h1>{loading && <p>Loading leaderboard...</p>}{error && <p className="error-message">{error}</p>}<div className="data-grid">{leaderboard.map((entry) => <article className="data-card rank-card" key={entry._id}><span>#{entry.rank}</span><h2>{entry.user?.name ?? 'OctoFit member'}</h2><strong>{entry.points} points</strong></article>)}</div></section>
}

export default Leaderboard