<script>
    import { marked } from 'marked'

    export let review
    $: ({ author, created_at, content } = review)
    $: ({ rating } = review.author_details)

    marked.setOptions({
        mangle: false,
        headerIds: false
    });
</script>


<div>
    <h4>{author} Date: {created_at.slice(0, 10)}, Rating: {rating}</h4>
    {@html marked.parse(content)}
</div>


<style>
    /* div p {
        max-width: 100%;
        max-height: 50px;
        overflow: hidden;
    }

    div p:last-child::after {
        content: "Read more";
        color: blue;
    } */
</style>