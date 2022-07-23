<script lang="ts">
    import { computePadding } from '$lib/utilities'
    import type { Align, Padding } from 'urfu-ui-kit'
    
    type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6
    type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    const defaultMargin = { x: 0, y: 1 }

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let align: Align = 'unset'
    export let size: HeadingSize
    export let color: string = undefined
    export let className = ''
    export let margin: Padding = defaultMargin

    let tag: HeadingTag = `h${size}`
</script>

<svelte:element
    {id}
    bind:this={ node }
    this={ tag }
    class="kit-heading { className }"
    style:margin={ computePadding({ ...defaultMargin, ...margin }) }
    style:--heading-color={ color }
    style:--local-align={ align }
    on:click
    on:mousedown
    on:mouseup
    on:focus
    on:blur
    on:mouseover
    on:mouseleave
>
    <slot />
</svelte:element>

<style>
    .kit-heading {
        display: block;
        position: relative;
        color: var(--heading-color);
        text-align: var(--local-align);
    }

    :global(h1, h2, h3, h4, h5, h6,
    .heading-1, .heading-2,
    .heading-3, .heading-4,
    .heading-5, .heading-6) {
        margin: 1em 0;
        font-weight: 600;
        line-height: 1.2;
    }
    
    :global(h1, .heading-1) {
        font-size: var(--header-1);
    }
    
    :global(h2, .heading-2) {
        font-size: var(--header-2);
    }
    
    :global(h3, .heading-3) {
        font-size: var(--header-3);
    }
    
    :global(h4, .heading-4) {
        font-size: var(--header-4);
    }
    
    :global(h5, .heading-5) {
        font-size: var(--header-5);
    }
    
    :global(h6, .heading-6) {
        font-size: var(--header-6);
    }    
</style>
