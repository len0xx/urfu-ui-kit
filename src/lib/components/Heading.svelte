<script lang="ts">
    export let size: 1 | 2 | 3 | 4 | 5 | 6
    export let className = ''
    export let marginX = 0
    export let marginY = 1
    export let marginTop: number = null
    export let marginBottom: number = null
    export let marginLeft: number = null
    export let marginRight: number = null
    let tag = 'h' + size

    // Extract attributes from props object
    $: ({ ...attrs } = $$props)

    // Get rid of the className prop since we've added that manually
    $: if (attrs.className) {
        delete attrs.className
    }
</script>

<svelte:element
    { ...attrs }
    this={tag}
    class="kit-heading {className}"
    style:margin-top={ (marginTop !== null ? marginTop : marginY) + 'em' }
    style:margin-bottom={ (marginBottom !== null ? marginBottom : marginY) + 'em' }
    style:margin-left={ (marginLeft !== null ? marginLeft : marginX) + 'em' }
    style:margin-right={ (marginRight !== null ? marginRight : marginX) + 'em' }
    on:click
>
    <slot />
</svelte:element>
