import { Link } from 'react-router-dom';

export function Blog() {
  return (
    <main>
      <section>
        <h1>Blog de Tecnología y Hardware</h1>
        <p>Noticias, guías de armado y recomendaciones para tu setup.</p>
      </section>

      <section>
        <h2>Artículos Recientes</h2>

        <article>
          <h3>Guía para elegir la fuente de poder adecuada</h3>
          <p>Aprende a calcular el consumo en watts de tu tarjeta de video y procesador para evitar apogones por falta de energía.</p>
          <Link to="/contacto">Consultar a un técnico</Link>
        </article>

        <article>
          <h3>Mantenimiento preventivo para tu PC gamer</h3>
          <p>Consejos esenciales sobre la limpieza de polvo y el cambio de pasta térmica para mantener bajas las temperaturas.</p>
          <Link to="/contacto">Consultar a un técnico</Link>
        </article>

        <article>
          <h3>¿Qué evaluar al comprar una tarjeta gráfica?</h3>
          <p>Revisamos la memoria VRAM, los conectores de energía y la compatibilidad con tu gabinete antes de actualizar.</p>
          <Link to="/contacto">Consultar a un técnico</Link>
        </article>
      </section>
    </main>
  );
}