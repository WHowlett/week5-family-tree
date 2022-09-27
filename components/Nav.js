import Link from 'next/link';

export default function Navbar ({children}) {
    return (
           <div>
            <nav className=" navbar navbar-dark navbar-expand-md fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Howlett's Family Tree
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item"><Link href="/" className="nav-link active px-2">Home</Link></li>
                            <li className="nav-item"><Link href="/about" className="nav-link active px-2">About</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">Careers</Link>
                                <ul className="dropdown-menu">
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
