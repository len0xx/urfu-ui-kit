<script lang="ts">
    import { filterPropsOut } from '../utilities'

    export let id: string = undefined
    export let className = ''
    export let color = ''
    export let opacity = 1
    export let marginX = 0
    export let marginY = 1
    export let marginTop: number = null
    export let marginBottom: number = null
    export let marginLeft: number = null
    export let marginRight: number = null

    // Extract attributes from props object
    $: ({ ...attrs } = $$props)

    $: finalAttrs = filterPropsOut(attrs, ['className', 'class', 'id'])
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<p
    {id}
    { ...finalAttrs }
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