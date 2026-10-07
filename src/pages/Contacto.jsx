import { useState } from 'react';

export function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensajeTexto, setMensajeTexto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const validarContacto = () => {
    if (!nombre.trim() || !correo.trim() || !mensajeTexto.trim()) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }
    setMensaje('Mensaje enviado con éxito. Te responderemos pronto.');
    setNombre('');
    setCorreo('');
    setMensajeTexto('');
  };

  return (
    <main className="container py-4">
      <section className="text-center mb-4">
        <h1>Contacto y Soporte</h1>
        <p>Escríbenos si necesitas ayuda o tienes dudas sobre tus productos.</p>
      </section>

      <section className="mb-4">
        <h2 className="h4">Atención de Servicio Técnico</h2>
        <p>Nuestros técnicos especialistas responden consultas sobre compatibilidad de componentes, fuentes de poder y armado de computadores.</p>
      </section>

      <section className="mx-auto" style={{ maxWidth: '32rem' }}>
        <h2 className="h4 mb-3">Formulario de contacto</h2>

        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          id="nombre"
          className="form-control mb-3"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="correo" className="form-label">Correo electrónico:</label>
        <input
          type="text"
          id="correo"
          className="form-control mb-3"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label htmlFor="texto-mensaje" className="form-label">Mensaje:</label>
        <textarea
          id="texto-mensaje"
          className="form-control mb-3"
          rows="4"
          value={mensajeTexto}
          onChange={(e) => setMensajeTexto(e.target.value)}
        ></textarea>

        <button type="button" className="btn btn-primary w-100" onClick={validarContacto}>Enviar</button>
        {mensaje && <p className="alert alert-info mt-3">{mensaje}</p>}
      </section>
    </main>
  );
}