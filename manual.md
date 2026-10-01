# Manual de Rediseño Web
## Institución Educativa Madre Laura

---

# Objetivo general

Crear un sitio web institucional **moderno, profesional, dinámico e interactivo** que represente a la **Institución Educativa Madre Laura de Apartadó** como una institución educativa actual, tecnológica, humana y cercana a su comunidad.

La página web no debe sentirse como un blog institucional tradicional ni como un simple repositorio de documentos. Debe funcionar como un **espacio digital educativo e institucional**, donde estudiantes, docentes, familias, directivos y visitantes puedan encontrar información, recursos, actividades, eventos y documentos de manera clara.

### Concepto principal

> **El espacio digital de la comunidad educativa Madre Laura**

La experiencia debe integrar cuatro pilares:

- 🎓 **Educación**
- 💻 **Tecnología**
- 🤝 **Comunidad**
- ✝️ **Identidad Laurista**

El diseño debe conservar la identidad institucional existente, especialmente su presencia del **azul, amarillo y blanco**, pero llevarla a una interfaz contemporánea.

---

# 01. UI / UX

## 1. Concepto de experiencia de usuario

El sitio actual presenta una estructura principalmente basada en:

- Grupos de gestión.
- Eventos.
- Documentos.
- Textos institucionales.
- Imágenes.
- Cronogramas.
- Información académica.

La nueva experiencia debe conservar la información institucional existente, pero reorganizarla alrededor de las necesidades de los usuarios.

### Modelo actual

```text
Información
     ↓
Páginas
     ↓
Textos
     ↓
Documentos
     ↓
Imágenes
```

### Nuevo modelo

```text
                    INSTITUCIÓN
                         │
       ┌─────────────────┼─────────────────┐
       ↓                 ↓                 ↓
   ACADÉMICO         COMUNIDAD        ACTUALIDAD
       │                 │                 │
       └─────────────────┼─────────────────┘
                         ↓
                    RECURSOS
                         │
                         ↓
                    INTERACCIÓN
```

El usuario debe poder llegar rápidamente a:

- Información institucional.
- Información académica.
- Cronogramas.
- Eventos.
- Noticias.
- Documentos.
- Excelencia académica.
- Gobierno escolar.
- Actividades de la comunidad.
- Información de contacto.

---

# 2. Principios UX

## 2.1 Claridad

La información debe poder entenderse rápidamente.

Evitar:

- Párrafos excesivamente largos.
- Menús ambiguos.
- Títulos genéricos.
- Documentos sin clasificación.
- Bloques enormes de texto.
- Imágenes utilizadas sin contexto.

Priorizar:

- Títulos descriptivos.
- Subtítulos.
- Resúmenes.
- Categorías.
- Filtros.
- Tarjetas.
- Secciones claramente diferenciadas.

---

## 2.2 Jerarquía visual

La interfaz debe indicar claramente qué información es importante.

Utilizar:

- Tamaño.
- Peso tipográfico.
- Espaciado.
- Contraste.
- Color.
- Posición.
- Componentes visuales.

No todos los elementos deben competir por la atención del usuario. La humanidad inventó los encabezados precisamente para no convertir cada página en una pared de texto.

---

## 2.3 Orientación a tareas

Las acciones frecuentes deben poder realizarse rápidamente.

Ejemplos:

- Consultar cronograma.
- Consultar horarios.
- Buscar documentos.
- Revisar eventos.
- Consultar excelencia académica.
- Conocer la historia.
- Consultar el gobierno escolar.
- Consultar información para padres.
- Ver actividades institucionales.
- Contactar la institución.

---

## 2.4 Cercanía

La institución debe mostrarse como una comunidad.

Utilizar:

- Fotografías reales.
- Actividades institucionales.
- Estudiantes.
- Docentes.
- Familias.
- Eventos.
- Proyectos.
- Logros académicos.
- Semana Laurista.
- Actividades culturales.

La web debe mostrar la vida de la institución y no únicamente su documentación.

---

## 2.5 Modernidad sin excesos

El diseño debe sentirse actual sin caer en una interfaz excesivamente tecnológica.

Evitar:

- Gradientes excesivos.
- Animaciones constantes.
- Sombras muy fuertes.
- Demasiados colores simultáneos.
- Carruseles innecesarios.
- Elementos flotantes sin función.
- Texto gigante sin propósito.
- Efectos que dificulten la lectura.

---

# 3. Dirección visual

La dirección visual debe transmitir:

| Característica | Aplicación |
|---|---|
| Educativa | Recursos académicos visibles y jerarquizados |
| Laurista | Identidad, valores, tradición e historia |
| Moderna | Componentes actuales y espacios amplios |
| Tecnológica | Recursos digitales e interacción |
| Institucional | Colores y elementos consistentes |
| Comunitaria | Fotografías y actividades |
| Profesional | Tipografía y estructura coherente |
| Humana | Lenguaje cercano y contenido real |

---

# 4. Sistema de colores

La captura actual muestra una identidad fuertemente asociada con el azul y el amarillo. La propuesta debe conservar esa asociación, pero utilizarla de forma más refinada.

## 4.1 Paleta propuesta

| Uso | Color | HEX |
|---|---|---|
| Azul institucional | Azul principal | `#159BD7` |
| Azul profundo | Azul oscuro | `#0877B9` |
| Azul claro | Azul tecnológico | `#29B6E6` |
| Amarillo institucional | Amarillo | `#FFD43B` |
| Amarillo oscuro | Acento | `#F4B942` |
| Fondo general | Gris muy claro | `#F8FAFC` |
| Superficie | Blanco | `#FFFFFF` |
| Bordes | Gris claro | `#E2E8F0` |
| Texto principal | Azul/negro oscuro | `#0F172A` |
| Texto secundario | Gris azulado | `#64748B` |
| Éxito | Verde | `#16A085` |

---

## 4.2 Uso del color

### Azul

Debe ser el color dominante para:

- Header.
- Botones principales.
- Encabezados destacados.
- Enlaces.
- Componentes institucionales.
- Elementos interactivos.

### Amarillo

Debe funcionar como color de acento.

Utilizar para:

- Destacados.
- Etiquetas.
- Eventos especiales.
- Indicadores.
- Elementos asociados con la identidad visual.

### Blanco

Debe aportar:

- Limpieza.
- Legibilidad.
- Contraste.
- Espacio visual.

---

## 4.3 Distribución

Proporción visual aproximada:

```text
60 %  Blanco / fondos claros
30 %  Azul institucional
10 %  Amarillo y otros acentos
```

La identidad no necesita convertir cada sección en una bandera azul y amarilla.

---

# 5. Tipografía

## Encabezados

**Plus Jakarta Sans**

## Texto e interfaz

**Inter**

Estas tipografías permiten modernizar el sitio sin perder seriedad institucional.

---

## 5.1 Escala tipográfica

### Desktop

| Elemento | Tamaño |
|---|---:|
| H1 | 48–56 px |
| H2 | 36–42 px |
| H3 | 24–28 px |
| H4 | 20–22 px |
| Texto | 16–18 px |
| Texto secundario | 14–16 px |

### Mobile

| Elemento | Tamaño |
|---|---:|
| H1 | 32–38 px |
| H2 | 28–32 px |
| H3 | 20–24 px |
| Texto | 16 px |
| Texto secundario | 14 px |

---

# 6. Sistema de espaciado

Utilizar una escala consistente:

```text
4 px
8 px
12 px
16 px
24 px
32 px
48 px
64 px
80 px
96 px
```

---

# 7. Contenedor

Utilizar:

```text
max-width: 1200px
margin: 0 auto
padding-inline: 24px
```

En pantallas grandes puede ampliarse hasta aproximadamente `1280px` para galerías y contenido visual.

Los bloques de texto deben conservar una anchura cómoda para lectura.

---

# 8. Bordes y radios

| Elemento | Radio |
|---|---:|
| Inputs | 8 px |
| Botones | 8–12 px |
| Cards | 16 px |
| Imágenes | 16 px |
| Hero | 24 px |
| Elementos destacados | 24 px |

---

# 9. Botones

## Primario

Ejemplos:

```text
Consultar cronograma
Ver documentos
Conocer la institución
Ver eventos
```

Características:

- Azul institucional.
- Texto blanco.
- 44–48 px de altura.
- Radio de 8–12 px.

---

## Secundario

Para acciones complementarias:

```text
Ver más
Explorar
Conocer historia
Ver actividades
```

Puede utilizar:

- Fondo blanco.
- Borde azul.
- Texto azul.

---

## Ghost

Para acciones de menor jerarquía:

```text
Volver
Cerrar
Ver detalles
```

---

# 10. Cards

Las cards serán un componente fundamental para transformar el contenido actual en una experiencia más organizada.

### Estilo

```text
border-radius: 16px
padding: 24px
background: #FFFFFF
border: 1px solid #E2E8F0
```

Sombra:

```text
0 2px 8px rgba(15, 23, 42, 0.06)
```

Hover:

```text
transform: translateY(-3px)
transition: 200ms ease
```

---

# 11. Microinteracciones

Utilizar animaciones discretas para:

- Hover.
- Botones.
- Cards.
- Menús.
- Filtros.
- Modales.
- Galerías.
- Aparición de contenido.

Evitar animaciones permanentes.

---

# 12. Iconografía

Utilizar una sola familia de iconos.

Se recomienda:

- Lucide.
- Heroicons.
- Material Symbols.

Ejemplos:

| Sección | Icono |
|---|---|
| Institución | School |
| Académico | BookOpen |
| Comunidad | Users |
| Eventos | Calendar |
| Documentos | FileText |
| Gobierno escolar | Landmark |
| Contacto | Phone |
| Ubicación | MapPin |
| Buscar | Search |
| Noticias | Newspaper |
| Excelencia | Award |

Los iconos deben apoyar la comprensión y no convertirse en decoración.

---

# 13. Fotografía

Las fotografías reales deben tener un papel importante.

Priorizar imágenes de:

- Estudiantes.
- Docentes.
- Actividades académicas.
- Eventos.
- Padres de familia.
- Instalaciones.
- Semana Laurista.
- Ferias.
- Proyectos.
- Actividades culturales.
- Actividades deportivas.

La fotografía mostrada en la sección de **Principios Rectores** puede utilizarse como referencia del tipo de contenido que debe tener protagonismo en el nuevo diseño.

---

# 14. Cronogramas e imágenes informativas

Las capturas actuales muestran que parte importante de la información se presenta mediante imágenes grandes, especialmente:

- Cronograma de direcciones de grupo.
- Atención a padres.
- Preinformes.
- Entrega de boletines.
- Horarios.
- Relación de directores de grupo.

Estas imágenes no deben desaparecer, pero tampoco deben ser el único mecanismo de acceso a la información.

### Nueva estrategia

Mostrar:

```text
Cronograma institucional

[ Ver calendario ]

[ Ver versión gráfica ]

[ Descargar PDF / imagen ]
```

Cuando sea posible, los datos importantes también deben estar disponibles como contenido HTML accesible.

---

# 15. Responsive

El diseño debe contemplar:

```text
1440 px  Desktop
1024 px  Laptop
768 px   Tablet
390 px   Mobile
```

El diseño debe construirse de manera responsive desde el inicio.

---

# 16. Experiencia móvil

En móvil:

- El menú se convierte en menú desplegable.
- Las cards pasan a una columna.
- Las tablas se adaptan o permiten desplazamiento horizontal.
- Los cronogramas tienen una alternativa de lista/calendario.
- Las imágenes mantienen proporción.
- Los botones importantes ocupan un área cómoda.
- Los documentos pueden abrirse fácilmente.
- El contenido prioritario aparece primero.

---

# 17. Accesibilidad

El sitio debe aspirar a buenas prácticas equivalentes a **WCAG AA**.

Considerar:

- Navegación por teclado.
- Contraste adecuado.
- Alt text.
- Foco visible.
- Formularios etiquetados.
- Tamaños legibles.
- Botones descriptivos.
- Estructura semántica.
- No depender exclusivamente del color.

Los cronogramas e imágenes con información textual son especialmente importantes en este punto.

---

# 18. Usuarios principales

## Estudiantes

Necesitan:

- Horarios.
- Eventos.
- Recursos.
- Noticias.
- Excelencia académica.
- Actividades.
- Comunicados.

---

## Padres de familia

Necesitan:

- Reuniones.
- Cronogramas.
- Atención a padres.
- Informes.
- Comunicados.
- Documentos.
- Eventos.
- Contacto.

---

## Docentes

Necesitan:

- Documentos.
- Cronogramas.
- Horarios.
- Planeación.
- Recursos.
- Comunicaciones.
- Eventos.

---

## Directivos

Necesitan:

- Información institucional.
- Gestión.
- Documentación.
- Comunicaciones.
- Gobierno escolar.
- Publicaciones.

---

## Visitantes

Necesitan:

- Conocer la institución.
- Historia.
- Contexto.
- Principios.
- Valores.
- Oferta educativa.
- Ubicación.
- Contacto.

---

# 19. Arquitectura UX

El menú actual utiliza:

```text
Inicio
G. Administrativa
G. Académica
G. Comunitaria
G. Directiva
Eventos
```

Esta estructura refleja la organización interna de la institución, pero no necesariamente la forma en que una familia, estudiante o visitante busca información.

### Propuesta

```text
Inicio
Institución
Académico
Comunidad
Actualidad
Recursos
Contacto
```

La estructura interna de gestión puede mantenerse dentro de las páginas correspondientes.

---

# 20. Header

El header debe ser:

- Sticky.
- Responsive.
- Limpio.
- Institucional.
- Fácil de utilizar.

### Propuesta

```text
[LOGO]  Inicio  Institución  Académico  Comunidad
        Actualidad  Recursos  Contacto       🔍
```

En móvil:

```text
[LOGO]                         [☰]
```

---

# 21. Breadcrumbs

Las páginas internas deben mostrar:

```text
Inicio / Institución / Historia
```

Ejemplo:

```text
Inicio / Comunidad / Gobierno escolar
```

---

# 22. Búsqueda global

El buscador debe permitir encontrar:

- Noticias.
- Documentos.
- Eventos.
- Historia.
- Actividades.
- Comunicados.
- Recursos.
- Páginas institucionales.

Ejemplos:

```text
"cronograma 2026"
"manual de convivencia"
"excelencia académica"
"gobierno escolar"
"semana Laurista"
"horario"
```

---

# 23. Design Tokens

    :root {
      --color-primary: #159BD7;
      --color-primary-dark: #0877B9;
      --color-primary-light: #29B6E6;

      --color-yellow: #FFD43B;
      --color-yellow-dark: #F4B942;

      --color-success: #16A085;

      --color-background: #F8FAFC;
      --color-surface: #FFFFFF;
      --color-border: #E2E8F0;

      --color-text: #0F172A;
      --color-text-secondary: #64748B;

      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --radius-xl: 24px;

      --container-width: 1200px;

      --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.06);
    }

---

# 24. Biblioteca de componentes

Componentes recomendados:

- Header.
- Footer.
- Button.
- Card.
- NewsCard.
- EventCard.
- DocumentCard.
- AchievementCard.
- InstitutionalCard.
- Breadcrumb.
- SearchBar.
- Input.
- Select.
- Badge.
- Modal.
- Alert.
- Gallery.
- Pagination.
- Calendar.
- Timeline.
- DataTable.
- MobileMenu.
- Accordion.
- ImageViewer.

---

# 25. Rendimiento

Aplicar:

- WebP/AVIF.
- Lazy loading.
- Compresión.
- Imágenes responsive.
- Optimización CSS.
- Optimización JavaScript.
- Carga eficiente de fuentes.
- Evitar dependencias innecesarias.

Las imágenes de cronogramas, galerías y eventos deben optimizarse especialmente.

---

# 26. SEO

Cada página debe contar con:

- Title.
- Meta description.
- H1 único.
- Jerarquía H2/H3.
- URLs amigables.
- Alt text.
- Open Graph.
- Sitemap.
- Robots.txt.
- Enlaces internos.
- Datos estructurados cuando correspondan.

Ejemplos:

```text
/institucion
/institucion/historia
/institucion/principios-rectores
/institucion/valores
/institucion/simbolos

/academico
/academico/excelencia-academica
/academico/horarios
/academico/planes

/comunidad
/comunidad/gobierno-escolar
/comunidad/padres-de-familia

/actualidad
/actualidad/noticias
/actualidad/eventos

/recursos
/recursos/documentos

/contacto
```

---

# 27. Seguridad

Contemplar:

- HTTPS.
- Validación de formularios.
- Sanitización de entradas.
- Protección contra spam.
- Control de permisos.
- Actualización de dependencias.
- Copias de seguridad.
- Protección de credenciales.

---

# Resultado esperado de UI/UX

La experiencia debe sentirse:

- Moderna.
- Educativa.
- Laurista.
- Profesional.
- Cercana.
- Tecnológica.
- Organizada.
- Comunitaria.

---

# 02. ESTRUCTURA Y CONTENIDO

# 1. Nueva arquitectura principal

La estructura debe transformar el menú actual basado en grupos de gestión en una arquitectura más comprensible para la comunidad.

```text
Inicio
│
├── Institución
│   ├── Contextualización institucional
│   ├── Reseña histórica de la institución
│   ├── Principios rectores
│   ├── Valores institucionales
│   ├── Símbolos institucionales
│   │   ├── Bandera
│   │   ├── Escudo
│   │   └── Himno
│   └── Identidad Laurista
│
├── Académico
│   ├── Excelencia académica
│   │   ├── 2022
│   │   ├── 2023
│   │   └── 2024
│   ├── Horarios
│   ├── Planes y áreas
│   ├── Planeación académica
│   └── Recursos académicos
│
├── Comunidad
│   ├── Gobierno escolar
│   ├── Padres de familia
│   ├── Estudiantes
│   ├── Docentes
│   ├── Convivencia
│   └── Actividades comunitarias
│
├── Actualidad
│   ├── Noticias
│   ├── Eventos
│   ├── Actividades institucionales
│   ├── Semana Laurista
│   └── Eventos por año
│
├── Recursos
│   ├── Documentos institucionales
│   ├── Documentos de gestión
│   ├── Formatos
│   ├── Cronogramas
│   ├── Horarios
│   └── Descargas
│
└── Contacto
```

---

# 2. Página de inicio

La página de inicio debe convertirse en el punto central del sitio.

## Estructura

```text
HEADER
│
├── HERO
│
├── ACCESOS RÁPIDOS
│
├── ACTUALIDAD
│
├── PRÓXIMOS EVENTOS
│
├── CONOCE NUESTRA INSTITUCIÓN
│
├── EXCELENCIA ACADÉMICA
│
├── NUESTRA COMUNIDAD
│
├── RECURSOS
│
├── GALERÍA
│
└── FOOTER
```

---

# 3. Hero principal

El Hero debe reemplazar el bloque genérico actual de páginas internas por una presentación institucional más fuerte.

## Propuesta

### Título

> **EDUCACIÓN QUE TRANSFORMA**

### Subtítulo

> **Institución Educativa Madre Laura**

### Descripción

> Una comunidad educativa comprometida con la formación integral, la excelencia académica y los valores humanos y cristianos.

### Acciones

```text
[ Conocer nuestra institución ]

[ Explorar recursos ]
```

La imagen debe ser una fotografía institucional real.

---

# 4. Accesos rápidos

Después del Hero debe existir una sección:

> **¿Qué necesitas consultar?**

### Accesos

```text
📅 Cronograma
📚 Excelencia académica
📄 Documentos
🕐 Horarios
🎉 Eventos
👥 Gobierno escolar
```

Esto reduce la dependencia del menú principal.

---

# 5. Institución

La información institucional actualmente distribuida en diferentes páginas debe concentrarse bajo una sección clara.

## Estructura

```text
Institución
│
├── Contextualización
├── Historia
├── Principios rectores
├── Valores
├── Símbolos
└── Identidad Laurista
```

---

# 6. Contextualización institucional

La contextualización debe convertirse en una página propia.

## Título

> **Nuestro contexto**

### Introducción

La Institución Educativa Madre Laura se encuentra ubicada en el barrio Ortiz, en el municipio de Apartadó, dentro de la comuna N.° 4, denominada José Joaquín Vélez.

La página debe explicar el contexto desde diferentes dimensiones.

---

## 6.1 Reseña histórica del sector

El barrio Ortiz pertenece a la comuna N.° 4, José Joaquín Vélez, conformada por:

- Los Pinos.
- Los Almendros.
- Nuevo Apartadó.
- El Darién.
- Villa del Río.
- El Salvador.
- Pueblo Quemao.

Cercano a la institución se encuentra el Parque Ortiz, uno de los primeros parques de Apartadó.

El crecimiento del comercio, la educación, la zona hotelera, las instituciones de salud y otras actividades económicas han convertido al sector en uno de los barrios importantes del municipio.

---

## 6.2 Ubicación geográfica

La página debe presentar los límites del barrio:

| Dirección | Límite |
|---|---|
| Oriente | Avenida principal y Parroquia Divina Eucaristía |
| Occidente | Barrios Los Pinos y Los Almendros |
| Norte | Río Apartadó y barrio Vélez |
| Sur | Nuevo Apartadó y barrio Los Álamos |

Esta información puede acompañarse de un mapa o representación gráfica cuando exista información geográfica oficial disponible.

---

# 7. Contexto cultural

La página debe destacar los espacios y servicios culturales presentes en el sector.

Información suministrada:

- Biblioteca pública.
- Biblioteca del Colegio Cooperativo.
- Comfenalco.
- Coomeva.
- Programas recreacionales.
- Pintura.
- Recreación.
- Gimnasio.
- Cursos de sistemas e informática.

### Diseño

Utilizar cards:

```text
┌──────────────────┐
│ Biblioteca       │
│                  │
│ Espacio cultural │
└──────────────────┘
```

---

# 8. Contexto económico

El contenido debe explicar que el sector tiene una actividad comercial importante.

### Actividades mencionadas

- Supermercados.
- Hoteles.
- Restaurantes.
- Almacenes.
- Tabernas.
- Pizzerías.
- Oficinas privadas.
- Oficinas públicas.
- Empresas ganaderas.
- Empresas bananeras.

La información debe presentarse como contexto institucional y no como directorio comercial.

---

# 9. Contexto recreacional

Presentar los espacios recreativos mencionados:

- Parque Ortiz.
- Placa polideportiva del Colegio Cooperativo.
- Estadio Santiago Santacruz Rambay.
- Coliseo de boxeo.
- Coliseo Antonio Roldán.

Puede utilizarse una sección visual:

```text
Espacios para la recreación

[ Parque Ortiz ]
[ Estadio ]
[ Coliseo ]
[ Placa deportiva ]
```

---

# 10. Contexto social

La información institucional describe al barrio como un espacio donde predominan personas alegres, trabajadoras, amables y solidarias.

También se menciona:

- Viviendas de material.
- Estratos socioeconómicos 3 y 4.
- Instalaciones eléctricas.
- Acueducto.
- Alcantarillado.
- Teléfono.
- Afiliación de familias al sistema de seguridad social.

Esta información debe presentarse de manera descriptiva y respetuosa.

---

# 11. Contexto religioso

La información suministrada señala que el barrio conserva una tradición religiosa importante.

Se menciona presencia de:

- Tradición católica.
- Comunidades protestantes.

La sección debe presentar este aspecto como parte del contexto cultural y social del sector.

---

# 12. Contexto político

La contextualización institucional señala la participación de habitantes en diferentes grupos políticos y organizaciones con distintas ideologías.

Entre los partidos mencionados en el documento se encuentran:

- Partido Liberal.
- Partido Conservador.
- Centro Democrático.
- Polo Democrático.
- Cambio Radical.

Esta información debe presentarse únicamente como **contexto descriptivo del sector**, sin promover ni valorar ninguna posición política.

---

# 13. Contexto ecológico

La sección debe destacar la relación del sector con el medio ambiente.

### Temas

- Río Apartadó.
- Conservación de recursos naturales.
- Siembra de árboles.
- Conservación de especies.
- Educación ambiental.
- Campañas de cuidado.

La información suministrada señala la participación de **CORPOURABÁ** en procesos de concientización ambiental.

También se registra la problemática de contaminación del río Apartadó.

### Propuesta visual

```text
Nuestro entorno

[ Río Apartadó ]

[ Conservación ]

[ Educación ambiental ]

[ Protección de especies ]
```

---

# 14. Reseña histórica de la institución

La historia debe ser una de las páginas principales del nuevo sitio.

## Título

> **Nuestra historia**

### Introducción

La Institución Educativa Madre Laura fue fundada en marzo de 1967 como homenaje a Laura Montoya Upegui, pedagoga y educadora y fundadora de la Congregación de Misioneras de María Inmaculada y Santa Catalina de Sena, conocidas como Lauristas.

La elección del nombre representa el reconocimiento a su labor educativa y a la misión desarrollada por las fundadoras.

---

# 15. Línea de tiempo institucional

La historia debe presentarse visualmente.

```text
1967
│
├── Fundación de la institución
│
↓
Primeros años
│
├── Escuela Urbana de Niñas del Municipio de Apartadó
│
↓
1975
│
├── Escuela Urbana Madre Laura de Apartadó
│
↓
1984
│
├── Incorporación del nivel preescolar
│
↓
Actualidad
│
└── Institución Educativa Madre Laura
```

---

# 16. Origen de la institución

La creación de la institución surgió a partir de la preocupación de la señora **Eugenia Ángel Viuda de Vélez** frente al crecimiento del municipio de Apartadó y la necesidad de ofrecer educación humano-cristiana de calidad.

Inicialmente la institución fue conocida como:

> **Escuela Urbana de Niñas del Municipio de Apartadó**

---

# 17. Desarrollo histórico

En 1975 cambió su nombre a:

> **Escuela Urbana Madre Laura de Apartadó**

En el mismo período, el IDEM adoptó el nombre de:

> **José Celestino Mutis**

En 1984 se incorporó el nivel preescolar, ampliando la cobertura educativa.

---

# 18. Construcción y crecimiento

La historia debe incluir la participación de diferentes actores.

### Jaime Ortiz

Contribuyó mediante la venta de una casa y el terreno destinado a la obra social donde actualmente funciona la institución.

### Club de Leones

Contribuyó con la construcción de cuatro aulas hasta la altura de las ventanas.

### Concejo Municipal

Participó en la culminación de las obras y en la construcción de la antigua unidad sanitaria.

### Comunidad educativa

Contribuyó mediante:

- Ventas de alimentos.
- Reinados.
- Desfiles.
- Donaciones.
- Trabajos comunitarios.
- Aportes de las hermanas misioneras.
- Aportes de la comunidad educativa.

---

# 19. Actualidad institucional

La reseña histórica debe cerrar con el papel actual de la institución:

> La Institución Educativa Madre Laura continúa siendo un referente educativo del municipio de Apartadó y mantiene su compromiso con la formación de generaciones desde los valores humanos y cristianos, siguiendo el legado de Laura Montoya Upegui.

---

# 20. Principios rectores

La sección existente de **Principios Rectores** debe conservarse, pero cambiar de formato.

Actualmente aparece como:

```text
Título
Texto largo
Imagen
Mucho espacio vacío
```

La nueva estructura debe ser:

```text
Principios rectores
│
├── Introducción
│
├── Principios fundamentales
│
├── Formación integral
│
├── Comunidad educativa
│
└── Galería / evidencia
```

El contenido proporcionado por la institución debe mantenerse como fuente principal.

---

# 21. Valores institucionales

La página actual muestra el título:

> **VALORES INSTITUCIONALES**

pero contiene demasiado espacio vacío.

La nueva sección debe utilizar tarjetas, bloques o una composición visual.

Ejemplo:

```text
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Valor       │ │ Valor       │ │ Valor       │
│             │ │             │ │             │
│ Descripción │ │ Descripción │ │ Descripción │
└─────────────┘ └─────────────┘ └─────────────┘
```

Los valores deben utilizar únicamente la información institucional disponible.

---

# 22. Símbolos institucionales

La página actual de **Logos Institucionales** debe convertirse en:

> **Símbolos institucionales**

Con navegación interna:

```text
[ Bandera ] [ Escudo ] [ Himno ]
```

---

# 23. Bandera

Presentar:

- Imagen de la bandera.
- Descripción.
- Significado de los colores.

Según la información institucional suministrada:

### Azul claro

Simboliza:

- Devoción Mariana.
- Amor.
- Honestidad.
- Amistad.
- Armonía.

### Amarillo

Simboliza la luz que ilumina el camino de formación y los valores que la institución busca fomentar.

Se relaciona con:

- Ética.
- Responsabilidad.
- Honestidad.
- Solidaridad.
- Compromiso.
- Vida en comunidad.
- Diálogo.
- Perdón.
- Desarrollo y cambio social.

### Blanco

Simboliza:

- Defensa de la vida.
- Paz.
- Convivencia pacífica.
- Pureza.
- Sinceridad.
- Sencillez.

---

# 24. Escudo

Crear una sección independiente:

```text
Escudo institucional

[ Imagen del escudo ]

Significado
Elementos
Historia
```

El contenido debe utilizar únicamente la información oficial disponible.

---

# 25. Himno

Crear una sección:

```text
Himno institucional

[ Reproductor de audio, si existe ]

Historia
Información institucional
```

Si el texto completo del himno se publica, debe utilizarse únicamente la versión oficial autorizada por la institución.

---

# 26. Gobierno escolar

El Gobierno Escolar debe tener una sección propia dentro de **Comunidad**.

## Estructura

```text
Gobierno escolar
│
├── Participación estudiantil
├── Personero
├── Representante de estudiantes
├── Consejo estudiantil
├── Consejo directivo
└── Procesos electorales
```

---

# 27. Proceso de elección

El contenido existente de 2023 debe conservarse como registro histórico.

### Información disponible

El proceso de elección del personero y representante de estudiantes para 2023 inició con la elección de representantes de grupo.

Desde febrero se promovió la participación democrática de los estudiantes de grado once interesados en postularse.

El 20 de febrero se realizó la presentación de candidatos al Consejo Directivo.

---

# 28. Gobierno escolar como contenido dinámico

Para años futuros no debe crearse una página nueva desde cero.

Utilizar:

```text
Gobierno escolar

Año:
[ 2026 ▼ ]

Proceso electoral
Candidatos
Resultados
Representantes
Galería
```

Esto permitirá conservar el historial de diferentes años.

---

# 29. Padres de familia

Crear una sección:

> **Familias**

La información existente sobre las reuniones generales debe convertirse en contenido estructurado.

### Reunión general de padres

La institución realiza tradicionalmente una reunión general para socializar las directrices:

- Administrativas.
- Directivas.
- Académicas.
- Comunitarias.

La reunión se divide en dos momentos.

### Primer momento

Presentación de:

- Equipo directivo.
- Docentes.
- Planeación general del año.

### Segundo momento

Los directores de grupo presentan:

- Acuerdos.
- Estrategias de permanencia.
- Convivencia grupal.
- Orientaciones académicas.

---

# 30. Cronograma para padres

La información de la imagen actual debe transformarse en una experiencia más útil.

Actualmente se presenta mediante una imagen grande.

La nueva página debe ofrecer:

```text
Cronograma de atención a padres

[ Calendario ]

[ Direcciones de grupo ]

[ Atención a padres ]

[ Preinformes ]

[ Entrega de boletines ]
```

Además:

```text
[ Ver versión gráfica ]
[ Descargar ]
```

---

# 31. Excelencia académica

La excelencia académica debe convertirse en una de las secciones principales del sitio.

## Concepto

> **Reconocemos el esfuerzo y la excelencia de nuestros estudiantes.**

La institución registra resultados por:

- Año.
- Período.
- Grado.
- Grupo.
- Primer puesto.
- Segundo puesto.

---

# 32. Estructura de excelencia académica

```text
Excelencia académica
│
├── 2022
│   ├── Tercer período
│   └── Cuarto período
│
├── 2023
│   ├── Primer período
│   ├── Segundo período
│   └── Tercer período
│
└── 2024
    └── Segundo período
```

---

# 33. Tabla de excelencia

En lugar de mostrar listas enormes de texto, utilizar tablas filtrables.

```text
Año: [2024]
Período: [Segundo período]
Grado: [Todos]

┌──────────┬────────┬─────────────────────┬─────────────────────┐
│ Grado    │ Grupo  │ Primer puesto       │ Segundo puesto      │
├──────────┼────────┼─────────────────────┼─────────────────────┤
│ Preescolar│ A      │ Estudiante          │ Estudiante          │
│ Preescolar│ B      │ Estudiante          │ Estudiante          │
│ Primero   │ A      │ Estudiante          │ Estudiante          │
└──────────┴────────┴─────────────────────┴─────────────────────┘
```

---

# 34. Archivo histórico de excelencia

La información de 2022, 2023 y 2024 debe conservarse.

No debe eliminarse por ser información antigua.

Debe organizarse como:

```text
Archivo académico histórico
```

Esto permite consultar la evolución institucional sin llenar la navegación principal.

---

# 35. Eventos

El menú actual de **Eventos** debe convertirse en una sección de actualidad.

## Categorías

```text
Eventos
│
├── Académicos
├── Culturales
├── Comunitarios
├── Deportivos
├── Lauristas
├── Científicos
└── Institucionales
```

---

# 36. Eventos históricos

Los eventos de 2022 deben mantenerse como archivo institucional.

Ejemplos:

- Bazar gastronómico.
- Entrega de símbolos.
- Feria de la ciencia, tecnología y creatividad.
- Semana Laurista.
- Festival de valores.

La organización recomendada:

```text
Eventos
│
├── 2026
├── 2025
├── 2024
├── 2023
└── 2022
```

---

# 37. Bazar gastronómico 2022

Crear una noticia/evento individual:

> **Bazar gastronómico 2022**

### Fecha

2 de octubre de 2022.

### Contenido

El evento tuvo acogida por parte de la comunidad educativa y contó con la participación de estudiantes, padres, docentes y directivos.

La actividad inició con la bendición del presbítero Francisco Leones Blanco y el saludo de bienvenida de la rectora Rosalía Córdoba.

El evento también incluyó la presentación de los valores institucionales asignados a los diferentes grupos.

La actividad finalizó aproximadamente a las 3:30 p. m.

### Galería

Incluir las fotografías disponibles.

---

# 38. Entrega de símbolos

Crear una publicación:

> **Entrega de símbolos institucionales 2022**

### Fecha

17 de noviembre de 2022.

### Descripción

Actividad mediante la cual el grado once realizó la entrega simbólica de las insignias institucionales al grado décimo como representación de la continuidad de los procesos institucionales.

---

# 39. Feria de ciencia, tecnología y creatividad

Crear una categoría especial:

> **Feria de Ciencia, Tecnología y Creatividad**

La actividad puede dividirse en stands.

### Ciencias Naturales

> Museo de Ciencias

Temáticas:

- Célula.
- Cromosomas.
- Corazón.
- Cuerpo humano.
- Ecosistemas.

---

### Inglés

Uso de herramientas tecnológicas para fortalecer el aprendizaje.

Ejemplo mencionado:

- Kahoot.

La experiencia puede clasificarse como:

> **Tecnología aplicada al aprendizaje**

---

### Tecnología

Temas:

- Redes sociales.
- Uso responsable de internet.
- Riesgos del mal uso de redes sociales.
- Proyecto tecnológico.
- Solución de problemas mediante dispositivos, sistemas o máquinas.

---

### Ciencias Sociales

Instrumentos:

- Brújula.
- Astrolabio.
- Sextante.
- GPS.

Objetivos:

- Orientación espacial.
- Interpretación geográfica.
- Uso de recursos tecnológicos.
- Aplicación práctica.

---

### Humanidades

> **Laboratorio de emociones**

La literatura se presenta como detonante de emociones mediante poesía y lectura.

La actividad utiliza una metodología participativa para registrar las emociones generadas por los poemas.

---

# 40. Semana Laurista

La Semana Laurista debe tener una página propia.

## Ejemplo histórico

### 2022

```text
24 de octubre
Eucaristía + Donatón

25 de octubre
Desafío Laurista

26 de octubre
Actividades institucionales

27 de octubre
Actividades institucionales

28 de octubre
Actividades institucionales

29 de octubre
Cierre
```

Los datos exactos deben mostrarse según el cronograma oficial correspondiente a cada año.

---

# 41. Donatón 2022

La publicación puede incluir:

> **Donatón Laurista 2022**

Según el contenido institucional suministrado:

- Se recolectaron 119 mercados.
- 109 fueron destinados a estudiantes de la institución.
- 10 fueron entregados a la parroquia.

La información debe conservarse como parte de la memoria institucional.

---

# 42. Desafío Laurista

El contenido histórico debe organizarse por niveles.

### Preescolar

Rompecabezas con la imagen de Madre Laura.

### Básica primaria

Actividad:

> **¿Quién sabe más de la Madre Laura?**

Metodología:

> Alcance a la estrella.

### Otros niveles

Mantener las actividades descritas en los registros institucionales correspondientes.

---

# 43. Primer día 2026

Crear una publicación destacada:

> **Excavando en la profundidad del conocimiento**

### Año

2026.

### Concepto

La institución utilizó el lema:

> **“Excavando en las profundidades del conocimiento”**

como estrategia motivacional para el inicio del año escolar.

El objetivo fue incentivar a los estudiantes de preescolar a once a explorar el conocimiento mediante la temática de piedras preciosas y relacionarla con valores promovidos por la institución.

---

# 44. Evento 2026 como experiencia visual

La publicación puede incluir:

```text
[ Imagen principal ]

EXCAVANDO EN LAS PROFUNDIDADES
DEL CONOCIMIENTO

Inicio del año escolar 2026

[ Galería ]

[ Ver actividad ]
```

---

# 45. Documentos

La sección actual de documentos debe dividirse en dos grandes categorías.

## Categoría 1

> **Documentos y formatos de interés para la comunidad educativa**

Contenido actual:

- Estructura del Plan de Mejoramiento.
- Cronograma de atención a padres.
- Direcciones de grupo.
- Informes.
- Inducción a estudiantes nuevos 2026.
- Horario general de clases 2026.
- Programación para la planeación por departamentos de áreas.
- Horarios para timbres ajustados al Decreto 0277 de 2025.
- Cronograma de acompañamiento en los descansos.

---

# 46. Documentos institucionales

Segunda categoría:

> **Documentos de direccionamiento institucional**

Contenido:

- Proyecto Educativo Institucional P.E.I.
- Manual de Convivencia.
- Sistema Institucional de Evaluación de los Estudiantes S.I.E.E.

---

# 47. Nueva interfaz de documentos

En lugar de una lista larga:

```text
Documento
Documento
Documento
Documento
Documento
```

utilizar:

```text
DOCUMENTOS

[ Buscar documento... ]

Categoría:
[ Todos ▼ ]

Año:
[ Todos ▼ ]

Tipo:
[ Todos ▼ ]


┌─────────────────────────────────┐
│ 📄 Proyecto Educativo           │
│    Institucional                │
│                                 │
│ Institucional                   │
│                                 │
│ [ Ver ] [ Descargar ]           │
└─────────────────────────────────┘
```

---

# 48. Documentos destacados

Los documentos de uso frecuente deben aparecer primero.

Ejemplo:

```text
Documentos destacados

[ P.E.I. ]
[ Manual de convivencia ]
[ S.I.E.E. ]
[ Horario general 2026 ]
[ Inducción estudiantes 2026 ]
```

---

# 49. Horarios

Crear una sección específica:

> **Horarios**

Debe incluir:

- Horario general de clases.
- Horarios por jornada.
- Horarios por grupo cuando estén disponibles.
- Horarios especiales.
- Horarios de timbres.

---

# 50. Cronogramas

Crear una sección centralizada:

> **Cronogramas**

### Categorías

- Cronograma institucional.
- Atención a padres.
- Direcciones de grupo.
- Preinformes.
- Entrega de boletines.
- Acompañamiento en descansos.
- Eventos.
- Actividades académicas.

Esto evita que el usuario tenga que buscar cronogramas entre documentos y noticias.

---

# 51. Recursos académicos

La sección Académico debe incluir:

```text
Académico
│
├── Excelencia académica
├── Horarios
├── Planeación
├── Áreas académicas
├── Recursos
└── Documentos académicos
```

---

# 52. Gestión del contenido actual

La información actual puede mapearse de esta manera:

| Contenido actual | Nueva ubicación |
|---|---|
| Principios rectores | Institución |
| Valores institucionales | Institución |
| Logos institucionales | Institución → Símbolos |
| Contextualización | Institución |
| Reseña histórica | Institución → Historia |
| Gobierno escolar | Comunidad |
| Reunión padres | Comunidad → Familias |
| Excelencia académica | Académico |
| Documentos | Recursos |
| Bazar gastronómico | Actualidad → Eventos |
| Entrega de símbolos | Actualidad → Eventos |
| Feria de ciencia | Actualidad → Eventos |
| Semana Laurista | Actualidad |
| Primer día 2026 | Actualidad → Eventos |
| Cronograma | Recursos / Cronogramas |
| Horarios | Académico / Recursos |

---

# 53. Modelo de contenido

Cada contenido debe manejar metadatos.

## Noticias y eventos

```text
Título
Fecha
Categoría
Imagen principal
Resumen
Contenido
Galería
Año
Autor / área responsable
```

---

## Documentos

```text
Nombre
Descripción
Categoría
Año
Tipo
Archivo
Fecha de publicación
Fecha de actualización
```

---

## Excelencia académica

```text
Año
Período
Grado
Grupo
Primer puesto
Segundo puesto
```

---

## Cronogramas

```text
Título
Año
Categoría
Fecha de inicio
Fecha final
Descripción
Archivo gráfico
Archivo descargable
```

---

# 54. Organización por años

La cantidad de información histórica requiere una estructura temporal.

```text
Archivo institucional

2026
│
├── Eventos
├── Excelencia académica
├── Documentos
├── Cronogramas
└── Noticias

2025
│
└── ...

2024
│
└── Excelencia académica

2023
│
└── Excelencia académica

2022
│
├── Eventos
├── Excelencia académica
└── Semana Laurista
```

La información histórica no debe mezclarse con la actualidad.

---

# 55. Galería

Crear una galería institucional:

> **Así vivimos nuestra institución**

### Categorías

- Académico.
- Ciencia y tecnología.
- Cultura.
- Deportes.
- Semana Laurista.
- Comunidad.
- Eventos.
- Proyectos.

Cada imagen debe poder asociarse a un evento o actividad.

---

# 56. Contacto

La información actual del footer debe convertirse en una página de contacto completa.

### Información disponible

```text
Dirección:
Cl. 99A #104-12
Barrio Ortiz
Apartadó, Antioquia

Teléfono:
604 8428060
```

El diseño debe incluir:

- Ubicación.
- Teléfono.
- Correo institucional si está disponible.
- Horarios si están disponibles.
- Redes sociales oficiales si están disponibles.
- Mapa cuando corresponda.

---

# 57. Footer

El footer actual puede evolucionar de:

```text
Logo
Dirección
Teléfono
Copyright
```

a:

```text
┌────────────────────────────────────────────────┐
│ LOGO                                           │
│ Institución Educativa Madre Laura              │
│                                                │
│ Institución        Comunidad        Recursos   │
│ Historia           Gobierno         Documentos │
│ Principios         Familias         Cronogramas│
│ Valores            Estudiantes      Horarios   │
│ Símbolos           Docentes         Eventos    │
│                                                │
│ Contacto                                        │
│ 📍 Cl. 99A #104-12, Barrio Ortiz               │
│ 📞 604 8428060                                 │
│                                                │
│ © Institución Educativa Madre Laura            │
└────────────────────────────────────────────────┘
```

---

# 58. Arquitectura completa

```text
INICIO
│
├── INSTITUCIÓN
│   ├── Contextualización
│   │   ├── Reseña del sector
│   │   ├── Ubicación geográfica
│   │   ├── Contexto cultural
│   │   ├── Contexto económico
│   │   ├── Contexto recreacional
│   │   ├── Contexto social
│   │   ├── Contexto religioso
│   │   ├── Contexto político
│   │   └── Contexto ecológico
│   │
│   ├── Historia
│   ├── Principios rectores
│   ├── Valores institucionales
│   └── Símbolos
│       ├── Bandera
│       ├── Escudo
│       └── Himno
│
├── ACADÉMICO
│   ├── Excelencia académica
│   │   ├── 2022
│   │   ├── 2023
│   │   └── 2024
│   ├── Horarios
│   ├── Planeación
│   ├── Áreas
│   └── Recursos académicos
│
├── COMUNIDAD
│   ├── Gobierno escolar
│   ├── Familias
│   ├── Estudiantes
│   ├── Docentes
│   └── Convivencia
│
├── ACTUALIDAD
│   ├── Noticias
│   ├── Eventos
│   ├── Semana Laurista
│   └── Archivo histórico
│
├── RECURSOS
│   ├── Documentos
│   ├── Cronogramas
│   ├── Horarios
│   ├── Formatos
│   └── Descargas
│
└── CONTACTO
```

---

# 59. Flujo de navegación: padre de familia

```text
Inicio
↓
Accesos rápidos
↓
Cronogramas
↓
Atención a padres
↓
Consultar fecha
```

---

# 60. Flujo de navegación: estudiante

```text
Inicio
↓
Académico
↓
Excelencia académica
↓
Año
↓
Período
↓
Grado
```

---

# 61. Flujo de navegación: docente

```text
Inicio
↓
Recursos
↓
Documentos
↓
Categoría
↓
Documento
```

---

# 62. Flujo de navegación: visitante

```text
Inicio
↓
Institución
↓
Historia
↓
Principios
↓
Valores
↓
Símbolos
```

---

# 63. Flujo de navegación: comunidad

```text
Inicio
↓
Comunidad
↓
Gobierno escolar
↓
Participación
↓
Información del año correspondiente
```

---

# 64. Transformación de las páginas actuales

## Página actual de Horizonte Institucional

Actualmente:

```text
Horizonte institucional
↓
Principios rectores
↓
Texto
↓
Imagen
↓
Mucho espacio vacío
↓
Valores institucionales
↓
Cronograma
```

### Nueva propuesta

```text
Institución
│
├── Hero institucional
├── Principios rectores
├── Valores
├── Historia
├── Símbolos
└── Contextualización
```

Los cronogramas deben trasladarse a **Recursos / Cronogramas**, donde el usuario esperaría encontrarlos.

---

# 65. Transformación de Logos Institucionales

Actualmente:

```text
Logos institucionales
↓
Bandera
↓
Significado
↓
Cronograma
↓
Footer
```

### Nueva propuesta

```text
Símbolos institucionales

[ Bandera ]
[ Escudo ]
[ Himno ]
```

El cronograma deja de estar mezclado con la identidad institucional y pasa a su ubicación natural.

---

# 66. Eliminación de espacios vacíos

Las capturas muestran grandes espacios verticales entre secciones.

Esto debe corregirse mediante:

- Menor padding vertical.
- Mejor agrupación de contenido.
- Cards.
- Dos columnas cuando sea apropiado.
- Galerías.
- Bloques destacados.
- Separadores visuales.
- Timeline.
- Secciones relacionadas.

Una página institucional no necesita parecer que está esperando que aparezca contenido por generación espontánea.

---

# 67. Manejo de contenido largo

Los textos históricos y contextuales son importantes, pero no deben mostrarse siempre como bloques gigantes.

Utilizar:

- Resúmenes.
- Acordeones.
- Tabs.
- Cards.
- Columnas.
- Timeline.
- Subtítulos.
- Citas destacadas.

Ejemplo:

```text
Contextualización institucional

[ Sector ]
[ Cultura ]
[ Economía ]
[ Recreación ]
[ Sociedad ]
[ Religión ]
[ Política ]
[ Ecología ]
```

---

# 68. Estrategia para información histórica

La institución tiene una cantidad considerable de contenido histórico.

No debe eliminarse.

Debe clasificarse como:

```text
Contenido actual
Contenido histórico
Archivo institucional
```

### Contenido actual

Información vigente y de uso frecuente.

### Contenido histórico

Eventos y actividades de años anteriores.

### Archivo institucional

Registros históricos que deben conservarse aunque ya no sean de consulta diaria.

---

# 69. Estrategia de contenido para eventos

Cada evento debe seguir una plantilla.

```text
Categoría

Título del evento

Fecha

Imagen principal

Resumen

Descripción

Actividades realizadas

Resultados

Galería

Eventos relacionados
```

Esto permitirá que eventos como:

- Bazar gastronómico.
- Feria de ciencia.
- Semana Laurista.
- Entrega de símbolos.
- Primer día 2026.

tengan una presentación uniforme.

---

# 70. Estrategia de contenido para documentos

Cada documento debe mostrar:

```text
Nombre
Categoría
Año
Descripción
Formato
Fecha
```

Ejemplo:

```text
┌──────────────────────────────────────┐
│ 📄 MANUAL DE CONVIVENCIA             │
│                                      │
│ Documento institucional              │
│ Año: 2026                            │
│                                      │
│ Documento que orienta la convivencia│
│ de la comunidad educativa.           │
│                                      │
│ [ Ver ] [ Descargar ]                │
└──────────────────────────────────────┘
```

---

# 71. Estrategia para imágenes con información

Cuando un contenido importante esté disponible únicamente como imagen:

```text
Imagen original
      +
Título descriptivo
      +
Resumen
      +
Información accesible equivalente
      +
Descarga
```

Ejemplo:

```text
Cronograma de atención a padres 2026

[ Vista previa ]

Descripción:
Cronograma de direcciones de grupo,
atención a padres, preinformes y
entrega de boletines.

[ Ver completo ]
[ Descargar ]
```

---

# 72. Principio de contenido verificable

No inventar:

- Datos.
- Fechas.
- Estadísticas.
- Nombres.
- Cargos.
- Logros.
- Información histórica.
- Horarios.
- Documentos.

Los contenidos deben proceder de información institucional verificada.

Cuando un dato no esté disponible:

> **Información no especificada en los documentos institucionales.**

---

# 73. Gestión futura

La plataforma debe permitir agregar fácilmente:

```text
Nuevo evento
Nuevo documento
Nueva noticia
Nuevo cronograma
Nuevo período académico
Nueva galería
Nuevo resultado de excelencia
```

No debe ser necesario modificar manualmente la estructura del sitio para cada nueva publicación.

---

# 74. Resumen de contenido

| Área | Contenido |
|---|---|
| Institución | Historia, contexto, principios, valores, símbolos |
| Académico | Excelencia, horarios, planeación, recursos |
| Comunidad | Gobierno escolar, familias, estudiantes, docentes |
| Actualidad | Noticias, eventos, Semana Laurista |
| Recursos | Documentos, formatos, cronogramas, descargas |
| Contacto | Dirección, teléfono, ubicación y canales oficiales |

---

# 75. Resumen de UI / UX

| Elemento | Propuesta |
|---|---|
| Concepto | Espacio digital de la comunidad Madre Laura |
| Identidad | Laurista, educativa y comunitaria |
| Color principal | Azul |
| Color secundario | Amarillo |
| Fondo | Blanco / gris muy claro |
| Tipografía | Inter + Plus Jakarta Sans |
| Navegación | Orientada al usuario |
| Contenedor | 1200 px |
| Cards | 16 px |
| Hero | 24 px |
| Diseño | Responsive |
| Iconografía | Sistema único |
| Imágenes | Institucionales |
| Documentos | Categorizados |
| Eventos | Organizados por año y categoría |
| Excelencia | Filtrable por año/período/grado |
| Cronogramas | Calendario + versión gráfica |
| Historia | Línea de tiempo |
| Símbolos | Secciones individuales |
| Accesibilidad | WCAG AA como referencia |
| SEO | Optimizado por sección |

---

# 76. Resultado esperado

La nueva página debe transformar la experiencia actual:

```text
MENÚ DE GESTIONES
       +
TEXTOS
       +
IMÁGENES
       +
DOCUMENTOS
```

en:

```text
             INSTITUCIÓN
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
   ACADÉMICO   COMUNIDAD  ACTUALIDAD
       │          │          │
       └──────────┼──────────┘
                  ↓
              RECURSOS
                  │
                  ↓
              CONTACTO
```

---

# 77. Identidad digital final

La nueva web debe comunicar:

> **Una institución con historia, valores y tradición, pero también con una comunidad activa, procesos educativos actuales y una presencia digital moderna.**

La identidad debe combinar:

```text
HISTORIA
   +
VALORES
   +
EDUCACIÓN
   +
TECNOLOGÍA
   +
COMUNIDAD
   +
ACTUALIDAD
```

---

# 78. Criterio final de diseño

La página web **no debe ser únicamente la vitrina de la Institución Educativa Madre Laura. Debe ser su espacio digital.**

Cada decisión debe evaluarse según estas preguntas:

1. ¿Ayuda al usuario a encontrar lo que necesita?
2. ¿Representa correctamente la identidad Laurista?
3. ¿Mantiene la información histórica?
4. ¿Facilita el acceso a documentos?
5. ¿Hace visibles las actividades de la comunidad?
6. ¿Permite consultar información académica rápidamente?
7. ¿Funciona correctamente en dispositivos móviles?
8. ¿Puede mantenerse actualizada?
9. ¿Es accesible?
10. ¿Se siente como una institución educativa actual?

---

# 79. Principio general del proyecto

> **Menos búsqueda.**
> **Menos confusión.**
> **Menos documentos perdidos.**
> **Menos espacios vacíos.**
> **Más acceso.**
> **Más información útil.**
> **Más comunidad.**
> **Más identidad Laurista.**
> **Más interacción.**

---

# 80. Visión final

La propuesta de rediseño debe convertir el sitio web de la **Institución Educativa Madre Laura** en una plataforma institucional que conecte su pasado, su presente y su comunidad.

La experiencia debe integrar:

```text
                HISTORIA
                   │
                   ↓
              IDENTIDAD
                   │
        ┌──────────┼──────────┐
        ↓          ↓          ↓
   EDUCACIÓN   COMUNIDAD  ACTUALIDAD
        │          │          │
        └──────────┼──────────┘
                   ↓
               TECNOLOGÍA
                   │
                   ↓
          ESPACIO DIGITAL
          MADRE LAURA
```

El resultado debe ser una web:

> **Institucional sin ser rígida.**
> **Moderna sin perder tradición.**
> **Tecnológica sin perder humanidad.**
> **Educativa sin ser monótona.**
> **Informativa sin convertirse en un archivo.**
> **Laurista sin dejar de ser contemporánea.**

La página debe representar a una comunidad educativa con una historia que comenzó en 1967, una identidad construida alrededor del legado de Laura Montoya Upegui y una vida institucional que continúa desarrollándose mediante sus estudiantes, docentes, familias, directivos, proyectos, actividades y procesos académicos.

> **La web no debe limitarse a contar quién es la Institución Educativa Madre Laura. Debe permitir vivir digitalmente una parte de su comunidad, su historia, su educación y su identidad.**
