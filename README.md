# PruebasAngular

## Comandos Utilizados:

## Este comando instala globalmente la interfaz de línea de comandos (CLI) de Angular. La CLI de Angular proporciona herramientas para crear, desarrollar y administrar proyectos de Angular.
```
npm install -g @angular/cli
```

## Crea un nuevo proyecto de Angular llamado "pruebas-angular" en un directorio nuevo. Este comando generará la estructura básica del proyecto y descargará las dependencias necesarias.
```
ng new pruebas-angular
```

## Genera un archivo de configuración de Karma en el proyecto. Al generar el archivo de configuración, puedes personalizar la forma en que Karma ejecutará las pruebas en tu proyecto.
```
ng generate config karma
```

## Instala el paquete karma-firefox-launcher como una dependencia de desarrollo ("-D"). Este paquete proporciona un lanzador para ejecutar pruebas en el navegador Firefox a través de Karma. Al instalarlo, podrás ejecutar las pruebas unitarias en Firefox utilizando Karma como entorno de prueba.
```
npm i -D karma-firefox-launcher
```

## Inicia el servidor de desarrollo de Angular y abre la aplicación en el navegador. La opción "-o" se utiliza para abrir automáticamente la aplicación en el navegador predeterminado.
```
ng serve -o
```

## Ejecuta las pruebas unitarias del proyecto utilizando el marco de pruebas Jasmine. Este comando busca los archivos de prueba con la extensión ".spec.ts" y los ejecuta.
```
ng test
```

## Similar al comando anterior, pero también genera un informe de cobertura de código. El informe muestra qué parte del código fuente está cubierta por las pruebas.
```
ng test --code-coverage
```

## Genera un nuevo componente llamado "medico" en la carpeta "integracion-basicas". La opción "--spec=false" indica que no se generen archivos de prueba para el componente. La opción "-is" agrega el estilo en línea al componente.
```
ng g c integracion-basicas/medico --spec=false -is
```

## Genera un nuevo servicio llamado "medico" en la carpeta "integracion-basicas/medico". La opción "--spec=false" indica que no se generen archivos de prueba para el servicio. La opción "--flat" crea el servicio directamente en la carpeta especificada sin crear una subcarpeta adicional para el servicio.
```
ng g s integracion-basicas/medico/medico --spec=false --flat
```

## Genera un nuevo componente llamado "hospital" en la carpeta "integracion-basicas".
```
ng g c integracion-basicas/hospital
```

## Genera un nuevo componente llamado "navbar" en la carpeta "integracion-basicas".
```
ng g c integracion-basicas/navbar
```

## Genera un nuevo componente llamado "router-medico" en la carpeta "integracion-basicas". La opción "-is" agrega el estilo en línea al componente.
```
ng g c integracion-basicas/router-medico -is
```
