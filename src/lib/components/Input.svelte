<script lang="ts">
    import { imask } from 'svelte-imask'
    import { createEventDispatcher, onMount } from 'svelte'

    type InputType = 'text' | 'email' | 'tel' | 'number' | 'password' | 'search' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'file' | 'checkbox' | 'radio' | 'submit' | 'hidden' | 'range' | 'button'

    export let id: string = undefined
    export let min: number = null
    export let max: number = null
    export let mask: Record<string, unknown> = null
    export let wide: boolean = null
    export let name: string = null
    export let step: number = null
    export let size: number = null
    export let list: string = null
    export let value: string = null
    export let className = ''
    export let pattern: string = null
    export let readonly: boolean = null
    export let multiple: boolean = null
    export let disabled: boolean = null
    export let required = false
    export let autofocus: boolean = null
    export let placeholder: string = null
    export let type: InputType = 'text'

    const dispatch = createEventDispatcher()
    let filledIn = false
    let internalValue = value
    let input: HTMLInputElement

    const valueChanged = () => {
        filledIn = input.value != ''
        value = input.value
    }

    const inputHandler = () => {
        valueChanged()
        dispatch('input')
    }

    const changeHandler = () => {
        valueChanged()
        dispatch('change')
    }

    onMount(valueChanged)

    let wideClass = ''
    if (wide !== null) wideClass = 'kit-input-wide'
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
    on:mouseup
    on:mousedown
    on:input={ inputHandler }
    on:change={ changeHandler }
    class={ wideClass ? className + ' ' + wideClass : className }
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