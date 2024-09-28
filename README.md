<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Virtual Wallet Frontend - NextJS</title>
</head>
<body>

  <h1>Billetera Virtual - NextJS</h1>

  <h2>Descripción</h2>
  <p>
    Este proyecto es el <strong>Área Cliente de ePayco</strong> desarrollado con <strong>NextJS</strong> que simula una billetera virtual. 
    Permite a los usuarios gestionar su saldo, realizar recargas y confirmar pagos.</p>

  <h3>Características principales:</h3>
  <ul>
    <li><strong>Registro de usuarios</strong>: Permite registrar nuevos usuarios con validación de datos únicos como, documento de identidad, email y teléfono.</li>
    <li><strong>Recarga de saldo</strong>: Los usuarios pueden recargar su saldo proporcionando su documento, número de teléfono y valor a recargar.</li>
    <li><strong>Confirmación de pagos</strong>: Al realizar una compra, se genera un token de 6 dígitos enviado por correo, el cual debe ser confirmado antes de completar la transacción.</li>
    <li><strong>Descuento de saldo</strong>: Una vez confirmado el código de la transacción, se descuenta el saldo de la billetera del usuario.</li>
    <li><strong>Envío de correos electrónicos</strong>: Uso de <strong>MailerService</strong> para enviar códigos de confirmación a los correos de los usuarios.</li>
  </ul>

  <h2>Requisitos</h2>
  <ul>
    <li>Node.js (v16 o superior)</li>
    <li>NextJS</li>
  </ul>

  <h2>Instalación</h2>
  <ol>
    <li>Clona este repositorio:
      <pre>
        <code>git clone https://github.com/cris-a/epayco_front_client.git</code>
      </pre>
    </li>

  <li>Instala las dependencias:
    <pre>
      <code>npm install</code>
    </pre>
  </li>

  <li>Configura las variables de entorno en un archivo <strong>.env</strong>:
      <pre>
        <code>
      NEXT_PUBLIC_API=api_publica_epayco
</pre>
</li>

  <li>Inicia la aplicación:
    <pre>
        <code>npm run dev</code>
    </pre>
  </li>

  </ol>

  <h2>Tecnologías utilizadas</h2>
  <ul>
    <li><strong>Axios</strong> - Comunicación con la API pública.</li>
  </ul>

  <h2>Cómo contribuir</h2>
  <ol>
    <li>Haz un fork del proyecto.</li>
    <li>Crea una nueva rama para tu funcionalidad (<code>git checkout -b nueva-funcionalidad</code>).</li>
    <li>Haz commit de tus cambios (<code>git commit -m 'Agregar nueva funcionalidad'</code>).</li>
    <li>Sube tus cambios a la rama (<code>git push origin nueva-funcionalidad</code>).</li>
    <li>Crea un pull request.</li>
  </ol>

  <h2>Licencia</h2>
  <p>Este proyecto está bajo la licencia <strong>MIT</strong>. Puedes ver más detalles en el archivo <a href="LICENSE">LICENSE</a>.</p>

</body>
</html>
