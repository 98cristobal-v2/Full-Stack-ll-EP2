import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-dark border-bottom">
      <nav className="container d-flex flex-wrap align-items-center py-3 gap-3">
        <Link to="/" className="text-warning fw-bold text-decoration-none fs-4">
          ⚡ factory.io
        </Link>
        <ul className="nav me-auto">
          <li className="nav-item"><Link className="nav-link text-white" to="/">Inicio</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/productos">Productos</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/nosotros">Nosotros</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/blogs">Blog</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/contacto">Contacto</Link></li>
        </ul>
        <div className="d-flex gap-2">
          <Link to="/carrito" className="btn btn-outline-light btn-sm">🛍️ Carrito</Link>
          <Link to="/login" className="btn btn-outline-light btn-sm">Ingresar</Link>
          <Link to="/registro" className="btn btn-warning btn-sm">Registrarse</Link>
        </div>
      </nav>
    </header>
  );
}