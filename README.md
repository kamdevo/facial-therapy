# 💆‍♀️ Facial Therapy - Website

Centro de belleza y cuidado facial en Cali, Colombia. Sitio web moderno, responsivo y optimizado.

## 🚀 Deploy Rápido

### Vercel (Recomendado)

**Configuración desde la Web:**

```
Root Directory:     ./
Build Command:      npm run build:client
Output Directory:   dist/spa
Install Command:    npm install
```

[📖 Ver guía completa de deployment →](./DEPLOYMENT.md)

### Netlify

Ya está configurado con `netlify.toml`. Solo conecta y despliega.

---

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:8080
```

---

## 📁 Estructura del Proyecto

```
facial-therapy/
├── client/              # React SPA
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes de UI (Radix + Shadcn)
│   │   ├── Header.tsx  # Navbar flotante
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Index.tsx   # Página principal
│   │   ├── Admin.tsx   # Dashboard admin
│   │   └── NotFound.tsx
│   ├── App.tsx         # Router y providers
│   └── global.css      # Estilos globales + TailwindCSS
├── server/             # Express server (opcional)
├── shared/             # Tipos compartidos
├── dist/               # Build output
│   └── spa/           # SPA build
├── netlify.toml       # Config Netlify
├── vercel.json        # Config Vercel ✨
└── package.json
```

---

## ✨ Características

### 🎨 Diseño
- ✅ **Navbar Flotante** - Moderno y redondeado
- ✅ **Responsive** - Optimizado para móvil, tablet y desktop
- ✅ **Animaciones Suaves** - Framer Motion
- ✅ **Gradientes Elegantes** - Tema teal y bronze
- ✅ **Dark Mode Ready** - Preparado para tema oscuro

### 📱 Secciones
- ✅ **Hero** - Landing con SparklesText animado
- ✅ **Servicios** - 7 tratamientos con cards hover
- ✅ **Promociones** - Carrusel de ofertas
- ✅ **Sobre Nosotros** - Historia y valores
- ✅ **Instagram** - Feed de posts recientes
- ✅ **Testimonios** - Lista animada de reseñas
- ✅ **Contacto** - Formulario + mapa + info

### 🔐 Admin Dashboard
- ✅ **Protegido con código** (`jennifer`)
- ✅ **Gestión de citas**
- ✅ **Totalmente responsivo**
- ✅ **CRUD completo**
- ✅ **Búsqueda y filtros**

### 🛠️ Tecnologías
- **Frontend**: React 18 + TypeScript
- **Routing**: React Router 6 (SPA)
- **Styling**: TailwindCSS 3 + Radix UI
- **Animaciones**: Framer Motion
- **Build**: Vite
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

---

## 🌐 Deployment

### Para Vercel:
1. Conecta el repo en vercel.com
2. Root Directory: `./`
3. Build Command: `npm run build:client`
4. Output Directory: `dist/spa`
5. Deploy! 🚀

### Para Netlify:
1. Conecta el repo en netlify.com
2. Todo está pre-configurado en `netlify.toml`
3. Deploy! 🚀

[📖 Guía detallada de deployment →](./DEPLOYMENT.md)

---

## 📝 Scripts Disponibles

```bash
npm run dev          # Desarrollo (puerto 8080)
npm run build        # Build completo
npm run build:client # Build solo cliente (SPA)
npm run build:server # Build solo servidor
npm start           # Inicia servidor de producción
npm run typecheck   # Verificar TypeScript
npm test            # Ejecutar tests
```

---

## 🔧 Configuración

### Instagram Posts
Actualiza los URLs en `client/components/InstagramSection.tsx`:

```typescript
const instagramPosts = [
  'https://www.instagram.com/p/TU_POST_1/',
  'https://www.instagram.com/p/TU_POST_2/',
  // ...
];
```

### Cambiar Código Admin
Edita `client/pages/Admin.tsx` línea 199:

```typescript
const requiredKey = "jennifer"; // Cambia esto
```

### Variables de Entorno
No son necesarias para deployment básico. El proyecto funciona sin .env

---

## 📚 Documentación

- [📖 Deployment Guide](./DEPLOYMENT.md) - Guía completa de deployment
- [📖 Admin Dashboard](./ADMIN_DASHBOARD.md) - Uso del panel admin
- [📖 Instagram Setup](./INSTAGRAM_SETUP.md) - Configurar posts de Instagram
- [📖 Agents Guide](./AGENTS.md) - Arquitectura del proyecto

---

## 🎯 Rutas

- `/` - Página principal
- `/admin` - Dashboard administrativo (requiere código)
- `*` - 404 Not Found

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📞 Contacto

**Facial Therapy**
- 📍 Avenida 5B #25 Norte-32, San Vicente, Cali
- 📞 Teléfono: +57 300 123 4567
- 📧 Email: info@facialtherapy.com
- 📸 Instagram: [@facialtherapycali](https://instagram.com/facialtherapycali)

---

## 📄 Licencia

Este proyecto es privado y está desarrollado para Facial Therapy.

---

## 🙏 Agradecimientos

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)

---

**Hecho con ❤️ para Facial Therapy**

🚀 **¿Listo para desplegar?** → [Sigue la guía de deployment](./DEPLOYMENT.md)
