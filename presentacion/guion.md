# 🎙️ Guion para exponer — "De HTML estático a React"

**Proyecto:** factory.io · **Duración estimada:** 8–10 minutos

**Cómo usar la presentación:**
1. Abre `presentacion/index.html` con doble clic (se abre en el navegador).
2. Navega con las flechas **← →** del teclado o los botones en pantalla.
3. Presiona **F11** para pantalla completa.
4. Si necesitas PDF: **Ctrl + P** → "Guardar como PDF".

---

## Diapositiva 1 — Portada *(~30 seg)*

> "Hola, somos el equipo de **factory.io**, una tienda de hardware y periféricos. Hoy les vamos a contar cómo migramos nuestro sitio web de HTML estático a **React**, paso a paso y con ejemplos reales de nuestro código."

📌 **Punto clave:** presentar el proyecto y anunciar que la charla es una comparación "antes y después".

---

## Diapositiva 2 — ¿Cómo era el sitio en HTML clásico? *(~1 min)*

> "Nuestro sitio partió como una página web tradicional: **un archivo HTML por cada página** — inicio, productos, registro, carrito, etcétera. Eso tenía tres problemas. Primero: el menú y el footer estaban **copiados y pegados en todos los archivos**; si cambiaba un enlace, había que editar ocho archivos. Segundo: cada vez que el usuario hacía clic en un enlace, **el navegador recargaba toda la página**. Y tercero: las validaciones del formulario se hacían leyendo el HTML directamente con `getElementById`, lo que se vuelve desordenado muy rápido."

📌 **Punto clave:** no es que el HTML estuviera "mal" — es que **no escala**: mucha repetición y lógica frágil.

❓ *Si te preguntan:* "¿Qué es el DOM?" → "Es la representación en memoria del HTML; el JavaScript clásico lo lee y modifica directamente, elemento por elemento."

---

## Diapositiva 3 — ¿Cómo es ahora con React + Vite? *(~1 min)*

> "Después de la migración, el sitio funciona distinto: existe **un solo `index.html`** que está casi vacío — solo tiene un `div` con id `root`. **React dibuja toda la aplicación dentro de ese div** usando JavaScript. La interfaz se dividió en **componentes**: `Header` y `Footer` viven en la carpeta `components`, y cada página — Home, Productos, Registro, etcétera — es un componente en la carpeta `pages`. La navegación la maneja **React Router**, y los formularios usan **estado** con `useState`."

📌 **Punto clave:** misma apariencia para el usuario, pero **arquitectura completamente distinta** por dentro.

---

## Diapositiva 4 — Paso 1: El punto de entrada *(~45 seg)*

> "El primer cambio fue el `index.html`. Antes, cada página tenía su propio HTML completo con su script al final. Ahora el body solo tiene dos cosas: un `div` vacío con id `root`, y la etiqueta script que carga `main.jsx`. En ese archivo, una sola línea — `createRoot(...).render(<App />)` — le dice a React: **'toma el control de este div y dibuja la aplicación aquí'**. Desde ese momento, el contenido ya no vive en archivos HTML, vive en componentes de JavaScript."

📌 **Punto clave:** el HTML se vuelve un "enlace de anclaje"; **React construye la página con JavaScript**.

---

## Diapositiva 5 — Paso 2: Componentes *(~1 min)*

> "Segundo paso: componentes. Un componente es simplemente **una función de JavaScript que devuelve HTML** — eso es JSX. El ejemplo más claro es el `Header`: antes, el menú de navegación estaba copiado en los ocho archivos HTML del sitio. Si había que agregar un enlace nuevo, se editaban ocho archivos y era fácil equivocarse en alguno. Ahora el menú existe **una sola vez**, en `Header.jsx`, y el componente `App` lo incluye arriba de las rutas, por lo que aparece automáticamente en todas las páginas. Un cambio, un archivo, y todo el sitio se actualiza."

📌 **Punto clave:** **reutilización**. Es la mayor ganancia inmediata de la migración.

---

## Diapositiva 6 — Paso 3: JSX, HTML dentro de JavaScript *(~1 min)*

> "La buena noticia es que migrar el HTML fue casi copiar y pegar, con solo **cuatro reglas de conversión**. Primera: `class` se escribe `className`, porque `class` es una palabra reservada de JavaScript. Segunda: `for` en los labels se escribe `htmlFor`, por la misma razón. Tercera: los eventos como `onclick` se escriben en camelCase y reciben una función, no un texto: `onClick={validar}`. Y cuarta, la más importante: las **llaves** `{ }` permiten meter JavaScript dentro del HTML — variables, llamadas a funciones, cualquier expresión."

📌 **Punto clave:** JSX se ve como HTML, pero **tiene todo el poder de JavaScript** gracias a las llaves.

---

## Diapositiva 7 — Paso 4: Navegación sin recargar *(~1 min)*

> "Cuarto paso: los enlaces. Antes usábamos `<a href='productos.html'>`, que le decía al navegador 'descarga otra página completa' — con su parpadeo y su tiempo de carga. Ahora usamos el componente `<Link to='/productos'>` de React Router, que **no descarga nada**: simplemente le avisa a React que muestre otro componente. En `App.jsx` está el mapa del sitio: cada `<Route>` asocia una URL con un componente. Por eso se llama **Single Page Application**: técnicamente el navegador cargó una sola página, y lo que cambia es *qué componente se está mostrando*."

📌 **Punto clave:** la navegación se siente **instantánea** porque nunca se recarga la página.

---

## Diapositiva 8 — Paso 5: Formularios con estado *(~1 min)*

> "Quinto paso, el cambio más importante de mentalidad: el **estado**. En el JavaScript clásico, para saber qué escribió el usuario había que ir a *buscar* el valor al HTML con `getElementById('rut').value`. En React es al revés: el dato **vive en el componente**, en una variable de estado que creamos con `useState`. El input muestra esa variable con `value={rut}`, y cada tecla que se presiona la actualiza con `onChange`. A esto se le llama *input controlado*. La ventaja: **el estado es la fuente de la verdad** y React se encarga de que la pantalla siempre lo refleje — ya no hay que sincronizar nada a mano."

📌 **Punto clave:** antes *leíamos* el HTML; ahora el HTML *refleja* nuestros datos.

---

## Diapositiva 9 — Paso 6: Validación y mensajes *(~1 min)*

> "Sexto paso: la validación del registro. Aquí algo curioso: **la lógica es exactamente la misma que teníamos antes** — el RUT debe tener entre 8 y 9 caracteres, y el correo solo acepta los dominios gmail.com, duoc.cl y profesor.cl. Eso demuestra que migrar no significa reescribir todo. Lo que sí cambió es *cómo se muestra el resultado*. Antes buscábamos un párrafo en el HTML y le cambiábamos el texto a mano. Ahora solo llamamos a `setMensaje` y en el JSX escribimos `{mensaje && <p>{mensaje}</p>}`, que significa: 'muestra este párrafo **solo si hay mensaje**'. Se llama **renderizado condicional**, y elimina toda una categoría de errores típicos, como olvidar limpiar un mensaje viejo."

📌 **Punto clave:** misma lógica de negocio, **nueva forma de pintar el resultado**.

---

## Diapositiva 10 — Paso 7: Listas con `.map()` *(~1 min)*

> "Séptimo paso: las listas. En la página de productos en HTML, cada producto era un bloque `<article>` copiado a mano: la imagen, el título, el precio... Agregar un producto significaba copiar, pegar y editar otro bloque. En React la idea es convertir el catálogo en **datos** — un array de objetos — y usar `.map()` para que React genere un artículo por cada producto automáticamente. Así, agregar un producto es agregar **una línea de datos**, sin tocar el diseño. Les soy honesto: en nuestro proyecto los productos todavía están escritos a mano en `Productos.jsx`, pero esa es justamente la gracia — la migración deja el código **listo para el siguiente paso**."

📌 **Punto clave:** en React se piensa en **datos → interfaz**, no en HTML repetido.

---

## Diapositiva 11 — Bonus: Pruebas automáticas *(~1 min)*

> "Y un beneficio que no esperábamos: las **pruebas automáticas**. En el sitio HTML, probar el formulario significaba abrir el navegador, escribir datos y hacer clic a mano, cada vez. Ahora, con Vitest y Testing Library, tenemos el archivo `Registro.Test.jsx` con **tres pruebas que se ejecutan solas** con `npm test`: una verifica que un RUT muy corto sea rechazado, otra que un correo con dominio no permitido sea rechazado, y otra que un registro correcto muestre el mensaje de éxito. Si en el futuro alguien modifica la validación y la rompe, **el test falla al instante** y nos avisa antes de que llegue a producción."

📌 **Punto clave:** la migración no solo ordenó el código — lo hizo **verificable**.

---

## Diapositiva 12 — Conclusión *(~45 seg)*

> "Para cerrar: el sitio se ve igual que antes, y ese era el objetivo. Lo que cambió fue **cómo está organizado**. Componentes que se escriben una vez y se reutilizan siempre. Navegación instantánea sin recargas. Un estado que controla la pantalla sin tocar el DOM a mano. Y pruebas automáticas que cuidan la calidad. Migrar a React no fue cambiar el contenido: fue cambiar la forma de **construirlo y mantenerlo**. Muchas gracias — ¿preguntas?"

📌 **Punto clave:** cerrar con la frase: *"mismo contenido, mejor arquitectura"*.

---

## 💡 Tips finales

- **Practica la transición entre diapositivas 2 y 3**: es el momento "antes vs después" más importante.
- Si hay demo en vivo disponible, muestra el sitio corriendo (`npm run dev`) **después de la diapositiva 7** para que se note que no hay recargas al navegar.
- Si te preguntan algo que no sabes: *"Buena pregunta, lo investigamos y te contamos después"* — es una respuesta válida.
- Reparte las diapositivas entre los integrantes: una sugerencia es 1–3, 4–6, 7–9 y 10–12 por persona.
