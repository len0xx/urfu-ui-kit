<script lang="ts">
    import { filterPropsOut } from '../utilities'

    export let id: string = undefined
    export let size: 1 | 2 | 3 | 4 | 5 | 6
    export let color: string = undefined
    export let className = ''
    export let marginX = 0
    export let marginY = 1
    export let marginTop: number = null
    export let marginBottom: number = null
    export let marginLeft: number = null
    export let marginRight: number = null
    let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = `h${size}`

    // Extract attributes from props object
    $: ({ ...attrs } = $$props)

    $: finalAttrs = filterPropsOut(attrs, ['className', 'class', 'id'])
</script>

<svelte:element
    {id}
    this={tag}
    style:color
    { ...finalAttrs }
    class="kit-heading {className}"
    style:margin-top={ (marginTop !== null ? marginTop : marginY) + 'em' }
    style:margin-bottom={ (marginBottom !== null ? marginBottom : marginY) + 'em' }
    style:margin-left={ (marginLeft !== null ? marginLeft : marginX) + 'em' }
    style:margin-right={ (marginRight !== null ? marginRight : marginX) + 'em' }
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
