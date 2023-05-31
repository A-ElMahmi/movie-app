<script>
    import { imagePath } from '$lib/utils.js'

    export let person
    $: ({ id, name, character, profile_path } = person)
</script>

<div>
    <a href="/person/{id}">
        <img src={imagePath(profile_path)} alt="{name}'s picture">

        <h4>{name}</h4>
        <h4>{character}</h4>
    </a>
</div>

<style>
    div {
        border: 1px solid grey;
    }
</style>