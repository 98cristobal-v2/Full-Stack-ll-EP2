import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Carrito } from './Carrito';

describe('Pruebas del Carrito de Compras (estado y cálculos)', () => {

  it('debe calcular el total correctamente según precios y cantidades', () => {
    render(<Carrito />);

    // 180.000 x 1 + 320.000 x 2 = 820.000
    expect(screen.getByText('Total Estimado: $820.000')).toBeInTheDocument();
  });

  it('debe eliminar un producto y recalcular el total', () => {
    render(<Carrito />);

    const botonesEliminar = screen.getAllByRole('button', { name: /Eliminar/i });
    fireEvent.click(botonesEliminar[0]); // elimina el Procesador Intel i5

    expect(screen.queryByText('Procesador Intel i5')).not.toBeInTheDocument();
    expect(screen.getByText('Total Estimado: $640.000')).toBeInTheDocument();
  });

  it('debe mostrar mensaje de compra exitosa y vaciar el carrito', () => {
    render(<Carrito />);

    fireEvent.click(screen.getByRole('button', { name: /Finalizar Compra/i }));

    expect(screen.getByText('¡Compra realizada con éxito!')).toBeInTheDocument();
    expect(screen.getByText('No hay productos en el carrito.')).toBeInTheDocument();
    expect(screen.getByText('Total Estimado: $0')).toBeInTheDocument();
  });

});
