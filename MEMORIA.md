# Memoria del Proyecto - Mas Hielo

## Estado actual (2026-07-14)

### Estructura
```
mashielo/
├── index.html          # Página principal (Hero, Productos, Nosotros, Testimonios, Contacto)
├── style.css           # Estilos globales (desarrollo)
├── style.min.css       # Estilos minificados (producción)
├── logo.png            # Logo marca
├── contacto.html       # Página de contacto con mapa, teléfono y formulario
├── qr/
│   ├── index.html      # Página de pedidos QR
│   ├── style.css       # Estilos QR (desarrollo)
│   ├── style.min.css   # Estilos QR minificados (producción)
│   └── logo.png
└── README.md
```

### Componentes implementados
- **Header**: Logo "+ HIELO", nav (Inicio, Productos, Nosotros, Contacto), botón CTA a /qr
- **Hero**: Titular, descripción, imagen Unsplash, botón "PEDIR AHORA"
- **Productos**: Catálogo con 3 productos, precios y botones de pedido
- **Nosotros**: Sección "Por qué elegir Mas Hielo" con imagen y lista de beneficios
- **Testimonios**: 3 reseñas de clientes
- **Contacto**: Cards de WhatsApp, teléfono y ubicación + formulario
- **Footer**: Copyright
- **Página QR**: Botones WhatsApp (pedir, enviar ubicación), horarios 24/7, links a redes
- **Página Contacto**: Información de contacto, formulario que envía a WhatsApp, mapa
- **Calculadora**: Flujo mejorado: seleccionar producto/cantidad -> botón "Calcular" -> resultado con total y botón "Pedir ahora" por WhatsApp

### Stack
- HTML/CSS puro, sin framework ni bundler
- Fuente Inter desde Google Fonts
- Tema oscuro, paleta azul/verde
- Responsive (breakpoints 950px y 600px)

### Datos de contacto
- WhatsApp: 59177784414
- Web: mashielo.com
- Horarios: 24/7

## Roadmap

### Fase 1 - Contenido (completada)
- [x] Completar sección Productos con catálogo real y precios
- [x] Crear página Contacto con mapa, teléfono y formulario
- [x] Agregar sección Nosotros / Por qué elegirnos
- [x] Incluir testimonios o reseñas de clientes
- [x] Agregar galería de fotos reales del producto

### Fase 2 - UX/UI (completada)
- [x] Implementar menú hamburguesa en mobile
- [x] Agregar botón WhatsApp flotante sticky
- [x] Separar CSS embebido de qr/index.html en archivo externo
- [x] Mejorar microinteracciones y transiciones

### Fase 3 - Performance (completada)
- [x] Optimizar imágenes (WebP/AVIF, lazy loading)
- [x] Agregar meta tags SEO y Open Graph
- [x] Minificar CSS/HTML
- [x] Eliminar bloqueo de Google Fonts con font-display: swap

### Fase 4 - Funcionalidad (completada)
- [x] Implementar formulario de pedido que envía a WhatsApp preformado
- [x] Agregar calculadora de cantidades/precios
  - Flujo: seleccionar producto/cantidad -> botón "Calcular" -> resultado con total y botón "Pedir ahora" por WhatsApp
  - Botón "Pedir ahora" abre WhatsApp con mensaje preformateado con el cálculo exacto
- [x] Implementar PWA básico (manifest + service worker)
- [x] Agregar zonas de cobertura de entrega visibles

### Ajustes posteriores (2026-07-14)
- [x] Refactor calculadora: separar cálculo del envío, mostrar resultado solo después de presionar "Calcular"
- [x] Corregir DOM roto en calculadora por div extra
- [x] Mejorar landing `/qr/` para mobile: safe areas, tactilidad, accesibilidad, clamp() en fuentes

### Fase 5 - Evolución técnica (evaluada)
- [x] Evaluar migración a Astro o Vite + vanilla si el sitio crece
  - **Conclusión:** No es necesario migrar por ahora. El sitio es pequeño (~3 páginas), muy rápido en HTML/CSS puro y Cloudflare Pages lo sirve excelente. Si crece mucho (>10 páginas, blog, inventario dinámico), reevaluar.
- [x] Evaluar CMS headless o estático para gestión de contenido
  - **Conclusión:** Omitir por ahora. El contenido es estable y no requiere edición frecuente por no técnicos. Si el cliente necesita actualizar precios/productos seguido, considerar Decap CMS o un panel simple.
- [x] Evaluar analytics básico
  - **Conclusión:** Recomendado agregar Cloudflare Web Analytics (sin cookies, sin consentimiento) o GA4 si se necesita detalle. No implementado para respetar privacidad por defecto.

### Fase 6 - Modelo mayor (futuro)
- [ ] Evaluar Google Sheets + Apps Script como base de datos backend
  - **Ventaja:** Sin costo, fácil de mantener por el cliente, ideal para productos/precios/stock.
  - **Consideración:** Apps Script puede exponer datos como API JSON; útil si en el futuro querés precios dinámicos o stock en tiempo real sin cambiar el frontend.
  - **Sugerencia:** Para este volumen actual, sigue siendo overkill. Guardar como opción si el catálogo crece o se necesita gestión sin tocar código.
- [ ] Pasos a futuro recomendados
  1. Si el volumen de pedidos crece, evaluar un formulario que guarde en Sheets para historial.
  2. Si se suma inventario/stock, usar Apps Script como API y actualizar la calculadora/precios desde la hoja.
  3. Si el sitio escala a más secciones, evaluar migración a Astro o un SSG.
  4. Si el cliente necesita autogestionar contenido, evaluar Decap CMS.

### Recomendación general
- **Mantener stack actual (HTML/CSS puro + Cloudflare Pages).**
- Ventajas: velocidad máxima, sin dependencias, deploy instantáneo, costo cero.
- Google Sheets + Apps Script es una buena opción futura si se necesita backend simple sin servidor.

## Historial de sesiones

### Sesión 2026-07-14
- Completadas Fases 1 a 5 del roadmap inicial
- Implementadas secciones: Productos, Nosotros, Testimonios, Contacto, Calculadora, Zonas de cobertura
- Mejoradas UX/UI: menú hamburguesa, botón WhatsApp flotante, microinteracciones
- Performance: meta tags SEO/OG, preload fuentes, lazy loading, CSS minificado
- Funcionalidad: formulario WhatsApp preformado, calculadora con flujo separado, PWA básico
- Landing `/qr/` mejorada para mobile con safe areas y tactilidad
- Evaluada Fase 5: mantener stack actual, no migrar por ahora
- Definida Fase 6 futura: posible uso de Google Sheets + Apps Script como backend
- Próximos pasos pendientes: continuar con Fase 6 cuando el cliente lo solicite
