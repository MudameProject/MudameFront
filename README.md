## Mudame - v1

#### Miembros:

    -Alejandro Marulanda (Spring Boot)
    -Nicolas Luna (Spring Boot)
    -Carlos Aguiar (Spring Boot)
    -David Osorio (Spring Boot)
    -Daniel Jimenez (NestJS)
    -Miguel Angel Rivera (NestJS)


Mudame es una aplicación API RESTful conformada por React (FrontEnd) y SpringBoot (Backend), diseñada para gestionar un proceso de mudanza digital. Esta API se integra con NestJs para permitir a los usuarios registrarse e iniciar sesión, generando una autenticación que les permite administrar sus mudanzas mediante roles específicos y acceder a los demás servicios que ofrece la aplicación.

## Instalación local de la aplicación
Paso 1: Abrir terminal

Paso 2: Clonar repositorios MudameFront, MudameBack y Api-auth-users
``` 
git clone https://github.com/MudameProject/MudameFront.git
```
```
git clone https://github.com/MudameProject/MudameBack.git
```
```
git clone https://github.com/MudameProject/Api-auth-users.git
```


## Despliegue del FrontEnd

#### Configuracion Local
```
npm install

```
Iniciar el servidor de desarrollo 

```
npm run dev

```

## Despliegue del Backend (Spring Boot)

#### Configuracion Local

>Requerimientos:
>Tener un administrador de Database como (Mysql, DBeaver,PostgreSQL,etc...)
>Tener Java v17 o posteriores preinstalado 

Abrir servidor en Mysql

>Tener Xamp preinstalado si estas en windows

Instalar pack de extensiones de Java en Visual Studio Code
```
https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack
```

Instalar pack de extensiones de Springboot en Visual Studio Code
```
https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack

```
>En caso de que la extension de SpringBoot no se muestre
>Abrir un archivo cualquiera que contenga la extension .java

```
Entrar a la extension Spring Boot Dashboard y Presionar "Run"
```

## Despliegue del Backend (NestJs)

#### Configuracion Local

>Requerimientos:
>Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde nodejs.org.
>Instala Nest.js globalmente si aún no lo has hecho: 
```
npm install -g @nestjs/cli
```

Instalar dependencias:

```
npm install
```


## Características

- **Autenticación de Usuarios**: Administra el acceso mediante un sólido sistema de autenticación basado en tokens JWT.
- **Validación de Datos**: Garantiza la integridad de los datos mediante validaciones exhaustivas en todas las entradas.
- **Gestión de Roles**:  Controla el acceso a diferentes partes de la API según los roles de usuario (ADMIN, USER, DRIVER).
- **Seguridad y Autenticación**: Implementa un sistema de autenticación sólido utilizando tokens JWT (JSON Web Tokens) para proteger las rutas y recursos de la API
- **Manejo de Errores y Excepciones**: Proporciona respuestas claras y códigos de estado HTTP apropiados para diferentes situaciones (por ejemplo, errores de validación, recursos no encontrados, etc.).

## Tecnologías Utilizadas
- Spring Boot: Spring Boot es un framework que simplifica la creación de aplicaciones Java basadas en Spring, proporcionando configuraciones predeterminadas y una estructura fácil de seguir.

- React: Es una biblioteca de JavaScript para construir interfaces de usuario interactivas, creando componentes reutilizables y gestionando el estado de la aplicación de manera eficiente.

- Nest.js: Un framework progresivo de Node.js para construir aplicaciones de servidor eficientes y escalables.

- JWT: Para la autenticación y gestión de sesiones.

- Gitflow: Estrategia de manejo de ramas que mantiene el desarrollo organizado y eficiente.

## Dependencias

Este proyecto utiliza las siguientes librerías y frameworks:

- Nest.js: `@nestjs/common`, `@nestjs/core`, `@nestjs/config`, `@nestjs/platform-express` (versión 10.0.0)
- Autenticación: `@nestjs/jwt` (versión 10.2.0), `@nestjs/passport` (versión 10.0.3), `passport` (versión 0.7.0), `passport-jwt` (versión 4.0.1)
- Documentación de la API: `@nestjs/swagger` (versión 7.3.1)
- ORM y Bases de Datos: `@nestjs/typeorm` (versión 10.0.2), `typeorm` (versión 0.3.20), `pg` (versión 8.11.5)
- Herramientas de Seguridad: `bcrypt` (versión 5.1.1), 
- Manejo de Metadatos: `reflect-metadata` (versión 0.2.0)
- Validación de Datos: `class-validator` (versión 0.14.1), `class-transformer` (versión 0.5.1)
- Programación Reactiva: `rxjs` (versión 7.8.1)
- AWS SDK: `aws-sdk` (versión 2.1286.0)
- SpringBoot: `org.springframework.boot:spring-boot-starter`,
    `org.springframework.boot:spring-boot-starter-web`,
    `org.springframework.boot:spring-boot-starter-security`,
    `io.jsonwebtoken:jjwt:`0.9.1,
    `io.springfox:springfox-swagger2:`2.9.2,
    `io.springfox:springfox-swagger-ui:`2.9.2,
    `org.springframework.boot:spring-boot-starter-data-jpa`,
    `com.mysql.cj.jdbc:mysql-connector-java`,
    `org.springframework.boot:spring-boot-starter-validation`,
    `org.springframework.boot:spring-boot-starter-webflux`



## Estructura de carpetas del proyecto Spring Boot

La organización del código fuente dentro de la carpeta `src` incluye:


- `src`:
    - `main`:
    - `MudameB`:
        - `api`:
        - `controllers`:
            - `AuthController.java`: Controlador para autenticación.
            - `ClientController.java`: Controlador para operaciones relacionadas con clientes.
            - `DriverController.java`: Controlador para operaciones relacionadas con conductores.
            - `ReservationController`.java: Controlador para operaciones relacionadas con reservas.
            - `TruckController.java`: Controlador para operaciones relacionadas con camiones.
        - `dto`:
        - `errors`:
            - `BaseErrorResponse.java`: Clase base para respuestas de errores.
            - `ErrorsResp.java`: Respuesta específica para errores.
        - `request`:
            - `ClientRegiserReq.java`: Solicitud de registro de cliente.
            - `ClientReq.java`: Solicitud de cliente.
            - `DriverRegisterReq.java`: Solicitud de registro de conductor.
            - `DriverReq.java`: Solicitud de conductor.
            - `LoginReq.java`: Solicitud de inicio de sesión.
        - ` RegisterReq.java`: Solicitud de registro.
        - ` ReservationReq.java`: Solicitud de reserva.
            - `TruckReq.java`: Solicitud de camión.
        - `response`:
        - ` AuthResp.java`: Respuesta de autenticación.
        - ` BasicClient.java`: Cliente básico.
        - ` ClientResp.java`: Respuesta de cliente.
        - ` DriverResp.java`: Respuesta de conductor.
            - `ReservationResp.java`: Respuesta de reserva.
        - ` ReservationToClient.java`: Relación entre reserva y cliente.
        - ` TruckResp.java`: Respuesta de camión.
        - `error_handler`:
        - ` BadRequestController.java`: Controlador para manejar solicitudes incorrectas.
        - `config`:
        - `ApplicationConfig.java`: Configuración de la aplicación.
        - ` CorsConfig.java`: Configuración de CORS (Cross-Origin Resource Sharing).
        - ` SecurityConfig.java`: Configuración de seguridad.
        - `Domain`:
        - `Entity`:
            - `ClientEntity.java`: Entidad de cliente.
            - `DriverEntity.java`: Entidad de conductor.
        - ` ReservationEntity.java`: Entidad de reserva.
            - `TruckEntity.java`: Entidad de camión.
        - ` User.java`: Entidad de usuario.
        - `repositories`:
        - `infrastructure`:
        - `service`:
        - ` AuthService.class`: Servicio de autenticación.
        - ` ClientService.class`: Servicio de cliente.
        - ` DriverService.class`: Servicio de conductor.
        - ` ReservationService.class`: Servicio de reserva.
        - ` TruckService.class`: Servicio de camión.
        - ` MudameBApplication.class`: Clase principal de la aplicación.
        - `Utils`:
        - `enums`:
        - ` Auxiliar.class`: Enumeración auxiliar.
            - `Capacity.class`: Enumeración de capacidad.
        - `exceptions`:
        - ` BadRequestException.class`: Excepción para solicitudes incorrectas.
        - ` LicenseType.class`: Enumeración de tipo de licencia.
        - ` PayMethod.class`: Enumeración de método de pago.
        - ` Role.class`: Enumeración de roles.
        - `exceptions`:
        - ` BadRequestException.class`: Excepción para solicitudes incorrectas.
        - `messages`:
            - `ErrorMessages.class`: Mensajes de error.

    pom.xml: Archivo de configuración para proyectos Maven. Define las dependencias y plugins necesarios.
    README.md: Archivo de documentación que proporciona información sobre el proyecto.

Esta estructura de carpetas está diseñada para mantener el proyecto ordenado y modular, haciendo que el código sea más fácil de mantener y escalar.


## Estrategia de Ramificación con Gitflow

Este proyecto implementa la estrategia de ramificación Gitflow, que es un modelo escalable y robusto para manejar el desarrollo de software. Aquí hay una descripción breve de cómo se organizan las ramas y su propósito dentro del flujo de trabajo del proyecto:

- `main`: La rama principal que contiene el código de producción, donde el código alcanza el estado más estable después de ser probado en otras ramas.
- `development`: La rama de desarrollo donde todas las características, arreglos y mejoras se fusionan antes de ser desplegadas a producción. Esta rama contiene el estado más reciente del próximo lanzamiento.

- `Feacture/Alejandro`, `Feacture/David`, `Feacture/Nicolas`,
 `Feacture/Carlos` ,`Feacture/Daniel`, `Feacture/Angel`: Estas ramas se crean para desarrollar nuevas características, requisitos o historias de usuario. Cada desarrollador trabaja en su propia rama de características y, una vez completada, se fusiona con la rama development.
    


El trabajo se combina en `development` para pruebas de integración. Una vez que `development` es estable y está listo para un lanzamiento, se fusiona en `main`.

Para contribuir al proyecto, crea una rama a partir de `dev` siguiendo el prefijo correspondiente (feat/ o fix/) dependiendo del tipo de trabajo. Después de completar el trabajo y las pruebas, crea un Pull Request hacia `dev`.

La adopción de Gitflow permite una gestión organizada de las versiones, proporcionando claridad y un proceso establecido para la colaboración y el despliegue de software.


---
¡Espero que disfrutes utilizando Mudame tanto como yo disfrute desarrollándolo!

Cordialmente,  
**Nicolas Luna**
**Alejandro Marulanda**
**Carlos Aguiar**
**David Osorio**
**Daniel Jimenez**
**Miguel Angel**


## Licencia

Este proyecto está licenciado bajo Creative Commons [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)

Puedes usar y redistribuir este trabajo para cualquier propósito, siempre y cuando se otorgue el crédito apropiado.

