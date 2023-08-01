# wysiwyg-angular-ngx-quill
### Configuracion inicial
```npm i```
Para descargar dependencias (tener instalado ionic como dependencia global)

### Levantar el proyecto
```ionic serve```
Para descargar dependencias

### Imagen del Wysiwyg
![image](https://github.com/Mauro069/wysiwyg-angular-ngx-quill/assets/81174890/90df4fe9-0da7-41d2-b0cf-62b12c25737c)

### En App.module.ts
```ts
QuillConfigModule.forRoot({
  modules,
  format: 'object',
  placeholder: 'PLACEHOLDER',
}),

// format puede ser => 'object' | 'json' | 'text' | 'html'
// En placeholder mandas un placeholder (es opcional)
```
### Docs
https://quilljs.com/docs/configuration/
https://www.npmjs.com/package/ngx-quill
https://github.com/KillerCodeMonkey/ngx-quill
