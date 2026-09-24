# TP NestJS - Patrones de Diseño

API REST desarrollada con **NestJS** y **TypeScript** para el trabajo práctico de la materia **Patrones de Diseño**.

El proyecto está organizado mediante módulos y permite gestionar diferentes recursos de una aplicación, incluyendo **productos, categorías y órdenes**.

## Tecnologías utilizadas

* **Node.js**
* **TypeScript**
* **NestJS**
* **Express**
* **class-validator**
* **class-transformer**
* **Jest**
* **Supertest**
* **Prettier**
* **Oxlint**

## Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

* Node.js
* npm

Podés comprobar que estén instalados ejecutando:

```bash
node --version
npm --version
```

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar a la carpeta del proyecto:

```bash
cd tp-nestjs-patrones-diseno
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución

### Modo desarrollo

```bash
npm run start:dev
```

La aplicación se ejecutará en modo desarrollo y se actualizará automáticamente al detectar cambios.

### Modo normal

```bash
npm run start
```

### Modo producción

Primero compilar el proyecto:

```bash
npm run build
```

Luego ejecutar:

```bash
npm run start:prod
```

## Estructura del proyecto

```text
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
│
├── categories/
│   ├── categories.controller.ts
│   ├── categories.module.ts
│   └── categories.service.ts
│
├── orders/
│   ├── orders.controller.ts
│   ├── orders.module.ts
│   └── orders.service.ts
│
└── products/
    ├── products.controller.ts
    ├── products.module.ts
    └── products.service.ts

test/
└── jest-e2e.json
```

### Módulos principales

**Products**

Gestiona las operaciones relacionadas con los productos.

**Categories**

Gestiona las categorías utilizadas por los productos.

**Orders**

Gestiona las órdenes de la aplicación.

## Validaciones de Products

Para la creación de productos se utiliza `CreateProductDto`, junto con las validaciones proporcionadas por `class-validator`.

| Campo         | Tipo     | Validaciones                       |
| ------------- | -------- | ---------------------------------- |
| `name`        | `string` | Obligatorio y no puede estar vacío |
| `description` | `string` | Debe ser de tipo texto             |
| `price`       | `number` | Mínimo `0.01`                      |
| `stock`       | `number` | Mínimo `0`                         |
| `categoryId`  | `number` | Obligatorio                        |

### Ejemplo de producto válido

```json
{
  "name": "Producto de ejemplo",
  "description": "Descripción del producto",
  "price": 1500,
  "stock": 10,
  "categoryId": 1
}
```

### Consideraciones

* `name` no puede estar vacío.
* `description` debe ser un texto.
* `price` debe ser un número mayor o igual a `0.01`.
* `stock` debe ser un número mayor o igual a `0`.
* `categoryId` debe ser un número y debe estar presente.

## Tests

El proyecto utiliza **Jest** para realizar pruebas unitarias y pruebas end-to-end.

### Ejecutar las pruebas

```bash
npm test
```

### Ejecutar las pruebas en modo watch

```bash
npm run test:watch
```

### Ejecutar pruebas end-to-end

```bash
npm run test:e2e
```

### Generar cobertura

```bash
npm run test:cov
```

## Lint

Para analizar el código utilizando Oxlint:

```bash
npm run lint
```

## Formateo

Para aplicar el formato definido por Prettier:

```bash
npm run format
```

## Scripts disponibles

| Comando               | Descripción                             |
| --------------------- | --------------------------------------- |
| `npm run start`       | Inicia la aplicación                    |
| `npm run start:dev`   | Inicia la aplicación en modo desarrollo |
| `npm run start:debug` | Inicia la aplicación en modo debug      |
| `npm run start:prod`  | Ejecuta la aplicación en producción     |
| `npm run build`       | Compila el proyecto                     |
| `npm test`            | Ejecuta las pruebas                     |
| `npm run test:watch`  | Ejecuta las pruebas en modo watch       |
| `npm run test:e2e`    | Ejecuta las pruebas end-to-end          |
| `npm run test:cov`    | Genera el reporte de cobertura          |
| `npm run lint`        | Analiza el código con Oxlint            |
| `npm run format`      | Formatea el código con Prettier         |

## Estado del proyecto

El proyecto se encuentra desarrollado como parte de un trabajo práctico académico utilizando NestJS y TypeScript.

## Licencia

Este proyecto fue desarrollado con fines académicos.
