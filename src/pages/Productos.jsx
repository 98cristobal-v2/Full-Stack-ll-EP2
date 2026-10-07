import { useState } from 'react';
import { ProductoCard } from '../components/ProductoCard.jsx';
import { productos } from '../data/productos.js';

export function Productos() {
  const [mensaje, setMensaje] = useState('');

  const agregarAlCarrito = (nombre) => {
    setMensaje(`${nombre} añadido al carrito.`);
  };

  return (
    <main className="container py-4">
      <section className="text-center mb-4">
        <h1>Catálogo de Productos</h1>
        <p>Explora nuestras mejores opciones en hardware y periféricos.</p>
      </section>

      <section>
        <h2 className="mb-3">Componentes Disponibles</h2>

        {/* Grid responsivo de Bootstrap: 1 col en móvil, 2 en tablet, 3 en desktop */}
        <div className="row">
          {productos.map((producto) => (
            <ProductoCard
              key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              imagen={producto.imagen}
              onAgregar={agregarAlCarrito}
            />
          ))}
        </div>

        {mensaje && <p className="alert alert-success">{mensaje}</p>}
      </section>
    </main>
  );
}
