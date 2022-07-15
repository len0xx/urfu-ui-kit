<script lang="ts">
    import { filterPropsOut, computePadding } from '$lib/utilities'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let align: Align = 'initial'
    export let color: string = undefined
    export let className = ''
    export let margin: Padding = { }

    let alignClass = 'align-' + align

    // Extract all the attributes from props object
    $: ({ ...attrs } = $$props)

    // Get rid of the attributes that will be added in a component explicitly
    $: finalAttrs = filterPropsOut(attrs, ['className', 'class', 'id', 'color', 'size', 'align', 'margin'])
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    { ...finalAttrs }
    class="{ alignClass } { className }"
    style={ color ? `--div-color: ${color};` : '' }
    style:margin={ computePadding(margin) }
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
