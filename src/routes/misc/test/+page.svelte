<script>
    import { page } from '$app/stores'

    export let data

    let movieId
    let ratingSlider = 10
    $: rating = ratingSlider / 2

    $: console.log({$page});
    $: console.log({ data })
</script>


<h1>Test page</h1>

<h2>Get Movie Name</h2>
<form action="?/getMovieName" method="POST">
    <label for="">
        ID:
        <input type="number" name="movieId">
    </label>
    <input type="submit">
</form>

{#if $page.form}
    <p>{$page.form.id}: {$page.form.movie}</p>
{/if}

<hr>

<h2>Add Rating</h2>
<form method="POST" action="?/submitRating">
    <div>
        <label for="">
            Movie:
            <input type="number" bind:value={movieId} name="movieId" required>
        </label>
    </div>

    <div>
        <label for="">
            ratingSlider:
            <input type="range" min="0" max="20" bind:value={ratingSlider} name="rating">
            <span>{rating}</span>
        </label>
    </div>
    
    <div>
        <input type="submit">
    </div>
</form>

<hr>

<section>
    <h2>Rating History</h2>

    {#each data.results as {title, id, vote_average, rating}}
        <div>
            <p>({id}) {title}: {vote_average}</p>
            <p>Your rating: {rating}</p>
            <br>
        </div>
    {/each}
</section>