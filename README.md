# ⚡ factory.io — De HTML estático a React

Proyecto de tienda de hardware y periféricos, migrado de una plantilla HTML/CSS/JavaScript clásica a una **Single Page Application (SPA)** construida con **React 19 + Vite**, con diseño responsivo mediante **Bootstrap 5** y pruebas unitarias con **Vitest + Testing Library**.

**Evaluación Parcial N°2 — Desarrollo Full Stack II**

👥 **Integrantes:** Ricardo y Cristobal

---

## 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **React 19** | Framework frontend (componentes, props, estados) |
| **Vite** | Herramienta de construcción y servidor de desarrollo |
| **React Router 7** | Navegación SPA sin recargar la página |
| **Bootstrap 5** | Diseño responsivo (grid, botones, alertas, cards) |
| **Vitest** | Ejecución de pruebas unitarias |
| **Testing Library** | Pruebas de componentes y manipulación del DOM |
| **jsdom** | Entorno DOM simulado para las pruebas |
| **@vitest/coverage-v8** | Reporte de cobertura de código |

---

## 📁 Estructura del proyecto

```
mi-proyecto/
├── index.html                  # Punto de entrada (un solo HTML con div#root)
├── package.json
├── vite.config.js              # Configuración de Vite + Vitest + cobertura
├── public/img/                 # Imágenes del catálogo
└── src/
    ├── main.jsx                # Monta la aplicación React + importa Bootstrap
    ├── App.jsx                 # Rutas del sitio (React Router)
    ├── setupTests.js           # Configuración del entorno de pruebas (jest-dom)
    ├── components/
    │   ├── Header.jsx          # Barra de navegación (se escribe UNA vez)
    │   ├── Footer.jsx          # Pie de página reutilizable
    │   ├── ProductoCard.jsx    # Tarjeta de producto (recibe PROPS)
    │   └── ProductoCard.test.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Productos.jsx       # Catálogo con .map() y grid responsivo
    │   ├── Carrito.jsx         # Carrito funcional con estado (useState)
    │   ├── Carrito.test.jsx
    │   ├── Registro.jsx        # Formulario con validaciones
    │   ├── Registro.test.jsx
    │   ├── Login.jsx
    │   ├── Contacto.jsx
    │   ├── Nosotros.jsx
    │   └── Blog.jsx
    └── data/
        └── productos.js        # Datos del catálogo (antes: HTML repetido)
```

---

## 🔄 Proceso de migración: de HTML a React

### Antes (HTML clásico)

- Un archivo `.html` por página (8 archivos).
- Menú y footer **copiados y pegados** en cada página.
- Cada enlace `<a href="...">` **recargaba toda la página**.
- Validaciones leyendo el DOM a mano: `document.getElementById('rut').value`.

### Ahora (React SPA)

1. **Un solo `index.html`** con un `div#root` vacío — React dibuja todo ahí.
2. **Componentes reutilizables**: Header y Footer se escriben una vez y aparecen en todas las páginas.
3. **JSX**: HTML dentro de JavaScript (`class` → `className`, `for` → `htmlFor`, `{ }` para expresiones).
4. **React Router**: `<Link>` y `<Route>` cambian de página **sin recargar**.
5. **Estado con `useState`**: los formularios guardan los datos en el componente, no en el DOM.
6. **Renderizado condicional**: `{mensaje && <p>{mensaje}</p>}` muestra mensajes solo cuando existen.
7. **Listas con `.map()`**: el catálogo es un array de datos; React genera una tarjeta por producto.

---

## 🧩 Componentes: props y estados

### ProductoCard (componente con props)

```jsx
export function ProductoCard({ nombre, descripcion, precio, imagen, onAgregar }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <article className="card h-100 shadow-sm">
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h3 className="card-title h5">{nombre}</h3>
          <p className="card-text fw-bold">Precio: ${precio.toLocaleString('es-CL')}</p>
          {onAgregar && (
            <button className="btn btn-primary" onClick={() => onAgregar(nombre)}>
              Añadir al carrito
            </button>
          )}
        </div>
      </article>
    </div>
  );
}
```

### Estados con useState (formulario de Registro)

```jsx
const [rut, setRut] = useState('');
const [correo, setCorreo] = useState('');

<input value={rut} onChange={(e) => setRut(e.target.value)} />
```

El **estado es la fuente de la verdad**: la pantalla siempre refleja los datos.

---

## 📱 Diseño responsivo con Bootstrap

| Clase Bootstrap | Comportamiento |
|---|---|
| `col-12 col-sm-6 col-md-4` | Productos: 1 columna en móvil, 2 en tablet, 3 en desktop |
| `container` | Contenido centrado con márgenes automáticos |
| `form-control` | Inputs con estilo y ancho completo |
| `btn btn-primary` / `btn-danger` / `btn-success` | Botones estilizados |
| `alert alert-info` / `alert-success` | Mensajes de validación visibles |
| `card`, `card-body`, `shadow-sm` | Tarjetas de producto |
| `nav`, `nav-link` | Menú de navegación |

---

## ✅ Pruebas unitarias (10 pruebas con Vitest)

### Comandos

```bash
npm test            # Ejecuta las 10 pruebas
npm run coverage    # Genera el reporte de cobertura en coverage/index.html
```

### Casos de prueba implementados

| Archivo | N° | Qué verifica |
|---|---|---|
| `Registro.test.jsx` | 4 | RUT corto rechazado · correo con dominio no permitido rechazado · contraseña vacía rechazada · registro exitoso |
| `ProductoCard.test.jsx` | 3 | Renderiza datos por **props** · llama al **mock** `onAgregar` con el nombre correcto · oculta el botón sin la prop `onAgregar` |
| `Carrito.test.jsx` | 3 | Calcula el total ($820.000) · eliminar un producto recalcula el total · finalizar compra vacía el carrito |

### Uso de mocks

```jsx
import { vi } from 'vitest';

const agregarMock = vi.fn();
fireEvent.click(screen.getByRole('button', { name: /Añadir al carrito/i }));

expect(agregarMock).toHaveBeenCalledTimes(1);
expect(agregarMock).toHaveBeenCalledWith('Procesador Intel i5');
```

---

## ⚙️ Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/98cristobal-v2/Full-Stack-ll-EP2.git
cd Full-Stack-ll-EP2

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
# → abrir http://localhost:5173

# 4. Ejecutar pruebas unitarias
npm test

# 5. Generar reporte de cobertura
npm run coverage
# → abrir coverage/index.html

# 6. Compilar para producción
npm run build
```

---

## 🧪 Proceso de testeo aplicado

1. **Configuración del entorno**: Vitest + jsdom + `@testing-library/jest-dom` en `vite.config.js` y `setupTests.js`.
2. **Escritura de pruebas**: 10 casos que verifican lógica de validación, renderizado de props, eventos y manipulación del DOM.
3. **Uso de mocks**: `vi.fn()` simula la función `onAgregar` y verifica sus llamadas sin ejecutar la lógica real.
4. **Análisis de resultados**: asserts con `toBeInTheDocument()`, `toHaveBeenCalledWith()`, etc.
5. **Cobertura de código**: reporte generado con `npm run coverage` (proveedor V8).
