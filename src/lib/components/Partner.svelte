<script lang="ts">
    import { Div } from '.'
    import type { TransitionReceiver } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let src: string
    export let caption = ''
    export let className = ''
    export let transition: TransitionReceiver = { in: undefined, out: undefined }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<Div
    {id}
    bind:node
    {transition}
    className="kit-partner {className}"
    on:click
    on:mouseleave
    on:mousedown
    on:mouseup
    on:mouseover
>
    <div class="image" style={ `background-image: url(${ src })` }></div>
    { #if caption }
        <div class="caption align-center">{ caption }</div>
    { /if }
</Div>

<style>
    :global(.kit-partner[data-kit-component="true"]) {
        display: grid;
        gap: 1em;
        grid-template-columns: 1fr;
    }

    :global(.kit-partner[data-kit-component="true"]) {
        width: 240px;
    }

    :global(.grid-container .kit-partner[data-kit-component="true"]) {
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