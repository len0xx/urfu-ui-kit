<script lang="ts">
    import { filterPropsOut, computePadding } from '$lib/utilities'
    const defaultMargin = { x: 0, y: 1 }

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let align: Align = 'initial'
    export let className = ''
    export let color = ''
    export let opacity = 1
    export let inline = false
    export let margin: Padding = defaultMargin

    let alignClass = 'align-' + align
    let inlineClass = inline ? 'inline-paragraph' : ''

    // Extract all the attributes from props object
    $: ({ ...attrs } = $$props)

    // Get rid of the attributes that will be added in a component explicitly
    $: finalAttrs = filterPropsOut(attrs, ['className', 'class', 'id', 'color', 'opacity', 'margin', 'inline'])
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<p
    {id}
    { ...finalAttrs }
    bind:this={ node }
    class="kit-text-component { className } { alignClass } { inlineClass }"
    style:opacity
    style:--text-component-color={color}
    style:margin={ computePadding({ ...defaultMargin, ...margin }) }
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

    p.inline-paragraph {
        display: inline-block;
    }
</style>
