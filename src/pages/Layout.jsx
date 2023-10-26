import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
      <main className="d-flex flex-column min-vh-100">
    <nav className="navbar navbar-expand-lg bg-pink"> {/* Add a custom class (bg-pink) */}
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold text-white" to="/">React Routing Demo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto justify-content-end"> {/* Use ml-auto and justify-content-end classes */}
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="services">Services</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div className="container p-5">
        <Outlet></Outlet>
    </div>

    <footer className="bg-light p-3 text-center footer mt-auto">
        <p>© rcmnrl 2023</p>
    </footer>
</main>
    )
}

export default Layout;