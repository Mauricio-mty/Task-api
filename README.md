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

## Estructura del Proyecto

El proyecto sigue una estructura modular para separar responsabilidades y facilitar el mantenimiento.

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

#### `POST /login`
- **Descripción:** Autentica a un usuario con su email y contraseña.
- **Acceso:** Público.
- **Body:** `{ "email": "user@example.com", "password_hash": "password123" }`
- **Respuesta Exitosa (200):** Devuelve un token JWT.
  ```json
  {
      "token": "ey..."
  }
  ```

#### `POST /login/verify`
- **Descripción:** Verifica si un token JWT existente es válido (no ha expirado y está bien firmado).
- **Acceso:** Privado (requiere token).
- **Headers:** `Authorization: Bearer <token>`
- **Respuesta Exitosa (200):**
  ```json
  {
      "message": "El token es válido"
  }
  ```

### Rutas Protegidas

Las siguientes rutas requieren un token JWT válido en la cabecera `Authorization`.

- **`/user`**: Endpoints para la gestión de usuarios.
- **`/task`**: Endpoints para el CRUD de tareas.
- **`/tag`**: Endpoints para la gestión de etiquetas.
- **`/coment`**: Endpoints para la gestión de comentarios.

Si se intenta acceder a estas rutas sin un token válido, la API devolverá un error `401 Unauthorized` o `403 Forbidden`.
