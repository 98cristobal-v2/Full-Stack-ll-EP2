import { useState } from 'react';

export function Login() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [mensaje, setMensaje] = useState('');

  const validarLogin = () => {
    const dominiosPermitidos = ['@gmail.com', '@duoc.cl', '@profesor.cl'];
    const esValido = dominiosPermitidos.some(dominio => correo.endsWith(dominio));

    if (!correo || !clave) {
      setMensaje('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    if (!esValido) {
      setMensaje('El correo debe terminar en @gmail.com, @duoc.cl o @profesor.cl');
      return;
    }

    setMensaje('¡Inicio de sesión exitoso!');
    setCorreo('');
    setClave('');
  };

  return (
    <main className="container py-4">
      <section className="text-center mb-4">
        <h1>Ingresar</h1>
        <p>Accede con tu correo y contraseña para continuar.</p>
      </section>

      <section className="mx-auto" style={{ maxWidth: '28rem' }}>
        <h2 className="h4 mb-3">Formulario de ingreso</h2>

        <label htmlFor="correo" className="form-label">Correo electrónico:</label>
        <input
          type="text"
          id="correo"
          className="form-control mb-3"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label htmlFor="clave" className="form-label">Contraseña:</label>
        <input
          type="password"
          id="clave"
          className="form-control mb-3"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />

        <button type="button" className="btn btn-primary w-100" onClick={validarLogin}>Ingresar</button>
        {mensaje && <p className="alert alert-info mt-3">{mensaje}</p>}
      </section>
    </main>
  );
}