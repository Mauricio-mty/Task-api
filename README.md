# API de Tareas

Esta API permite gestionar tareas utilizando Node.js, Express y Sequelize con PostgreSQL.

## Instalación

1. Clonar el repositorio
2. Ejecutar `npm install` para instalar las dependencias
3. Configurar la base de datos PostgreSQL según sea necesario
4. Ejecutar el servidor con `npm start`

## Tecnologías y Dependencias

- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL
- uuid (para generación de IDs)
- nodemon (para desarrollo)

## Modelos

### Task Model
- **id**: UUID (clave primaria, generada automáticamente)
- **title**: STRING (requerido)
- **description**: STRING (opcional)
- **done**: BOOLEAN (por defecto false)
- **creation_date**: DATEONLY (por defecto fecha actual)

### Coment Model
- **id**: UUID (clave primaria, generada automáticamente)
- **task_id**: UUID (clave foránea a Task)
- **user_id**: UUID (clave foránea a User)
- **content**: STRING (requerido)
- **created_at**: DATEONLY (por defecto fecha actual)

### User Model
- **id**: UUID (clave primaria, generada automáticamente)
- **username**: STRING (requerido)
- **email**: STRING (requerido)
- **password_hash**: STRING (requerido)
- **created_date**: DATEONLY (por defecto fecha actual)

### Tag Model
- **id**: UUID (clave primaria, generada automáticamente)
- **name**: STRING (requerido)
- **color**: STRING (opcional)

## Funcionalidades por Modelo

### Task Model
- **Obtener todas las tareas**: Recupera una lista de todas las tareas almacenadas.
- **Crear nueva tarea**: Permite crear una nueva tarea con los datos proporcionados.
- **Obtener tarea por ID**: Recupera una tarea específica utilizando su ID.
- **Actualizar tarea por ID**: Modifica el estado o datos de una tarea existente.
- **Eliminar tarea por ID**: Borra una tarea específica de la base de datos.

### Coment Model
- **Crear nuevo comentario**: Permite agregar un comentario a una tarea por un usuario.
- **Obtener todos los comentarios**: Recupera todos los comentarios almacenados.

### User Model
- **Crear nuevo usuario**: Permite registrar un nuevo usuario.
- **Obtener todos los usuarios**: Recupera una lista de todos los usuarios.

### Tag Model
- **Crear nueva etiqueta**: Permite crear una nueva etiqueta.
- **Obtener todas las etiquetas**: Recupera una lista de todas las etiquetas.

## Endpoints

### Tareas
- **GET /task/**: Obtener todas las tareas
- **POST /task/**: Crear una nueva tarea
- **GET /task/:id**: Obtener una tarea específica por ID
- **PUT /task/:id**: Actualizar una tarea por ID
- **DELETE /task/:id**: Eliminar una tarea por ID

### Comentarios
- **POST /coment/**: Crear un nuevo comentario
- **GET /coment/**: Obtener todos los comentarios

### Usuarios
- **POST /user/**: Crear un nuevo usuario
- **GET /user/**: Obtener todos los usuarios

### Etiquetas
- **POST /tag/**: Crear una nueva etiqueta
- **GET /tag/**: Obtener todas las etiquetas

El servidor se ejecuta en el puerto 3030.
