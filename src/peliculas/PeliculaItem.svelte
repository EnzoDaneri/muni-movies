<script>
//Import de Router
 import Router from 'svelte-spa-router'
 import routes from '../routes.js'

//Variables y funciones (vienen del componente padre como props)
export let id;
export let title;
export let overview;
export let cover;
export let eliminarPelicula;
       
//Variable reactiva(cambia automáticamente según cada portada de película)
$: coverURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${cover}`;

</script>

<!-- #######################-----HTML--------############################ -->

<!-- Estructura de cada Item Película -->
<div class="card" >
  <img src={coverURL} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
   
    <!-- Acá no logro que los parámetros que paso en la url lleguen al componente DetallePelicula -->

  <a href="#/detalle/{id}/{title}/{cover}/{overview}">
   <button class="btn btn-outline-info " >Sinopsis</button>
   <button class="btn btn-danger" on:click={eliminarPelicula(id)}><i class="fas fa-trash"></i></button> </a>
  </div>
</div>


<!-- #######################-----ESTILOS CSS--------############################ -->

<style>
  .card a {
    text-decoration: none;
  }

</style>


