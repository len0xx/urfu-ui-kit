<script lang="ts">
    import { computePadding } from '$lib/utilities'
    import type { Align, Padding } from 'urfu-ui-kit'
    
    const defaultMargin = { x: 0, y: 1 }

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let align: Align = 'unset'
    export let className = ''
    export let color = ''
    export let opacity = 1
    export let inline = false
    export let margin: Padding = defaultMargin
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<p
    {id}
    bind:this={ node }
    class={ ['kit-text-component', className].filter(Boolean).join(' ') }
	class:inline-paragraph={ inline }
    style:opacity
    style:--text-component-color={color}
    style:--local-align={ align }
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
    p.kit-text-component {
        display: block;
        position: relative;
        color: var(--text-component-color);
        text-align: var(--local-align);
    }

    p.inline-paragraph {
        display: inline-block;
    }
</style>
