# playwright-seek

Reto de Automatización
Posición: QA Engineer (Facebook for Web: 
TypeScript + PlayWright)
Título: Automatización de uso de Facebook desde los navegadores Chrome o Edge
Se requiere realizar una automatización de la visualización de post aleatorios, usando la web de Facebook desde una desktop, de tal forma que se pueda validar que los post se muestran adecuadamente en la última versión de la app, para ello se debe usar TypeScript como lenguaje de programación y Playwright como framework para la automatización de pruebas.

Es un plus muy valorado si la automatización se puede realizar usando Serenity con Gerkin como framework.
Escenario a Automatizar:
●	Abrir el navegador web Chrome o Edge en una desktop/laptop.
●	Redirigir el navegador a la aplicacion web de Facebook (https://www.facebook.com/) 
●	Verificar que se muestra la pantalla de inicio de sesión.
●	Ingresar el nombre de usuario y la contraseña errónea para que se genere un error de autenticación
●	Luego ingresar nombre de usuario y contraseña correcta.
●	Verificar que se ha iniciado sesión correctamente.
●	Navegar a la sección de Notificaciones.
●	Hacer un scroll vertical y luego de eso seleccionar una notificación aleatoria.
●	Verificar que se ha cargado el post de la notificación seleccionada.
●	Dar "Me gusta" al post que se cargó.
●	Verificar que el post haya recibido el "Me gusta" correctamente.
Puntos adicionales:
●	Para facilitar la automatización, es mejor crearse un usuario nuevo ficticio en Facebook y que no tenga habilitado mecanismos de seguridad como 2FA.
●	Considerar que para lograr automatizar el escenario, puede ser necesario hacer pasos adicionales, el objetivo es entregar evidencias de la automatización realizada.
●	Orquestar el código de automatización de tal forma que se pueda incluir en un Pipeline de CI.
○	Sería ideal si se incluye un Pipeline que ejecute y muestre resultados de esta automatización (esto es opcional).
Duración del Reto:
●	El reto debe ser entregado máximo 48 horas luego de haber recibido el reto por email.
Entregables:
●	Código de Automatización: Proporcionar el código en TypeScript utilizando Playwright usando la estructura ScreenPlay para automatizar el escenario descrito anteriormente. Debe estar subido a un repositorio en GitHub al que se debe brindar acceso.
●	Registro de Ejecución de Pruebas: Un archivo de registro o un informe generado después de ejecutar las pruebas automatizadas. Este archivo debe incluir detalles como:
○	Capturas de pantalla de cada paso de la prueba.
○	Resultados de la prueba (éxito o falla de cada paso).
○	Tiempos de ejecución de la prueba.
●	Video de la Ejecución de Pruebas: Un video que muestra la ejecución de las pruebas automatizadas en acción. Este video debería demostrar visualmente cómo la prueba automatizada interactúa con la aplicación de Facebook en un dispositivo Android y completa el escenario descrito.
●	Capturas de Pantalla Adicionales: Capturas de pantalla adicionales que muestren el estado de la aplicación después de completar con éxito el escenario, junto con cualquier otra verificación o validación que se haya realizado.
●	Reporte de Pruebas: Si la automatización se realizó con Serenity, se debe incluir en el repositorio el reporte con las evidencias que el mismo Serenity genera.
