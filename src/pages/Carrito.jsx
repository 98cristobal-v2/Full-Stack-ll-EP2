import { useState } from 'react';
import { productos } from '../data/productos.js';

export function Carrito() {
  const [items, setItems] = useState([
    { ...productos[0], cantidad: 1 },
    { ...productos[1], cantidad: 2 },
  ]);
  const [mensaje, setMensaje] = useState('');

  const eliminarProducto = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const finalizarCompra = () => {
    if (items.length === 0) {
      setMensaje('El carrito está vacío. Agrega productos antes de comprar.');
      return;
    }
    setMensaje('¡Compra realizada con éxito!');
    setItems([]);
  };

  const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

  return (
    <main className="container py-4">
      <section className="text-center mb-4">
        <h1>Tu Carrito de Compras</h1>
        <p>Revisa los productos seleccionados antes de finalizar tu pedido.</p>
      </section>

      <section className="mb-4">
        <h2 className="mb-3">Productos Seleccionados</h2>

        {items.length === 0 ? (
          <p className="alert alert-warning">No hay productos en el carrito.</p>
        ) : (
          <ul className="list-group">
            {items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.nombre}</strong>
                  <span className="badge bg-secondary ms-2">Cantidad: {item.cantidad}</span>
                  <span className="ms-2">${(item.precio * item.cantidad).toLocaleString('es-CL')}</span>
                </div>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarProducto(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card p-4">
        <h2 className="h4">Resumen del Pedido</h2>
        <p className="fw-bold">Total Estimado: ${total.toLocaleString('es-CL')}</p>
        <button type="button" className="btn btn-success" onClick={finalizarCompra}>
          Finalizar Compra
        </button>
        {mensaje && <p className="alert alert-info mt-3 mb-0">{mensaje}</p>}
      </section>
    </main>
  );
}
