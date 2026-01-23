
# Plan: Transformar la Página en una Experiencia Tipo App Móvil

## Descripcion General
Vamos a aplicar una serie de mejoras para que la landing page de Medykos se sienta y se comporte como una aplicación móvil nativa, manteniendo la funcionalidad actual pero optimizando la experiencia tactil, visual y de navegacion.

---

## Cambios Principales

### 1. Navegacion Inferior Tipo App (Bottom Navigation)
Crear una barra de navegacion fija en la parte inferior de la pantalla (solo en movil) con iconos para acceso rapido a las secciones principales.

- Iconos: Inicio, Servicios, Paquetes, FAQ, Contacto
- Navegacion activa resaltada con color primario
- Animaciones suaves al cambiar de seccion
- Oculta en desktop, visible solo en mobile

### 2. Meta Tags para Comportamiento de App
Agregar meta tags al `index.html` para:
- Permitir instalacion como PWA (Progressive Web App)
- Ocultar la barra del navegador en modo standalone
- Configurar splash screen y colores del tema
- Prevenir zoom no deseado en formularios

### 3. Gestos y Transiciones Nativas
- Agregar feedback tactil con animaciones de "press" en todos los botones
- Transiciones de pagina mas fluidas entre secciones
- Pull-to-refresh visual (indicador de scroll superior)
- Momentum scroll nativo en iOS

### 4. Header Compacto Tipo App
Modificar el header para que sea mas compacto en mobile:
- Logo centrado mas pequeno
- Solo icono de menu hamburguesa
- Efecto de "shrink" al hacer scroll

### 5. Safe Areas para Dispositivos Modernos
Agregar padding para los "notches" de iPhones y Android:
- Respetar el area segura inferior
- Padding superior para la barra de estado

### 6. Estados de Carga y Feedback Visual
- Skeleton loaders para imagenes
- Indicadores de carga tactil
- Toasts posicionados de forma no intrusiva

### 7. Snap Scroll Entre Secciones (Opcional)
Scroll que "encaja" naturalmente en cada seccion al hacer scroll, simulando pantallas de app.

---

## Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `index.html` | Meta tags PWA, viewport seguro, manifest |
| `src/index.css` | Safe areas, scroll snap, estados tactiles |
| `src/components/Header.tsx` | Header compacto animado |
| `src/pages/Index.tsx` | Importar BottomNav |

## Archivos a Crear

| Archivo | Proposito |
|---------|-----------|
| `src/components/BottomNav.tsx` | Barra de navegacion inferior para movil |
| `public/manifest.json` | Configuracion PWA |

---

## Detalles Tecnicos

### Meta Tags PWA (index.html)
```text
- apple-mobile-web-app-capable: yes
- apple-mobile-web-app-status-bar-style: black-translucent
- viewport con viewport-fit=cover
- Link a manifest.json
```

### Bottom Navigation (BottomNav.tsx)
```text
Componente React con:
- Posicion fixed bottom-0
- 5 iconos con etiquetas
- Deteccion de seccion activa via IntersectionObserver
- Animaciones con Framer Motion
- Solo visible en mobile (hidden md:hidden)
- Safe area padding inferior
```

### Estilos CSS Adicionales
```text
- env(safe-area-inset-bottom) para area segura
- scroll-snap-type: y mandatory para secciones
- -webkit-tap-highlight-color transparente
- touch-action: manipulation
- Estados :active con scale transform
```

### Header Compacto
```text
- Reducir altura en mobile a 56px
- Logo mas pequeno (text-xl)
- Agregar backdrop-blur mas intenso
- Animacion de shrink al scroll
```

---

## Resultado Esperado

La pagina se sentira como una app nativa con:
- Navegacion rapida desde la barra inferior
- Instalable en la pantalla de inicio del telefono
- Respuesta tactil inmediata en cada interaccion
- Aprovechamiento completo de la pantalla
- Transiciones fluidas entre secciones
