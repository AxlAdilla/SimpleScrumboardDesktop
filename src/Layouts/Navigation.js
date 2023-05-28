import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-center">
          <Link to='/' relative="path" className="navbar-brand text-primary">
            Simple Scrumboard
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;