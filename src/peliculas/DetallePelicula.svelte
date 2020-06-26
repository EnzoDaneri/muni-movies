<script>

export let params = {}

// Los parámetros que pasé en la url deberían estar disponibles en este componente para renderizarlos. Pero algo no funciona
</script>


<!-- #######################-----HTML--------############################ -->

<div class="container detalle">
<h1>{params.id}</h1>
<h3>{params.title}</h3>
<img src={params.cover} alt="{params.title}">
<p class="card-text">{params.overview}</p>
<a href="#/"> inicio</a>
</div>


