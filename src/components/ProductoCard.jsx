// Componente reutilizable que recibe PROPS y usa Bootstrap (card + grid)
export function ProductoCard({ nombre, descripcion, precio, imagen, onAgregar }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <article className="card h-100 shadow-sm">
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body d-flex flex-column">
          <h3 className="card-title h5">{nombre}</h3>
          <p className="card-text">{descripcion}</p>
          <p className="card-text fw-bold mt-auto">Precio: ${precio.toLocaleString('es-CL')}</p>
          {onAgregar && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onAgregar(nombre)}
            >
              Añadir al carrito
            </button>
          )}
        </div>
      </article>
    </div>
  );
}
