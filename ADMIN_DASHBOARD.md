# Panel de Administración - Dashboard

## 🔐 Acceso Protegido

El panel de administración está protegido con un código de acceso.

### Acceder al Dashboard

1. **URL de acceso**: `/admin`
2. **Código de acceso**: `jennifer`
3. El código se almacena localmente después del primer inicio de sesión

### Características del Dashboard

#### 📱 **Totalmente Responsivo**

El dashboard ha sido optimizado para funcionar perfectamente en todos los dispositivos:

**Mobile (< 640px)**
- Layout compacto y optimizado para pantallas pequeñas
- Tabla con scroll horizontal automático
- Información esencial visible, detalles adicionales en dropdowns
- Botones y controles con tamaños táctiles adecuados
- Texto escalado apropiadamente (10px-12px)
- Diálogos ocupan 95% del viewport con scroll interno

**Tablet (640px - 1024px)**
- Más columnas visibles en la tabla
- Mejor distribución de espacios
- Filtros y controles más amplios
- Tamaños de texto intermedios (12px-14px)

**Desktop (> 1024px)**
- Vista completa de todas las columnas
- Sidebar colapsable
- Espaciado generoso
- Tamaños de texto estándar (14px-16px)

#### 🎯 **Funcionalidades Principales**

1. **Gestión de Citas**
   - Crear nuevas citas
   - Editar citas existentes
   - Ver detalles completos
   - Eliminar citas

2. **Estados de Citas**
   - ⏳ Pending (Pendiente)
   - ✅ Confirmed (Confirmada)
   - 🎉 Completed (Completada)
   - ❌ Cancelled (Cancelada)

3. **Búsqueda y Filtros**
   - Búsqueda por nombre, email, teléfono o servicio
   - Filtro por estado
   - Resultados en tiempo real

4. **Paginación**
   - 10 resultados por página
   - Navegación intuitiva
   - Contador de resultados totales

#### 🎨 **Características Responsivas**

**Tabla de Citas:**
- Mobile: Muestra #, Cliente (con email), Estado, Acciones
- Tablet: Añade columna de Servicio y Fecha
- Desktop: Vista completa con Contacto

**Formularios:**
- Grid adaptable (1 columna en mobile, 2 en desktop)
- Inputs con altura y tamaño de texto adecuados
- Scroll interno en diálogos para contenido largo

**Navegación:**
- Sidebar colapsable con iconos
- Trigger siempre visible para abrir/cerrar
- Header compacto en mobile, más espacioso en desktop

**Controles:**
- Botones con tamaños táctiles (min 40x40px en mobile)
- Espaciado generoso entre elementos clickeables
- Labels descriptivos que se adaptan al espacio disponible

#### 🔒 **Seguridad**

- Código de acceso hardcodeado: `jennifer`
- Sesión guardada en localStorage
- Acceso solo a través de URL `/admin` (no hay enlaces públicos)
- Protección automática al cargar la página

#### 💡 **Tips de Uso**

1. **Cambiar el código de acceso**: Edita la línea 199 en `Admin.tsx`:
   ```typescript
   const requiredKey = "jennifer"; // Cambia esto por tu código
   ```

2. **Cerrar sesión**: Limpia el localStorage del navegador o usa las DevTools:
   ```javascript
   localStorage.removeItem("facialtherapy:admin:key");
   ```

3. **Acceso rápido en mobile**: 
   - Guarda `/admin` como favorito en tu navegador móvil
   - Añádelo a la pantalla de inicio para acceso tipo app

#### 🎨 **Diseño Visual**

- Paleta de colores consistente con el sitio principal
- Gradientes teal y bronze para elementos destacados
- Badges de estado con colores semánticos:
  - Amarillo: Pendiente
  - Verde: Confirmada
  - Azul: Completada
  - Rojo: Cancelada
- Sombras y bordes suaves para profundidad
- Transiciones suaves en interacciones

#### 📊 **Datos Mostrados**

Cada cita incluye:
- Número de orden
- Nombre del cliente
- Email de contacto
- Teléfono (opcional)
- Servicio solicitado
- Fecha y hora de la cita
- Estado actual
- Notas adicionales
- Fecha de creación

#### ⚡ **Rendimiento**

- Carga instantánea con datos en localStorage
- Sin necesidad de backend para funcionalidad básica
- Actualizaciones en tiempo real
- Optimizado para bajo consumo de datos en móvil

---

**Última actualización**: Octubre 2025
**Versión**: 2.0 - Totalmente Responsivo
