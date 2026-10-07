import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main>
      <section>
        <h1>El mejor hardware y periféricos en factory.io</h1>
        <p>Encuentra mouses, teclados mecánicos, pantallas y más al mejor precio.</p>
        <Link to="/productos">Ver catálogo</Link>
      </section>

      <section>
        <h2>Productos destacados</h2>

        <article>
          <img src="/img/producto-1.jpg" alt="Mouse Gamer RGB" />
          <h3>Mouse Gamer RGB</h3>
          <p>$19.990</p>
          <Link to="/productos">Ver detalle</Link>
        </article>

        <article>
          <img src="/img/producto-2.jpg" alt="Teclado Mecánico Red Switch" />
          <h3>Teclado Mecánico Red</h3>
          <p>$34.990</p>
          <Link to="/productos">Ver detalle</Link>
        </article>

        <article>
          <img src="/img/producto-3.jpg" alt="Monitor Gamer 144Hz" />
          <h3>Monitor 24" 144Hz</h3>
          <p>$129.990</p>
          <Link to="/productos">Ver detalle</Link>
        </article>

        <article>
          <img src="/img/producto-4.jpg" alt="Audífonos 7.1 Surround" />
          <h3>Audífonos 7.1 Surround</h3>
          <p>$29.990</p>
          <Link to="/productos">Ver detalle</Link>
        </article>
      </section>
    </main>
  );
}