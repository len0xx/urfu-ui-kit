<script lang="ts">
    export let src: string
    export let caption = ''
    export let className = ''
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    on:click
    on:mouseleave
    on:mousedown
    on:mouseup
    on:mouseover
    class="kit-partner {className}"
>
    <div class="image" style={ `background-image: url(${ src })` }></div>
    { #if caption }
        <div class="caption align-center">{ caption }</div>
    { /if }
</div>

<style>
    .kit-partner {
        display: grid;
        gap: 1em;
        grid-template-columns: 1fr;
    }

    :global(.kit-partner) {
        width: 240px;
    }

    :global(.grid-container .kit-partner) {
        width: 100%;
    }

    .image {
        position: relative;
        min-height: 120px;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 80%;
    }

    @media screen and (max-width: 568px) {
        .image {
            min-height: 80px;
        }
    }
</style>