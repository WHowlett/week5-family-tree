export default function Navbar ({children}) {
    return (
           <div>
            <nav className=" navbar navbar-dark navbar-expand-md fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Howlett's Family Tree
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item"><a href="/" className="nav-link active px-2">Home</a></li>
                            <li className="nav-item"><a href="/about" className="nav-link active px-2">About</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">Careers</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/people/1">Wayne</a></li>
                                    <li><a className="dropdown-item" href="/people/2">Lara</a></li>
                                    <li><a className="dropdown-item" href="/people/3">Alex</a></li>
                                    <li><a className="dropdown-item" href="/people/4">Daniel</a><li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
