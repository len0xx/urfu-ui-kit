<script lang="ts">
    import { imask } from 'svelte-imask'
    import { createEventDispatcher, onMount } from 'svelte'

    type InputType = 'text' | 'email' | 'tel' | 'number' | 'password' | 'search' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'file' | 'checkbox' | 'radio' | 'submit' | 'hidden' | 'range' | 'button'

    export let id = null
    export let min = null
    export let max = null
    export let mask = null
    export let wide = null
    export let name = null
    export let step = null
    export let size = null
    export let list = null
    export let value = null
    export let className = ''
    export let pattern = null
    export let readonly = null
    export let multiple = null
    export let disabled = null
    export let required = false
    export let autofocus = null
    export let placeholder = null
    export let type: InputType = 'text'

    const dispatch = createEventDispatcher()
    let filledIn = false
    let internalValue = value
    let input: HTMLInputElement

    const inputHandler = () => {
        filledIn = input.value != ''
        value = input.value
        dispatch('input')
    }

    onMount(inputHandler)

    if (wide !== null) className = className.length ? [className, 'kit-input-wide'].join(' ') : 'kit-input-wide'
</script>

<!-- svelte-ignore a11y-autofocus -->
<input
    { id }
    { min }
    { max }
    { type }
    { name }
    { size }
    { step }
    { list }
    { pattern }
    { readonly }
    { multiple }
    { required }
    { disabled }
    { autofocus }
    value={ internalValue }
    on:click
    on:focus
    on:blur
    on:change
    on:mouseover
    on:mouseleave
    on:input={ inputHandler }
    class={ className }
    class:filledIn
    bind:this={ input }
    use:imask={ mask || undefined }
    placeholder={ placeholder || undefined }
/>

<style>
    input:not([type="hidden"]):not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="range"]) {
        background: transparent;
        border-radius: 0;
        box-shadow: unset;
        border: none;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        padding: 8px 16px;
        color: var(--dark);
	    margin-bottom: 1em;
    }

    input:not([type="hidden"]):not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="range"]).filledIn {
        border-bottom-color: var(--blue);
        color: var(--blue);
    }

    input:not([type="hidden"]):not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="range"]):not(.filledIn):focus {
        border-bottom-color: rgba(0, 0, 0, 0.4);
    }

    input::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
    input.kit-input-wide {
        width: 100%;
    }
    input:focus {
        -webkit-outline: unset;
        -moz-outline: unset;
        outline: unset;
    }
</style>