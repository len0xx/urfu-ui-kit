<script lang="ts">
    import { getSizeName } from '$lib/utilities'
    import type { DefaultSizes } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let size: DefaultSizes = 'S'
    export let fixed: 'top' | 'bottom' | null = null
    export let width = '100%'
    export let className = ''

    $: sizeClass = `size-${getSizeName(size)}` 
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    on:click
    on:mouseleave
    on:mousedown
    on:mouseup
    on:mouseover
    style:width
    class={ ['kit-rainbow', sizeClass, className].filter(Boolean).join(' ') }
    class:fixedTop={ fixed == 'top' }
    class:fixedBottom={ fixed == 'bottom' }
>
</div>

<style>
    :root {
        --rainbow-gradient: linear-gradient(270deg, #FF2D7F -0.71%, #FB3727 47.63%, #FEEA0F 100%);
    }

    .kit-rainbow {
        display: block;
        position: relative;
        width: 100%;
        height: 20px;
        background: var(--rainbow-gradient);
    }

    .kit-rainbow.fixedTop {
        position: absolute;
        top: 0;
        left: 0;
    }
    .kit-rainbow.fixedBottom {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .kit-rainbow.size-small {
        height: 7px;
    }
    .kit-rainbow.size-medium {
        height: 14px;
    }
    .kit-rainbow.size-large {
        height: 20px;
    }
</style>
