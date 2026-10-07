import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <p className="mb-1">&copy; 2026 factory.io - Todos los derechos reservados</p>
      <p className="mb-0">
        <Link to="/nosotros" className="text-warning">Sobre nosotros</Link>
        {' | '}
        <Link to="/contacto" className="text-warning">Contacto</Link>
      </p>
    </footer>
  );
}