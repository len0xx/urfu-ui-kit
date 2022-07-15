<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { getSizeName } from '$lib/utilities'
    
    type Variant = 'primary' | 'blue'
    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let type = 'submit'
    export let value: string = undefined
    export let variant: Variant = 'primary'
    export let href = ''
    export let target = '_SELF'
    export let className = ''
    export let size: DefaultSizes = 'M'

    let pressed = false
    const dispatch = createEventDispatcher()
    
    // Only include value attribute if it's defined
    $: attrs = { value }
    if (attrs && Object.keys(attrs).includes('value') && !value) delete attrs.value

    const handleMouseDown = () => {
        pressed = true
        dispatch('mousedown')
    }

    const handleMouseUp = () => {
        pressed = false
        dispatch('mouseup')
    }

    const handleClick = () => {
        if (href) window.open(href, target)
        dispatch('click')
    }

    let sizeClass = 'size-' + getSizeName(size)
</script>

<button
    {id}
    {type}
    {...attrs}
    bind:this={ node }
    class="kit-button variant-{variant} {className} {sizeClass}"
    class:pressed
    on:click={ handleClick }
    on:mousedown={ handleMouseDown }
    on:mouseup={ handleMouseUp }
    on:focus
    on:blur
    on:mouseover
    on:mouseleave
>
    <slot />
</button>

<style>
    button.kit-button {
        background-color: var(--red);
        color: #FFFFFF;
        box-shadow: none;
        cursor: pointer;
        padding: 0.75em 2em;
        border-radius: 1em;
        font-weight: 500;
        border: none;
        transition: 0.2s ease-in-out;
    }
    button.size-small {
        border-radius: 1em;
        padding: 0.8em 2.1em;
    }
    button.size-medium {
        border-radius: 1.2em;
        padding: 1.2em 3.5em;
    }
    button.size-large {
        border-radius: 1.5em;
        padding: 1.5em 5.5em;
    }
    button:hover {
        background-color: var(--red-darken);
    }
    button.pressed {
        background-color: var(--red-darken-2);
    }
    button.variant-blue {
        background-color: var(--blue);
    }
    button.variant-blue:hover {
        background-color: var(--blue-darken);
    }
    button.variant-blue.pressed {
        background-color: var(--blue-darken-2);
    }
    button.wide {
        width: 100%;
    }
</style>
