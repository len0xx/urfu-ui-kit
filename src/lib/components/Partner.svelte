<script lang="ts">
	import { applyTransitions } from '$lib/utilities'
    import type { TransitionReceiver } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let src: string
    export let caption = ''
    export let className = ''
    export let transition: TransitionReceiver = { in: undefined, out: undefined }

	$: ({ inFunc, inOptions, outFunc, outOptions } = applyTransitions(transition))
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    in:inFunc={ inOptions }
    out:outFunc={ outOptions }
    class={ ['kit-partner', className].filter(Boolean).join(' ') }
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
</div>

<style>
    .kit-partner {
        display: grid;
        gap: 1em;
        grid-template-columns: 1fr;
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
