<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { getSizeName } from '$lib/utilities'
    import type { DefaultSizes } from 'urfu-ui-kit'
    
    type Variant = 'primary' | 'blue' | 'gray'
    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let type: 'submit' | 'reset' | 'button' = 'submit'
    export let value: string = undefined
    export let variant: Variant = 'primary'
    export let href = ''
    export let target = '_SELF'
    export let className = ''
    export let size: DefaultSizes = 'M'

    let pressed = false
    const dispatch = createEventDispatcher()
    
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

    $: sizeClass = 'size-' + getSizeName(size)
</script>

<button
    {id}
    {type}
    {value}
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
    { #if $$slots.before }
        <span class="before-content button-content">
            <slot name="before" />
        </span>
    { /if }
    <span class="default-content button-content">
        <slot />
    </span>
    { #if $$slots.after }
        <span class="after-content button-content">
            <slot name="after" />
        </span>
    { /if }
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
    button:hover,
    button:focus {
        background-color: var(--red-darken);
    }
    button.pressed {
        background-color: var(--red-darken-2);
    }
    button.variant-blue {
        background-color: var(--blue);
    }
    button.variant-blue:hover,
    button.variant-blue:focus {
        background-color: var(--blue-darken);
    }
    button.variant-blue.pressed {
        background-color: var(--blue-darken-2);
    }
    button.variant-gray {
        background-color: var(--gray);
    }
    button.variant-gray:hover,
    button.variant-gray:focus {
        background-color: var(--gray-darken);
    }
    button.variant-gray.pressed {
        background-color: var(--gray-darken-2);
    }
    .button-content {
        display: inline-block;
        position: relative;
        vertical-align: middle;
    }
    .before-content {
        margin-right: 0.75em;
    }
    .after-content {
        margin-left: 0.75em;
    }
    button.wide {
        width: 100%;
    }
</style>
