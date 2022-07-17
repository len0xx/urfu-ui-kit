<script lang="ts">
    import { computePadding } from '$lib/utilities'
    import type { Align, Padding } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let align: Align = 'unset'
    export let color: string = undefined
    export let className = ''
    export let margin: Padding = { }
    export let padding: Padding = { }

    let alignClass = 'align-' + align
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    class="{ alignClass } { className }"
    style={ color ? `--div-color: ${color};` : '' }
    style:margin={ computePadding(margin) }
    style:padding={ computePadding(padding) }
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
