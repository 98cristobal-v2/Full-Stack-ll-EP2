import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Registro } from './Registro';

describe('Pruebas de Validación en el Formulario de Registro', () => {

  it('debe rechazar un RUT inválido (intento de romper validación por longitud)', () => {
    render(<Registro />);

    const inputRut = screen.getByLabelText(/RUT:/i);
    const botonRegistrar = screen.getByRole('button', { name: /Registrarse/i });

    // Ingresamos un RUT demasiado corto (ej: "123")
    fireEvent.change(inputRut, { target: { value: '123' } });
    fireEvent.click(botonRegistrar);

    // Verificamos que el sistema capture el error correctamente
    expect(screen.getByText('El RUT debe tener entre 8 y 9 caracteres.')).toBeInTheDocument();
  });

  it('debe rechazar un correo con dominio no permitido', () => {
    render(<Registro />);

    const inputRut = screen.getByLabelText(/RUT:/i);
    const inputCorreo = screen.getByLabelText(/Correo electrónico:/i);
    const botonRegistrar = screen.getByRole('button', { name: /Registrarse/i });

    // RUT válido pero correo no permitido (@hotmail.com)
    fireEvent.change(inputRut, { target: { value: '192837465' } });
    fireEvent.change(inputCorreo, { target: { value: 'usuario@hotmail.com' } });
    fireEvent.click(botonRegistrar);

    expect(screen.getByText('El correo debe ser válido (@gmail.com, @duoc.cl, @profesor.cl).')).toBeInTheDocument();
  });

  it('debe registrar exitosamente cuando los datos son correctos', () => {
    render(<Registro />);

    const inputRut = screen.getByLabelText(/RUT:/i);
    const inputCorreo = screen.getByLabelText(/Correo electrónico:/i);
    const inputClave = screen.getByLabelText(/Contraseña:/i);
    const botonRegistrar = screen.getByRole('button', { name: /Registrarse/i });

    fireEvent.change(inputRut, { target: { value: '201234567' } });
    fireEvent.change(inputCorreo, { target: { value: 'estudiante@duoc.cl' } });
    fireEvent.change(inputClave, { target: { value: '123456' } });
    fireEvent.click(botonRegistrar);

    expect(screen.getByText('¡Registro exitoso!')).toBeInTheDocument();
  });

  it('debe rechazar el formulario cuando la contraseña está vacía', () => {
    render(<Registro />);

    const inputRut = screen.getByLabelText(/RUT:/i);
    const inputCorreo = screen.getByLabelText(/Correo electrónico:/i);
    const botonRegistrar = screen.getByRole('button', { name: /Registrarse/i });

    fireEvent.change(inputRut, { target: { value: '201234567' } });
    fireEvent.change(inputCorreo, { target: { value: 'estudiante@duoc.cl' } });
    fireEvent.click(botonRegistrar);

    expect(screen.getByText('Ingresa una contraseña.')).toBeInTheDocument();
  });

});