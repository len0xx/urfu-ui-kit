<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { getSizeName } from '$lib/utilities'
    import { Icon } from '.'
    import type { DefaultSizes } from 'urfu-ui-kit'

    type IconName = 'left' | 'right' | 'up' | 'down' | 'plus'
	type ButtonType = 'submit' | 'button' | 'reset'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let variant: IconName = 'plus'
    export let size: DefaultSizes = 'M'
	export let type: ButtonType = 'button'
    export let className = ''
    export let transparent = true
    export let animate = true
	export let stopPropagation = false

    let pressed = false
    $: sizeClass = `size-${getSizeName(size)}` 
    $: iconSize = variant == 'plus' ? 24 : 16
    const dispatch = createEventDispatcher()

	const handleClick = (event: Event) => {
		if (stopPropagation) event.stopPropagation()
		dispatch('click')
	}

    const handleMouseDown = () => {
        pressed = animate && true
        dispatch('mousedown')
    }

    const handleMouseUp = () => {
        pressed = animate && false
        dispatch('mouseup')
    }

    const handleBlur = () => {
        pressed = animate && false
        dispatch('blur')
    }

    const handleFocus = () => {
        pressed = animate && true
        dispatch('focus')
    }
</script>

<button
    {id}
	{type}
    bind:this={ node }
    class={ ['kit-round-button', sizeClass, className].filter(Boolean).join(' ') }
	class:transparent-bg={ transparent }
    class:pressed
    on:click={handleClick}
    on:mousedown={handleMouseDown}
    on:mouseup={handleMouseUp}
    on:focus={handleFocus}
    on:blur={handleBlur}
    on:mouseover
    on:mouseleave
>
    <Icon name={ variant } width={ iconSize } height={ iconSize } />         
</button>

<style>
    button.kit-round-button {
        display: inline-grid;
        place-content: center;
        place-items: center;
        background-color: rgb(246, 246, 246);
        line-height: 1;
        border: unset;
        border-radius: 50%;
        transition: 0.1s ease-in-out;
        transform: scale(1);
        vertical-align: middle;
        cursor: pointer;
    }

    button.kit-round-button.transparent-bg {
        background-color: #1E43910A;
    }

    button.kit-round-button.size-small {
        width: 42px;
        height: 42px;
    }

    button.kit-round-button.size-medium {
        width: 64px;
        height: 64px;
    }

    button.kit-round-button.size-large {
        width: 80px;
        height: 80px;
    }

    button.kit-round-button.size-xlarge {
        width: 100px;
        height: 100px;
    }

    button.kit-round-button:hover {
        background-color: rgb(233, 236, 243);
    }

    button.kit-round-button.transparent-bg:hover {
        background-color: #1E43911A;
    }

    button.kit-round-button.pressed {
        background-color: rgb(224, 230, 238);
        transform: scale(1.1);
    }

    button.kit-round-button.transparent-bg.pressed {
        background-color: #102c6828;
    }

    button.kit-round-button:not(:last-of-type) {
        margin-right: 1em;
    }
</style>
