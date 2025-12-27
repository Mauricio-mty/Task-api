# API de Gestión de Tareas

Este es el backend para una aplicación de gestión de tareas (To-Do list). Proporciona una API RESTful para gestionar usuarios, tareas, etiquetas y comentarios, con un sistema de autenticación basado en JSON Web Tokens (JWT).

## Características

- Creación y gestión de usuarios.
- Autenticación de usuarios y generación de tokens JWT.
- Creación, lectura, actualización y eliminación (CRUD) de tareas.
- Asignación de etiquetas y comentarios a las tareas.
- Rutas protegidas que requieren autenticación.

---

## Puesta en Marcha

Sigue estos pasos para levantar el entorno de desarrollo local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone <URL-DEL-REPOSITORIO>
    cd <NOMBRE-DEL-DIRECTORIO>
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables. Asegúrate de usar un secreto JWT seguro.

    ```env
    # Puerto en el que correrá el servidor
    PORT=3030

    # Secreto para firmar los JSON Web Tokens
    JWT_SECRET=tu_secreto_super_secreto

    # Configuración de la base de datos
    DB_USER=tu_usuario_db
    DB_PASSWORD=tu_password_db
    DB_HOST=localhost
    DB_NAME=tu_nombre_db
    ```

4.  **Inicia el servidor:**
    Para iniciar el servidor en modo de desarrollo (con recarga automática ante cambios), ejecuta:
    ```bash
    npm run dev
    ```
    O para producción:
    ```bash
    npm start
    ```
    El servidor estará disponible en `http://localhost:3030`.

---

## Arquitectura del Proyecto

El proyecto sigue una arquitectura en capas bien definida, lo que facilita la separación de responsabilidades, la escalabilidad y el mantenimiento.

- **Capa de Rutas (`/routes`):** Define los endpoints de la API (ej. `/users`, `/tasks`). Actúa como la puerta de entrada, mapeando las URLs a los controladores correspondientes.

- **Capa de Controladores (`/controllers`):** Procesa las peticiones HTTP entrantes. Su función es recibir la solicitud, llamar a los servicios necesarios para realizar la lógica de negocio y enviar la respuesta al cliente.

- **Capa de Servicios (`/services`):** Contiene la lógica de negocio principal. Orquesta las operaciones, interactúa con los modelos y realiza validaciones complejas.

- **Capa de Modelos (`/models`):** Define la estructura de los datos (esquemas) y gestiona la interacción con la base de datos.

- **Middleware (`/middleware`):** Funciones que se ejecutan antes de que una petición llegue al controlador. Se utiliza para tareas como la autenticación (verificar tokens JWT) o la gestión de CORS.

- **Configuración (`/config`):** Centraliza la configuración de la aplicación, como la conexión a la base de datos y la inicialización de las rutas.

- **Esquemas de Validación (`/schema`):** Define reglas para validar los datos de entrada, asegurando que solo se procese información válida y consistente.

```
├── src/
│   ├── config/             # Configuraciones (base de datos, rutas)
│   ├── controllers/        # Lógica de negocio (qué hacer con cada petición)
│   ├── middleware/         # Middlewares de Express (CORS, autenticación)
│   ├── models/             # Modelos y esquemas de la base de datos (Sequelize)
│   ├── routes/             # Definición de las rutas de la API
│   ├── schema/             # Esquemas de validación de datos (Joi/Zod)
│   └── services/           # Lógica de servicio más compleja
├── __tests__/              # Pruebas unitarias y de integración
├── .env.example            # Ejemplo de variables de entorno
├── index.js                # Punto de entrada de la aplicación
└── package.json            # Dependencias y scripts del proyecto
```

---

## API Endpoints

### Autenticación

| Método | Ruta | Descripción | Acceso |
| --- | --- | --- | --- |
| `POST` | `/login` | Autentica a un usuario y devuelve un token JWT. | Público |
| `POST` | `/login/verify`| Verifica si un token JWT es válido. | Privado |

### Usuarios (`/user`)

| Método | Ruta | Descripción | Acceso |
| --- | --- | --- | --- |
| `POST` | `/` | Crea un nuevo usuario. | Público |
| `GET` | `/` | Obtiene todos los usuarios. | Privado |
| `GET` | `/:id` | Obtiene un usuario por su ID. | Privado |
| `PUT` | `/:id` | Actualiza un usuario por su ID. | Privado |
| `DELETE`| `/:id` | Elimina un usuario por su ID. | Privado |

### Tareas (`/task`)

| Método | Ruta | Descripción | Acceso |
| --- | --- | --- | --- |
| `POST` | `/` | Crea una nueva tarea. | Privado |
| `GET` | `/` | Obtiene todas las tareas. | Privado |
| `GET` | `/:id` | Obtiene una tarea por su ID. | Privado |
| `PUT` | `/:id` | Actualiza el estado de una tarea. | Privado |
| `DELETE`| `/:id` | Elimina una tarea por su ID. | Privado |

### Etiquetas (`/tag`)

| Método | Ruta | Descripción | Acceso |
| --- | --- | --- | --- |
| `POST` | `/` | Crea una nueva etiqueta. | Privado |
| `GET` | `/` | Obtiene todas las etiquetas. | Privado |
| `GET` | `/:id` | Obtiene una etiqueta por su ID. | Privado |
| `PUT` | `/:id` | Actualiza una etiqueta por su ID. | Privado |
| `DELETE`| `/:id` | Elimina una etiqueta por su ID. | Privado |

### Comentarios (`/coment`)

| Método | Ruta | Descripción | Acceso |
| --- | --- | --- | --- |
| `POST` | `/` | Crea un nuevo comentario. | Privado |
| `GET` | `/` | Obtiene todos los comentarios. | Privado |
| `PUT` | `/:id` | Actualiza un comentario por su ID. | Privado |
| `DELETE`| `/:id` | Elimina un comentario por su ID. | Privado |

**Nota:** La ruta `GET /coment/:id` estaba incorrectamente configurada para actualizar un comentario. Se ha corregido a `PUT /coment/:id` para seguir las convenciones REST. El endpoint `GET /coment/:id` ahora recupera un comentario por su ID.
