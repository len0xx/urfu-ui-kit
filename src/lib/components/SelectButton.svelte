<script lang="ts">
    import { getSizeName } from '$lib/utilities'
    import type { DefaultSizes } from 'urfu-ui-kit'

	type ButtonType = 'submit' | 'button' | 'reset'

    export let id: string = undefined
	export let type: ButtonType = 'button'
    export let node: HTMLElement = undefined
    export let variant: 'default' | 'active' | 'fill' = 'default'
    export let className = ''
    export let size: DefaultSizes = 'M'
    export let color: 'red' | 'blue' = 'red'

	$: variantClass = `variant-${variant}`
    $: sizeClass = `size-${getSizeName(size)}`
	$: colorClass = `btn-color-${color}`
</script>

<button
    {id}
	{type}
    bind:this={ node }
    on:click|stopPropagation
    on:focus
    on:blur
    on:mouseover
    on:mouseleave
    on:mouseup
    on:mousedown
    class={ ['kit-select-button', className, variantClass, sizeClass, colorClass].filter(Boolean).join(' ') }
>
    <slot />
</button>

<style>
    .kit-select-button {
        display: inline-block;
        margin-right: 1em;
        margin-bottom: 1em;
        padding: 0.7em 0.9em;
        line-height: 1.1;
        border: 2px solid;
        border-color: var(--grey);
        color: var(--grey);
        cursor: pointer;
        border-radius: 10em;
        cursor: pointer;
		background: transparent;
    }

    .kit-select-button.size-small {
        padding: 0.45em 0.7em;
    }

    .kit-select-button.size-medium {
        padding: 0.7em 0.9em;
    }

    .kit-select-button.size-large {
        padding: 1em 1.5em;
        border-width: 3px;
    }

    .kit-select-button.variant-fill.btn-color-blue {
        background-color: var(--blue);
        border-color: transparent;
        color: var(--white);
    }

    .kit-select-button.variant-fill.btn-color-blue:hover {
        background-color: var(--blue-darken);
    }

    .kit-select-button.variant-fill.btn-color-red {
        background-color: var(--red);
        border-color: transparent;
        color: var(--white);
    }

    .kit-select-button.variant-fill.btn-color-red:hover {
        background-color: var(--red-darken);
    }

    .kit-select-button.variant-default {
        border-color: var(--grey);
        color: var(--grey);
    }

    .kit-select-button.variant-active.btn-color-red,
    .kit-select-button.variant-default.btn-color-red:hover {
        border-color: var(--red);
        color: var(--red);
    }

    .kit-select-button.variant-active.btn-color-blue,
    .kit-select-button.variant-default.btn-color-blue:hover {
        border-color: var(--blue);
        color: var(--blue);
    }

    .kit-select-button.variant-active {
        cursor: default;
    }
</style>
