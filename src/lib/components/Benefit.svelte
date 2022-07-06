<script lang="ts">
    import { Divider, Text } from '$lib/components'
    import { getSizeIndex, getSizeName, type DefaultSizes } from '$lib/types'

    const heights = [6, 8, 10] as const
    const margins = [0.5, 0.6, 0.7] as const

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let num = '0'
    export let size: DefaultSizes = 'M'
    export let caption = ''
    export let className = ''

    let sizeClass = 'size-' + getSizeName(size)
    let dividerSize = heights[getSizeIndex(size)]
    let margin = margins[getSizeIndex(size)]
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    class="kit-benefit {className} {sizeClass}"
    on:click
    on:mousedown
    on:mouseup
    on:mouseover
    on:mouseleave
>
    <Text className="kit-benefit-num semi-bold" color="var(--blue)" marginY={0}>{ num }</Text>
    <Divider width="100%" color="var(--blue)" height={ dividerSize } marginY={ margin } />
    <Text className="kit-benefit-caption" marginTop={0.9}>{ caption }</Text>
</div>

<style>
    :global(.kit-benefit > .kit-benefit-num) {
        line-height: 1.2;
    }
    :global(.kit-benefit.size-small > .kit-benefit-num) {
        font-size: 2em;
    }
    :global(.kit-benefit.size-medium > .kit-benefit-num) {
        font-size: 2.5em;
    }
    :global(.kit-benefit.size-large > .kit-benefit-num) {
        font-size: 3em;
    }
    :global(.kit-benefit.size-small > .kit-benefit-caption) {
        font-size: 0.9em;
    }
    :global(.kit-benefit.size-medium > .kit-benefit-caption) {
        font-size: 1em;
    }
    :global(.kit-benefit.size-large > .kit-benefit-caption) {
        font-size: 1.1em;
    }
</style>
