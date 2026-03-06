GestoriaGyF

📌 Visión General
Plataforma web de Gestoría Integral con enfoque en conversión. El sitio debe ser una experiencia fluida y profesional sin importar desde dónde se acceda.

🛠️ Stack Tecnológico
Framework: Next.js (App Router)

Estilos: Tailwind CSS (Utilizando Breakpoints Responsivos)

Animaciones: Framer Motion (Optimizadas para no pesar en móviles)

Iconos: Lucide React

Comunicación: WhatsApp API Link

📱 Estrategia Responsive (Multi-dispositivo)
El diseño se adaptará automáticamente según el ancho de pantalla:

Mobile (Smartphone): Menú tipo "hamburguesa", tarjetas de empleados en una sola columna, botones de contacto grandes y táctiles.

Tablet: Grid de servicios en 2 columnas, optimización de espacios en blanco.

Desktop (PC/Laptop): Layout completo, navegación extendida, grid de empleados en 3 o 4 columnas con efectos de hover avanzados.

📋 Requerimientos Detallados
1. Secciones con Adaptabilidad
Navbar: En PC será una barra horizontal; en celulares será un icono de menú que despliega las opciones.

Sección Staff (Responsive Grid): * Móvil: 1 columna (énfasis en la foto y descripción vertical).

Tablet: 2 columnas.

Desktop: 3 o más columnas según diseño.

Imágenes: Uso del componente <Image /> de Next.js para carga diferida (lazy loading) y redimensión automática, asegurando que la web vuele en redes 4G/5G.

2. Micro-interacciones (Framer Motion)
Toque vs Hover: En dispositivos táctiles (móviles), las animaciones de hover se desactivarán o cambiarán por animaciones de entrada (in-view) para no confundir al usuario.

Botón de WhatsApp: En móviles, el botón será más prominente para facilitar el pulgar del usuario.

🛠️ Reglas de Oro para el Desarrollo
Flexbox & Grid: Se prohíben anchos fijos (ej: width: 800px). Todo será w-full o porcentual.

Tipografía Escala: Los títulos serán más grandes en PC y se reducirán proporcionalmente en móviles para evitar que el texto se "corte".

Click-to-Call: Los números de teléfono y botones de WhatsApp deben ser disparadores de acción directa.