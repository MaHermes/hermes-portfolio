
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className="not-found">
      <p className="section-label">404 · Lost in the code</p>
      <h1>Nothing to see here.</h1>
      <p>
        Looks like this page took an unexpected turn.
        Let’s get you back on track.
      </p>
      <Link to="/" className="not-found-link">
        ← Back to home
      </Link>
    </main>
  )
}

export default NotFound
