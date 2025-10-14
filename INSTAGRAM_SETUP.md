# Configuración de Posts de Instagram

## Cómo agregar posts reales de Instagram al carrusel

Para mostrar posts reales de tu cuenta @facialtherapycali, necesitas actualizar el array `instagramPosts` en el archivo `client/components/InstagramSection.tsx`.

### Pasos:

1. **Obtener URLs de posts de Instagram:**
   - Ve a tu perfil de Instagram: https://www.instagram.com/facialtherapycali/
   - Abre cada post que quieras mostrar
   - Copia la URL del post (ejemplo: `https://www.instagram.com/p/ABC123xyz/`)

2. **Actualizar el componente:**
   - Abre el archivo `client/components/InstagramSection.tsx`
   - Busca el array `instagramPosts` (alrededor de la línea 54)
   - Reemplaza los URLs de ejemplo con tus URLs reales:

```typescript
const instagramPosts = [
  'https://www.instagram.com/p/TU_POST_1/',
  'https://www.instagram.com/p/TU_POST_2/',
  'https://www.instagram.com/p/TU_POST_3/',
  'https://www.instagram.com/p/TU_POST_4/',
  'https://www.instagram.com/p/TU_POST_5/',
  'https://www.instagram.com/p/TU_POST_6/',
];
```

3. **Puedes agregar o quitar posts:**
   - Simplemente añade o elimina URLs del array
   - No hay límite de posts, pero se recomienda entre 6-12 para mejor experiencia

### Características del carrusel:

✅ **Responsive**: Se adapta a todos los dispositivos
- Mobile: 1 post por vista
- Tablet: 2 posts por vista
- Desktop: 3 posts por vista
- Desktop XL: 4 posts por vista

✅ **Navegación**: Botones prev/next y dots indicadores

✅ **Loop infinito**: El carrusel vuelve al inicio automáticamente

✅ **Animaciones suaves**: Transiciones fluidas con Framer Motion

✅ **Link directo**: Botón para seguir la cuenta en Instagram

### Notas importantes:

- Los posts se cargarán directamente desde Instagram usando su API de embeds
- No necesitas guardar imágenes localmente
- Los posts mostrarán el contenido actualizado de Instagram
- Si un post es eliminado de Instagram, dejará de mostrarse automáticamente

### Ejemplo con posts reales:

```typescript
const instagramPosts = [
  'https://www.instagram.com/p/DCfh7HMRaVc/',
  'https://www.instagram.com/p/DCZmKXuRgYL/',
  'https://www.instagram.com/p/DCTQuuPxngs/',
  'https://www.instagram.com/p/DCQp4uWx3Fy/',
  'https://www.instagram.com/p/DCL5CvhRJfD/',
  'https://www.instagram.com/p/DCGKHdyR5qE/',
];
```

### Colores del tema Instagram:

El componente usa un esquema de colores inspirado en Instagram:
- Gradiente rosa a púrpura para botones principales
- Iconos de Instagram en rosa
- Hover effects con los colores de la marca

¡Listo! Una vez actualices los URLs, guarda el archivo y los posts reales aparecerán en el carrusel.
