export default function Navbar ({children}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Howlett's Family Tree</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Person List
          </a>
          <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="/people/1">Wayne</a></li>
            <li><a className="dropdown-item" href="/people/2">Lara</a></li>
            <li><a className="dropdown-item" href="/people/3">Alex</a></li>
            <li><a className="dropdown-item" href="/people/4">Daniel</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}