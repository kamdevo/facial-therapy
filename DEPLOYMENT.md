# 🚀 Guía de Deployment - Facial Therapy

## 📦 Configuración para Vercel

### Método 1: Deployment desde la Interfaz Web de Vercel

1. **Accede a Vercel**
   - Ve a https://vercel.com
   - Inicia sesión con tu cuenta de GitHub

2. **Importa el Proyecto**
   - Click en "Add New..." → "Project"
   - Selecciona el repositorio `facial-therapy` de GitHub
   - Click en "Import"

3. **Configuración del Proyecto**

   **⚙️ Build & Development Settings:**
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build:client
   Output Directory: dist/spa
   Install Command: npm install
   Development Command: npm run dev
   ```

4. **Variables de Entorno (Opcional)**
   - No hay variables de entorno requeridas por defecto
   - Si necesitas agregar alguna, hazlo en la sección "Environment Variables"

5. **Deploy**
   - Click en "Deploy"
   - Espera a que termine el build (1-3 minutos)
   - ¡Tu sitio estará en línea! 🎉

### Método 2: Deployment desde la Terminal (Vercel CLI)

```bash
# Instala Vercel CLI globalmente (solo una vez)
npm install -g vercel

# Navega al directorio del proyecto
cd facial-therapy

# Inicia sesión en Vercel
vercel login

# Deploy en producción
vercel --prod
```

---

## 📦 Configuración para Netlify

### Método 1: Deployment desde la Interfaz Web de Netlify

1. **Accede a Netlify**
   - Ve a https://netlify.com
   - Inicia sesión con tu cuenta de GitHub

2. **Importa el Proyecto**
   - Click en "Add new site" → "Import an existing project"
   - Selecciona GitHub y autoriza
   - Selecciona el repositorio `facial-therapy`

3. **Configuración del Proyecto**

   **⚙️ Build settings:**
   ```
   Base directory: (déjalo vacío o usa "./")
   Build command: npm run build:client
   Publish directory: dist/spa
   ```

   El archivo `netlify.toml` ya está configurado automáticamente con:
   - Redirects para SPA routing
   - Configuración de funciones serverless
   - Build commands optimizados

4. **Deploy**
   - Click en "Deploy site"
   - Espera a que termine el build (1-3 minutos)
   - ¡Tu sitio estará en línea! 🎉

### Método 2: Deployment desde la Terminal (Netlify CLI)

```bash
# Instala Netlify CLI globalmente (solo una vez)
npm install -g netlify-cli

# Navega al directorio del proyecto
cd facial-therapy

# Inicia sesión en Netlify
netlify login

# Deploy en producción
netlify deploy --prod
```

---

## 🎯 Respuestas Rápidas

### **¿Cuál es el Root Directory?**
- **Vercel**: `./` (raíz del proyecto)
- **Netlify**: (déjalo vacío o usa `./`)

### **¿Qué Build Command usar?**
```bash
npm run build:client
```

### **¿Cuál es el Output Directory?**
```
dist/spa
```

### **¿Necesito configurar algo más?**
No, el proyecto ya está configurado con:
- ✅ `vercel.json` - Configuración para Vercel
- ✅ `netlify.toml` - Configuración para Netlify
- ✅ `vite.config.ts` - Build optimizado
- ✅ Routing SPA configurado

---

## 🔧 Configuración Actual

### Vercel (`vercel.json`)
```json
{
  "buildCommand": "npm run build:client",
  "outputDirectory": "dist/spa",
  "framework": "vite"
}
```

### Netlify (`netlify.toml`)
```toml
[build]
  command = "npm run build:client"
  publish = "dist/spa"
```

---

## 🌐 URLs Esperadas

Después del deployment:

**Vercel:**
- Production: `https://facial-therapy.vercel.app`
- Preview: `https://facial-therapy-git-[branch].vercel.app`

**Netlify:**
- Production: `https://facial-therapy.netlify.app`
- Preview: URLs únicas por cada deploy

---

## ✨ Características del Proyecto

✅ **Single Page Application (SPA)** - React Router configurado
✅ **Responsive Design** - Optimizado para móviles y desktop
✅ **Fast Build** - Vite para builds ultra rápidos
✅ **Optimized Assets** - Imágenes y código minificado
✅ **SEO Ready** - Meta tags configurados
✅ **Admin Dashboard** - Protegido con código de acceso

---

## 🚨 Troubleshooting

### Error: "Build Failed"
- Verifica que todas las dependencias estén en `package.json`
- Ejecuta `npm install` localmente para verificar
- Revisa los logs de build en la plataforma

### Error: "404 Not Found" en rutas
- Verifica que los redirects estén configurados
- Para Vercel: Revisa `vercel.json`
- Para Netlify: Revisa `netlify.toml`

### Error: "Module not found"
- Ejecuta `npm run typecheck` localmente
- Verifica que no haya imports rotos

### Página en blanco después de deploy
- Revisa la consola del navegador (F12)
- Verifica que el Output Directory sea correcto: `dist/spa`
- Asegúrate de usar el build command correcto

---

## 📊 Comparación: Vercel vs Netlify

| Característica | Vercel | Netlify |
|----------------|---------|---------|
| **Build Time** | ~1-2 min | ~1-3 min |
| **CDN Global** | ✅ | ✅ |
| **HTTPS Gratis** | ✅ | ✅ |
| **Custom Domain** | ✅ | ✅ |
| **Preview Deploys** | ✅ | ✅ |
| **Serverless Functions** | ✅ | ✅ |
| **Facilidad de Uso** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**Ambas plataformas son excelentes. Elige la que prefieras.**

---

## 🎉 Deploy Automático

Una vez configurado, cada push a GitHub desplegará automáticamente:
- **Main branch** → Production
- **Otras branches** → Preview URLs

---

**¿Listo para desplegar?** 
1. Sube tu código a GitHub
2. Conecta con Vercel o Netlify
3. ¡Deploy! 🚀

**Última actualización:** Octubre 2025
