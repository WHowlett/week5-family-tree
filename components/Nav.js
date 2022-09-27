import Link from 'next/link';

export default function Navbar ({children}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Howlett Family Tree</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Person List
          </Link>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" href="/people/1">Wayne</Link></li>
            <li><Link className="dropdown-item" href="/people/2">Lara</Link></li>
            <li><Link className="dropdown-item" href="/people/3">Alex</Link></li>
            <li><Link className="dropdown-item" href="/people/4">Daniel</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
