<script lang="ts">
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

    function filterPropsOut(props: Record<string, any>, filter: string[]) {
        const result: Record<string, any> = {}
        for (const key in props) {
            if (!filter.includes(key)) {
                result[key] = props[key]
            }
        }
        return result
    }

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
