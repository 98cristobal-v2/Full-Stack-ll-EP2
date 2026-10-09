# 🎙️ Guion para exponer — "De HTML estático a React"

**Proyecto:** factory.io · **Integrantes:** Ricardo y Cristobal · **Duración estimada:** 10–12 minutos

**Cómo usar la presentación:**
1. Abre `presentacion/index.html` con doble clic (se abre en el navegador).
2. Navega con las flechas **← →** del teclado o los botones en pantalla.
3. Presiona **F11** para pantalla completa.
4. Si necesitas PDF: **Ctrl + P** → "Guardar como PDF".

---

## Diapositiva 1 — Portada *(~30 seg)*

> "Hola, somos Ricardo y Cristobal, y este es **factory.io**, nuestra tienda de hardware y periféricos. Hoy les vamos a mostrar cómo migramos el sitio de HTML estático a **React**, integrando Bootstrap para el diseño responsivo y un proceso de pruebas unitarias con Vitest."

📌 **Punto clave:** presentar el proyecto y anunciar los tres ejes: migración, responsividad y testing.

---

## Diapositiva 2 — ¿Cómo era el sitio en HTML clásico? *(~1 min)*

> "El sitio partió como una web tradicional: **un archivo HTML por cada página**. Eso tenía tres problemas. Primero: el menú y el footer estaban **copiados en los ocho archivos**; cambiar un enlace significaba editar ocho archivos. Segundo: cada clic en un enlace **recargaba toda la página**. Y tercero: las validaciones leían el HTML directamente con `getElementById`, lo cual es frágil y desordenado."

📌 **Punto clave:** el HTML no estaba "mal", pero **no escala**: mucha repetición y lógica frágil.

---

## Diapositiva 3 — ¿Cómo es ahora con React + Vite? *(~1 min)*

> "Después de la migración, existe **un solo `index.html`** casi vacío, con un `div` id `root`. **React dibuja toda la aplicación dentro** de ese div. La interfaz se dividió en componentes: `Header`, `Footer` y `ProductoCard` en la carpeta `components`, y cada página en `pages`. Además el catálogo dejó de ser HTML repetido y pasó a ser **datos** en `productos.js`. La navegación la maneja React Router, el diseño responsivo lo entrega Bootstrap, y el proyecto tiene **diez pruebas unitarias**."

📌 **Punto clave:** misma apariencia para el usuario, **arquitectura completamente distinta** por dentro.

---

## Diapositiva 4 — Paso 1: El punto de entrada *(~45 seg)*

> "El primer cambio fue el `index.html`. Antes cada página tenía su HTML completo. Ahora el body solo tiene un `div` vacío y el script que carga `main.jsx`. Ahí, `createRoot(...).render(<App />)` le dice a React: **'toma el control de este div'**. Y en ese mismo archivo importamos el CSS de Bootstrap, para que los estilos responsivos estén disponibles en toda la aplicación desde un solo lugar."

📌 **Punto clave:** el HTML se vuelve un anclaje; **React construye la página con JavaScript**.

---

## Diapositiva 5 — Paso 2: Componentes *(~1 min)*

> "Segundo paso: componentes. Un componente es **una función que devuelve HTML**. El ejemplo más claro es el `Header`: antes el menú estaba copiado en ocho archivos. Ahora existe **una sola vez** en `Header.jsx`, y el componente `App` lo pone arriba de las rutas, así que aparece automáticamente en todas las páginas. Un cambio, un archivo, todo el sitio actualizado."

📌 **Punto clave:** **reutilización** — la mayor ganancia inmediata de la migración.

---

## Diapositiva 6 — Paso 3: Props *(~1 min)*

> "Tercer paso: las **props**. Creamos el componente `ProductoCard`, que es una sola tarjeta de producto que se personaliza con los datos que le pasamos: `nombre`, `precio`, `imagen` y `onAgregar`. Las props son como los **parámetros de una función**: el componente padre decide qué muestra cada tarjeta. Fíjense también en la línea del botón: `onAgregar && <button>…` es un **renderizado condicional** — el botón solo existe si nos entregan esa prop. Así la misma tarjeta sirve en el catálogo con botón, o sin botón en otra vista."

📌 **Punto clave:** props = **personalización** del componente; condicional = control de qué se muestra.

❓ *Si te preguntan:* "¿Qué pasa si no paso una prop?" → "Simplemente llega como `undefined`; por eso usamos el condicional para el botón."

---

## Diapositiva 7 — Paso 4: Listas con `.map()` *(~1 min)*

> "Cuarto paso: las listas. Antes, cada producto era un bloque `<article>` copiado a mano. Ahora el catálogo es un **array de objetos** en `productos.js`, y en la página de Productos usamos `.map()` para que React genere una `ProductoCard` por cada elemento, pasándole los datos como props. Agregar un producto nuevo es agregar **una línea de datos** — el diseño no se toca."

📌 **Punto clave:** en React se piensa en **datos → interfaz**, no en HTML repetido.

---

## Diapositiva 8 — Paso 5: Estado con `useState` *(~1 min)*

> "Quinto paso, el cambio de mentalidad más importante: el **estado**. En JavaScript clásico, para saber qué escribió el usuario había que ir a *buscar* el valor al HTML. En React es al revés: el dato **vive en el componente**, en una variable de estado creada con `useState`. El input muestra esa variable y cada tecla la actualiza con `onChange`. A esto se le llama *input controlado*. Y los mensajes de validación se muestran con renderizado condicional: `{mensaje && <p>{mensaje}</p>}`."

📌 **Punto clave:** antes *leíamos* el HTML; ahora el HTML *refleja* nuestros datos.

---

## Diapositiva 9 — Paso 6: Carrito funcional *(~1 min)*

> "Sexto paso: el carrito. Antes era HTML fijo — los productos y el total estaban escritos a mano y nunca cambiaban. Ahora es una **lista viva**: el estado `items` guarda los productos, `eliminarProducto` usa `filter` para sacar un elemento, y el total se calcula solo con `reduce` cada vez que la lista cambia. Si el carrito queda vacío, el sitio muestra un mensaje distinto. Todo esto pasa **sin recargar la página y sin tocar el DOM a mano**."

📌 **Punto clave:** este es el ejemplo perfecto de estado + renderizado automático.

---

## Diapositiva 10 — Paso 7: Diseño responsivo con Bootstrap *(~1 min)*

> "Séptimo paso: la responsividad. Usamos el **sistema de grid de Bootstrap**: la clase `col-12 col-sm-6 col-md-4` en cada tarjeta de producto significa que en pantalla pequeña ocupa todo el ancho —una columna—, en tablet van de a dos, y en desktop de a tres. Además usamos `container` para centrar, `form-control` en los inputs, `btn` en los botones y `alert` para los mensajes de validación. Todo el diseño responsivo se logró **con clases, sin escribir CSS propio**. En la demo lo van a ver: achicamos la ventana y las tarjetas se reordenan solas."

📌 **Punto clave:** Bootstrap resuelve la responsividad con su **grid de 12 columnas y breakpoints**.

❓ *Si te preguntan:* "¿Qué es un breakpoint?" → "Es un ancho de pantalla donde cambia el diseño: `sm` son 576px, `md` son 768px."

---

## Diapositiva 11 — 10 pruebas unitarias *(~1 min)*

> "Para asegurar la calidad, escribimos **diez pruebas unitarias** con Vitest y Testing Library, en tres archivos. Cuatro prueban el formulario de Registro: RUT corto, correo con dominio no permitido, contraseña vacía y el caso exitoso. Tres prueban la `ProductoCard`: que renderice las props, que llame a la función correcta al hacer clic, y que oculte el botón si no hay prop. Y tres prueban el Carrito: que el total sea correcto, que eliminar un producto lo recalcule, y que finalizar la compra vacíe el carrito."

📌 **Punto clave:** las pruebas cubren **lógica, comportamiento y manipulación del DOM**.

---

## Diapositiva 12 — Mocks y cobertura *(~1 min)*

> "Dos conceptos clave del proceso de testeo. Primero, los **mocks**: con `vi.fn()` creamos una función simulada que se la pasamos al componente como prop. Cuando el test hace clic en el botón, verificamos que el mock fue llamado **exactamente una vez y con el nombre del producto correcto** — sin ejecutar la lógica real. Segundo, la **cobertura**: configuramos el proveedor V8 en `vite.config.js`, y al correr `npm run coverage` se genera un reporte HTML que muestra qué porcentaje del código está cubierto por pruebas — el Carrito, por ejemplo, llega al 87,5%."

📌 **Punto clave:** mocks = simular dependencias; cobertura = medir qué tanto probamos.

❓ *Si te preguntan:* "¿Por qué usar un mock?" → "Para probar el componente **aislado**: nos importa que llame a la función correctamente, no lo que la función hace por dentro."

---

## Diapositiva 13 — Demo en vivo *(~2 min)*

> "Ahora lo vemos funcionando. Primero las pruebas: `npm test` — ahí están, **diez pruebas pasando**. Ahora la cobertura con `npm run coverage`. Y el sitio en vivo con `npm run dev`."

**En el navegador, mostrar en este orden:**
1. `/productos` → clic en **"Añadir al carrito"** → mensaje verde de confirmación.
2. `/carrito` → clic en **"Eliminar"** → el total baja al instante → **"Finalizar Compra"** → carrito vacío.
3. `/registro` → RUT "123" → error; correo "@hotmail.com" → error; datos correctos → éxito.
4. **Achicar la ventana** → las tarjetas se reordenan (responsividad Bootstrap).
5. Navegar por el menú → **sin recargas** (SPA).

📌 **Punto clave:** la demo demuestra todo lo explicado: estado, props, responsividad y pruebas.

---

## Diapositiva 14 — Conclusión *(~45 seg)*

> "Para cerrar: el sitio se ve igual que antes, y ese era el objetivo. Lo que cambió fue **cómo está construido**: componentes reutilizables con props, formularios y carrito controlados por estado, diseño responsivo con Bootstrap, y diez pruebas automáticas que verifican todo con un comando. Migrar a React no fue cambiar el contenido: fue cambiar la forma de **construirlo y mantenerlo**. Muchas gracias — ¿preguntas?"

📌 **Frase de cierre:** *"mismo contenido, mejor arquitectura"*.

---

## 💻 Comandos para la demo (tenlos listos en la terminal)

```powershell
cd C:\Users\sickr\mi-proyecto
npm test            # 1. Las 10 pruebas pasando
npm run coverage    # 2. Tabla de cobertura
npm run dev         # 3. Sitio en http://localhost:5173
```

## 💡 Tips finales

- **Reparto sugerido entre los dos:** Ricardo → diapositivas 1–7 (migración y componentes), Cristobal → 8–14 (estado, Bootstrap, pruebas y demo).
- **Abre la terminal ANTES de empezar**, con `cd C:\Users\sickr\mi-proyecto` ya escrito.
- Deja el sitio corriendo (`npm run dev`) desde antes de la presentación para no esperar en la demo.
- Si te preguntan algo que no sabes: *"Buena pregunta, lo investigamos y te contamos después"* — es una respuesta válida.
- Practica la demo al menos una vez: es la parte que más impresiona y la que más puede fallar.
