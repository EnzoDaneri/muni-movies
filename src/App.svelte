<script>
//Import de ciclo de vida de Svelte
 import {onMount} from 'svelte';

//Import de componentes
 import PeliculaItem from './peliculas/PeliculaItem.svelte';
 import DetallePelicula from './peliculas/DetallePelicula.svelte';
 
  
//Configuración de API   (The Movie DB)
const APIKEY = '765afbd6dcc9add92e51eb94ab1ba4e9';
const BASEURL = 'https://api.themoviedb.org/3';
const APISETTINGS= `?api_key=${APIKEY}&language=es-AR`;

//Variables
let peliculas = [];
let title = '';
let overview = '';
let id = null;
let cover = null;
let formulario= false;
let peliculaAgregada = false;

//Variable reactiva (cambia automáticamente de manera dinámica)
$: formularioVacio = !title || !overview || !cover;

//FUNCIONES
//Petición Fetch a la API de The Movie DB
function fetchMovies() {
   const URL = `${BASEURL}/discover/movie${APISETTINGS}&sort_by=popularity.desc`

   fetch(URL)
      .then(res => res.json())
      .then(({results}) => {
      
        peliculas = results
        console.log(peliculas);
      })
    }

//Al montarse el componente en el ciclo de vida se realiza la petición fetch a la API.
onMount(() => {
  
  fetchMovies();
})

//Ver Formulario
function verFormulario() {
  formulario = !formulario;
}

//Agregar Película
function agregarPelicula({title, overview, cover }) {
     let pelicula = {id: Math.random() * Date.now(),
    title, overview, cover};
    peliculas = [pelicula, ...peliculas];
 }

//Eliminar Película
function eliminarPelicula(id) {
  confirm('¿Seguro desea eliminar esta Película?')
    peliculas = peliculas.filter(item => item.id !== id);
 }

//Manejador del evento Submit
 function manejarSubmit() {
   agregarPelicula({title, overview, cover});
    title = '',
    overview = '',
    cover = null
    id = null,
    formulario = false,
    peliculaAgregada = true;
    QuitarMensajePeliAgregada();

 }

//Remover Mensaje de película agregada
  function QuitarMensajePeliAgregada() {
   setTimeout( function() {
    peliculaAgregada = false;
   }, 2000)
 }


</script>

<!-- #######################-----HTML--------############################ -->

<div class="container">
 <nav class="navbar navbar-dark bg-dark  mb-2">
  <img class="logoMuni" src="https://www.trenquelauquen.gov.ar/wordpress/wp-content/uploads/Escudo.png" alt="">
  <span class="navbar-brand mb-0 h1 titulo text-center">Muni-Movies</span>

<!-- Renderizado condicional de Ocultar Formulario o Agregar Película -->
  {#if formulario}
  <span class="text-light mr-1 cursor" on:click={verFormulario}>Ocultar </span>
  {:else}
  <span class="text-light mr-1 cursor" on:click={verFormulario} >Agregar Película <i class="fas fa-plus text-light ml-2"></i></span>
  {/if}
</nav>

<!-- Renderizado condicional de mensaje de pelicula agregada para el usuario -->
 {#if peliculaAgregada}
 <h3 class="text-success text-center mb-5 mt-5">Se agregó la nueva película!</h3>
 {/if}



<!-- Renderizado condicional del formulario para agregar película-->
{#if formulario}
 <h1 class="mt-3 mb-3">Agregar Película</h1>
 <form on:submit|preventDefault={manejarSubmit}>
  <div class="form-group">
    <label for="title" >Titulo</label>
    <input type="text" class="form-control" bind:value={title} >
    <small id="emailHelp" class="form-text text-muted">Agrega una nueva película</small>
  </div>
  <div class="form-group">
    <label for="sinopsis">Sinopsis</label>
    <input type="text" class="form-control" bind:value={overview}>
  </div>
    <div class="form-group">
    <label for="sinopsis">Portada</label>
    <input type="file" class="form-control"  bind:value={cover}>
  </div>
 <!-- Renderizado condicional de párrafo de ayuda al usuario -->
 {#if formularioVacio}
  <p class="text-warning">Por favor completa todos los campos</p>
 {/if}

  <button type="submit" 
   class:disabled={formularioVacio} class="btn btn-primary"  
  disabled={formularioVacio} >Guardar</button>
</form>
{/if}



<!-- Listado de Películas -->
 <div class="row">
 {#each peliculas as pelicula, index(pelicula.id)}
   <div class="col-12 col-md-6 col-lg-3 p-2">
     <PeliculaItem id={pelicula.id} 
               title={pelicula.title} 
               overview={pelicula.overview}
               cover={pelicula.poster_path} 
               {eliminarPelicula} /> 
              </div> 
              {:else}
              <h2>No hay películas todavía...</h2> 
           {/each} 
         </div>
        </div>


<!-- #######################-----ESTILOS CSS--------############################ -->

<style>
.cursor {
  cursor: pointer;
}

.titulo {
  font-family: 'Lobster', cursive;
  font-size: 25px;
}
.logoMuni {
  width: 200px;
}

/* Media querie para adaptar imágen en dispositivos móviles */
@media(max-width: 590px ) {
  .logoMuni {
  width: 130px;
}
}
</style>