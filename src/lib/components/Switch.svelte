<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let className = ''
    export let left = ''
    export let right = ''
    export let value = false

    const dispatch = createEventDispatcher()

    function setValue(s: boolean) {
        if (value != s) {
            value = s
            dispatch('change', { value })
        }
    }

    const toggleValue = () => setValue(!value)
</script>

<div
    {id}
    bind:this={ node }
    on:focus
    on:blur
    on:mouseover
    on:mouseleave
    on:mouseup
    on:mousedown
    class="kit-switch {className}"
>
    { #if left }
        <span class="heading-3" class:blue-text={!value} class:grey-text={value} on:click={() => setValue(false)}>{ left }</span>
    { /if }
    <div class="toggler" class:toggled={value} on:click={toggleValue}>
        <span class="switch"></span>
    </div>
    { #if right }
        <span class="heading-3" class:blue-text={value} class:grey-text={!value} on:click={() => setValue(true)}>{ right }</span>
    { /if }
</div>

<style>
    .toggler {
        display: inline-block;
        position: relative;
        margin: 0 1em;
        border-radius: 20em;
        width: 54px;
        height: 26px;
        background-color: var(--blue);
        cursor: pointer;
        padding: 4px;
        transition: 0.1s ease-in-out;
        text-align: left !important;
    }

    span.heading-3 {
        cursor: pointer;
    }

    .toggler .switch {
        display: inline-block;
        position: relative;
        background-color: white;
        width: 18px;
        height: 18px;
        border-radius: 50%;
    }

    .toggler.toggled {
        padding-left: 32px;
    }
</style>
