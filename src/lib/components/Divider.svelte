<script lang="ts">
    import { computePadding } from '$lib/utilities'
    import type { Padding } from 'urfu-ui-kit'

    const defaultMargin = { x: 0, y: 1 }
    
    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let color = 'white'
    export let width = '50px'
    export let height = 4
    export let margin: Padding = defaultMargin
    export let className = ''
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    on:click
    on:mouseover
    on:mouseleave
    on:mousedown
    on:mouseup
    class="kit-visual-divider {className}"
    style:background-color={ color }
    style:width
    style:height={ height + 'px' }
    style:margin={ computePadding({ ...defaultMargin, ...margin }) }
>
</div>
