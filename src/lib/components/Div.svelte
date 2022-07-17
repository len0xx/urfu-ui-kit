<script lang="ts">
    import { computePadding, applyTransitions } from '$lib/utilities'
    import type { Align, Padding, TransitionReceiver } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let align: Align = 'unset'
    export let color = ''
    export let className = ''
    export let inline = false
    export let margin: Padding = { }
    export let padding: Padding = { }
    export let transition: TransitionReceiver = { in: undefined, out: undefined }

    let inlineClass = inline ? 'inline-block' : ''
    const { inFunc, inOptions, outFunc, outOptions } = applyTransitions(transition)
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    in:inFunc={ inOptions }
    out:outFunc={ outOptions }
    bind:this={ node }
    class="{ className } { inlineClass }"
    style:margin={ computePadding(margin) }
    style:padding={ computePadding(padding) }
    style:--div-color={ color }
    style:--local-align={ align }
    data-kit-component="true"
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
        text-align: var(--local-align);
    }

    div.inline-block {
        display: inline-block;
    }
</style>
