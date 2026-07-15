# Memoria del Proyecto - Mas Hielo

## Estado actual (2026-07-14)

### Estructura
```
mashielo/
├── index.html          # Página principal
├── style.css           # Estilos globales
├── logo.png            # Logo marca
├── qr/
│   ├── index.html      # Página de pedidos QR (CSS embebido)
│   └── logo.png
└── README.md
```

### Componentes implementados
- **Header**: Logo "+ HIELO", nav (Inicio, Productos "Muy pronto", Contacto "Muy pronto"), botón CTA a /qr
- **Hero**: Titular, descripción, imagen Unsplash, botón "PEDIR AHORA"
- **Cards**: 3 tarjetas de producto (bolsas, calidad, escamas)
- **Footer**: Copyright
- **Página QR**: Botones WhatsApp (pedir, enviar ubicación), horarios, links a redes

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

### Fase 1 - Contenido (pendiente)
1. Completar sección Productos con catálogo real y precios
2. Crear página Contacto con mapa, teléfono y formulario
3. Agregar sección Nosotros / Por qué elegirnos
4. Incluir testimonios o reseñas de clientes
5. Agregar galería de fotos reales del producto

### Fase 2 - UX/UI (pendiente)
1. Implementar menú hamburguesa en mobile
2. Agregar botón WhatsApp flotante sticky
3. Separar CSS embebido de qr/index.html en archivo externo
4. Mejorar microinteracciones y transiciones

### Fase 3 - Performance (pendiente)
1. Optimizar imágenes (WebP/AVIF, lazy loading)
2. Agregar meta tags SEO y Open Graph
3. Minificar CSS/HTML
4. Eliminar bloqueo de Google Fonts con font-display: swap

### Fase 4 - Funcionalidad (pendiente)
1. Implementar formulario de pedido que envía a WhatsApp preformado
2. Agregar calculadora de cantidades/precios
3. Implementar PWA básico (manifest + service worker)
4. Agregar zonas de cobertura de entrega visibles

### Fase 5 - Evolución técnica (opcional)
1. Evaluar migración a Astro o Vite + vanilla si el sitio crece
2. Implementar CMS headless o estático para gestión de contenido
3. Agregar analytics básico
