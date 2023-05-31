<script>
    import { page } from '$app/stores'

    let query
    let results = []
    $: results = results.slice(0, 5)

    // let inputFocus
</script>

<form action="/search">
    <label for="">Search</label>
    <input bind:value={query} name="q" type="text" placeholder="Search Movie" required on:input={async e => {
        const formData = new FormData(this)

        const response = await fetch(`/search?q=${query}`, { method: "POST", body: formData })
        const { data } = await response.json()

        results = JSON.parse(JSON.parse(data))
    }}>
    <input type="submit">
</form>

<!-- on:focus={() => inputFocus=true} on:blur={() => inputFocus=false} -->
<!-- {#if inputFocus} -->
    <ul>
        {#each results as movie}
        <li><a href="/movie/{movie.id}">{movie.title}</a></li>
        {/each}

        {#if query}
             <li><a href="/search?q={query}">View More</a></li>
        {/if}
    </ul>
<!-- {/if} -->
