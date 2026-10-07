import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProductoCard } from './ProductoCard';

const productoEjemplo = {
  nombre: 'Procesador Intel i5',
  descripcion: 'Excelente rendimiento para estudio, trabajo y juegos.',
  precio: 180000,
  imagen: '/img/producto-5.jpg',
};

describe('Pruebas del componente ProductoCard (props y eventos)', () => {

  it('debe renderizar los datos recibidos por props', () => {
    render(<ProductoCard {...productoEjemplo} />);

    expect(screen.getByText('Procesador Intel i5')).toBeInTheDocument();
    expect(screen.getByText(/rendimiento para estudio/i)).toBeInTheDocument();
    expect(screen.getByText(/180.000/)).toBeInTheDocument();
    expect(screen.getByAltText('Procesador Intel i5')).toHaveAttribute('src', '/img/producto-5.jpg');
  });

  it('debe llamar a onAgregar (mock) con el nombre del producto al hacer clic', () => {
    // MOCK: función simulada que registra sus llamadas
    const agregarMock = vi.fn();

    render(<ProductoCard {...productoEjemplo} onAgregar={agregarMock} />);
    fireEvent.click(screen.getByRole('button', { name: /Añadir al carrito/i }));

    expect(agregarMock).toHaveBeenCalledTimes(1);
    expect(agregarMock).toHaveBeenCalledWith('Procesador Intel i5');
  });

  it('no debe mostrar el botón si no se entrega la prop onAgregar', () => {
    render(<ProductoCard {...productoEjemplo} />);

    expect(screen.queryByRole('button', { name: /Añadir al carrito/i })).not.toBeInTheDocument();
  });

});
