<script lang="ts">
    export let className = ''
    export let color = ''
    export let marginX = 0
    export let marginY = 1
    export let opacity = 1
    export let marginTop: number = null
    export let marginBottom: number = null
    export let marginLeft: number = null
    export let marginRight: number = null

    // Extract attributes from props object
    $: ({ ...attrs } = $$props)

    // Get rid of the class and className props since we've added that manually
    $: if (attrs.class) {
        delete attrs.class
    }
    $: if (attrs.className) {
        delete attrs.className
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<p
    { ...attrs }
    class={ className }
    style:color
    style:opacity
    style:margin-top={ (marginTop !== null ? marginTop : marginY) + 'em' }
    style:margin-bottom={ (marginBottom !== null ? marginBottom : marginY) + 'em' }
    style:margin-left={ (marginLeft !== null ? marginLeft : marginX) + 'em' }
    style:margin-right={ (marginRight !== null ? marginRight : marginX) + 'em' }
    on:click
    on:mousedown
    on:mouseup
    on:mouseover
    on:mouseleave
>
    <slot />
</p>