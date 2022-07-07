<script lang="ts">
    import type { Align } from '$lib/types'
    import { filterPropsOut } from '$lib/utilities'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let align: Align = 'left'
    export let color: string = undefined
    export let className = ''
    export let marginX = 0
    export let marginY = 1
    export let marginTop: number = null
    export let marginBottom: number = null
    export let marginLeft: number = null
    export let marginRight: number = null

    let alignClass = 'align-' + align

    // Extract all the attributes from props object
    $: ({ ...attrs } = $$props)

    // Get rid of the attributes that will be added in a component explicitly
    $: finalAttrs = filterPropsOut(attrs, ['className', 'class', 'id', 'color', 'size', 'marginTop', 'marginBottom', 'marginRight', 'marginLeft', 'marginX', 'marginY'])
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    { ...finalAttrs }
    class="{ alignClass } { className }"
    style={ color ? `--div-color: ${color};` : '' }
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
</div>

<style>
    div {
        color: var(--div-color);
    }
</style>
