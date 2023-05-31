<script>
    export let movie

    $: ({ id, title, backdrop_path, poster_path, vote_average } = movie)
</script>

<div>
    <a href="/movie/{id}">
        <img src="https://image.tmdb.org/t/p/w500{poster_path}" alt={title}>
        {#if backdrop_path}
            <!-- <img src="https://image.tmdb.org/t/p/w500{backdrop_path}" alt={title}> -->
        {/if}

        <h4>{title}</h4>
        <p>{vote_average}</p>
    </a>
</div>

<style>
    div {
        border: 1px solid grey;
    }
</style>