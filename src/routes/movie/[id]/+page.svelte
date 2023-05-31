<script>
    import MovieCard from '$lib/MovieCard.svelte'
    import PersonCard from '$lib/PersonCard.svelte';
    import ReviewCard from './/ReviewCard.svelte'
    import { imagePath } from '$lib/utils.js'

    export let data
    $: ({ movieData, videoLink, relatedMovies, reviews, cast } = data)

    $: console.log(movieData);
    $: console.log(reviews);
</script>

<!-- DATA to add -->
<!-- 
    belongs_to_collection
    tagline
 -->


{#if movieData.backdrop_path}
    <img src="https://image.tmdb.org/t/p/original{movieData.backdrop_path}" alt={movieData.title}>
{/if}

<h2>{movieData.title}</h2>
<p>{movieData.overview}</p>
<div>
    <span>{movieData.release_date}</span>
    <span>{movieData.vote_average}</span>
    <span>{movieData.runtime}mins</span>
</div>

<div>
    Genres:
    <ul>
        {#each movieData.genres as {id, name}}
            <li><a href="/search/by/genre?genres={id}">{name}</a></li>
        {/each}
    </ul>
</div>

{#if videoLink}
    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/{videoLink}?modestbranding=1&rel=0&iv_load_policy=3" title="{movieData.title} trailer" frameborder="0" allow="encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe> -->
{:else}
    <div style="width:560px;height:316px;display:grid;place-items:center;background:#ccc">No video trailer</div>
{/if}

<h2>Cast</h2>
<section>
    {#each cast as person}
        <PersonCard {person} />
    {/each}
</section>

{#if movieData.belongs_to_collection}
    <h2>Collection</h2>
    <section>
        <a href="/collection/{movieData.belongs_to_collection.id}">
            <img src={imagePath(movieData.belongs_to_collection.poster_path)} alt={movieData.belongs_to_collection}>
            <h4>{movieData.belongs_to_collection.name}</h4>
        </a>
    </section>
{/if}

<h2>Related Movies</h2>
<section>
    {#each relatedMovies as movie}
        <MovieCard {movie} />
    {/each}
</section>

<h2>Reviews</h2>
<section>
    {#each reviews as review}
        <ReviewCard {review} />
    {:else}
        <p>There are no reviews available for this movie</p>
    {/each}
</section>

<style>
    img {
        width: 600px;
    }

    section {
        display: flex;
        flex-wrap: wrap;
    }
</style>