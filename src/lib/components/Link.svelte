<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { prefetch as execPrefetch } from '$app/navigation'

    type LinkVariant = 'regular' | 'underlined' | 'interactive' | 'hover'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let href: string = undefined
    export let title = ''
    export let target = '_SELF'
    export let color = 'var(--blue)'
    export let lineWidth = 4
    export let prefetch = false
    export let variant: LinkVariant = 'regular'
    export let className = ''

    $: variantClass = variant + '-variant'
    const dispatch = createEventDispatcher()

    const mouseOverHandler = () => {
        if (prefetch && href && !href.startsWith('#')) execPrefetch(href)
        dispatch('mouseover')
    }
</script>

<a
    {id}
    {href}
    {title}
    {target}
    bind:this={ node }
    on:click
    on:focus
    on:blur
    on:mouseleave
    on:mousedown
    on:mouseup
    on:mouseover={ mouseOverHandler }
    class="kit-link {className} {variantClass}"
    style:--link-color={color}
>
    <slot />
    <span class="kit-link-underline" style:height={ lineWidth + 'px' }></span>
</a>

<style>
    a.kit-link {
        display: inline-block;
        position: relative;
        color: var(--link-color);
        padding-bottom: 0;
        cursor: pointer;
    }

    a.kit-link:not(.regular-variant) {
        padding-bottom: 4px;
    }

    a.kit-link.hover-variant .kit-link-underline {
        display: none;
    }

    a.kit-link.hover-variant:hover .kit-link-underline {
        display: inline-block;
    }

    .kit-link-underline {
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        content: '';
        transition: 0.1s ease-in-out;
        background-color: var(--link-color);
    }

    a.kit-link.regular-variant > .kit-link-underline {
        display: none;
    }

    a.kit-link.interactive-variant:hover .kit-link-underline {
        width: 50%;
    }
</style>
