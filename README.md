
# MUNI-MOVIES
 TRABAJO SOLICITADO PARA ENTREVISTA EN DEPARTAMENTO DE SISTEMAS DE LA MUNICIPALIDAD DE TRENQUE LAUQUEN

 25 de junio de 2020.

 AUTOR: Enzo Adrián Daneri
 enzodaneri@hotmail.com

 REPOSITORIO REMOTO: Github ( https://github.com/EnzoDaneri/muni-movies.git )


 TECNOLOGIAS UTILIZADAS:
 Framework de JavaScript: Svelte Js. ( https://svelte.dev/ )
 Control de Versiones Git. ( https://git-scm.com/ )
 Framework de CSS: Bootstrap ( https://getbootstrap.com/ )
 Iconos: FontAwesome ( https://fontawesome.com/ )


 API ELEGIDA: The MovieDB ( https://www.themoviedb.org/ )
 API de Películas.
 Conectado mediante petición fetch.


 REQUERIMIENTOS:
 1- Conectarse a una API (a elección)
 2- Listar items. 
 3- Vista de detalle de item seleccionado.     X (Dificultad en este punto)
 4- Funcionalidad de AGREGAR y ELIMINAR items.


 AVANCE: Logré hasta el momento de la presentación: conectarme, listar, agregar y elmininar items.

 DIFICULTADES: 1- No pude recibir los parámetros que pasé a través de la URL. 
                  Svelte no tiene Router propio, y utilicé Svelte-SPA-Router(https://www.npmjs.com/package/svelte-spa-router)
               2- Al agregar un nuevo Item, no me carga el archivo de imágen correctamente.

-----------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------


-----------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------


-----------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------






---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
