<script lang="ts">
    import { filterPropsOut } from '../utilities'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let className = ''
    export let color = ''
    export let opacity = 1
    export let marginX = 0
    export let marginY = 1
    export let marginTop: number = null
    export let marginBottom: number = null
    export let marginLeft: number = null
    export let marginRight: number = null

    // Extract all the attributes from props object
    $: ({ ...attrs } = $$props)

    // Get rid of the attributes that will be added in a component explicitly
    $: finalAttrs = filterPropsOut(attrs, ['className', 'class', 'id', 'color', 'opacity', 'marginTop', 'marginBottom', 'marginRight', 'marginLeft', 'marginX', 'marginY'])
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<p
    {id}
    { ...finalAttrs }
    bind:this={ node }
    class="kit-text-component { className }"
    style:opacity
    style:--text-component-color={color}
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

<style>
    .kit-text-component {
        color: var(--text-component-color);
    }
</style>
