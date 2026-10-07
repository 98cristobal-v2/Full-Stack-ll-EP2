import { useState } from 'react';

export function Registro() {
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [mensaje, setMensaje] = useState('');

  const validarRegistro = () => {
    if (rut.length < 8 || rut.length > 9) {
      setMensaje('El RUT debe tener entre 8 y 9 caracteres.');
      return;
    }

    const dominiosPermitidos = ['@gmail.com', '@duoc.cl', '@profesor.cl'];
    const esValido = dominiosPermitidos.some(dominio => correo.endsWith(dominio));

    if (!esValido) {
      setMensaje('El correo debe ser válido (@gmail.com, @duoc.cl, @profesor.cl).');
      return;
    }

    if (!clave) {
      setMensaje('Ingresa una contraseña.');
      return;
    }

    setMensaje('¡Registro exitoso!');
    setRut('');
    setCorreo('');
    setClave('');
  };

  return (
    <main className="container py-4">
      <section className="text-center mb-4">
        <h1>Crear cuenta</h1>
        <p>Regístrate para comprar más rápido y guardar tus datos.</p>
      </section>

      <section className="mx-auto" style={{ maxWidth: '28rem' }}>
        <h2 className="h4 mb-3">Formulario de registro</h2>

        <label htmlFor="rut" className="form-label">RUT:</label>
        <input
          type="text"
          id="rut"
          className="form-control mb-3"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
        />

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

        <button type="button" className="btn btn-primary w-100" onClick={validarRegistro}>Registrarse</button>
        {mensaje && <p className="alert alert-info mt-3">{mensaje}</p>}
      </section>
    </main>
  );
}