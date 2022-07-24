<script lang="ts">
    import { Div, Heading } from '$lib/components'
    import { createEventDispatcher } from 'svelte'
    import { slide } from 'svelte/transition'
    import type { TransitionReceiver } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let className = ''
    export let interactive = false
    export let transition: TransitionReceiver = { in: undefined, out: undefined }
    
    let active = false
    const dispatch = createEventDispatcher()
    $: activeClass = active ? 'active' : ''

    export const toggle = () => active = !active

    export const open = () => active = true

    export const close = () => active = false

    const handleClick = () => {
        if (interactive) toggle()
        dispatch('click')
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<Div
    {id}
    bind:node
    {transition}
    padding={{ y: 1.2 }}
    className="kit-expandable {className} {activeClass}"
    on:click={ handleClick }
    on:mousedown
    on:mouseup
    on:mouseover
    on:mouseleave
>
    <div class="block-content">
        <div>
            <Heading size={ 3 } color="var(--blue)"><slot name="header" /></Heading>
            { #if active }
                <p transition:slide="{{ duration: 200 }}">
                    <slot name="text" />
                </p>
            { /if }
        </div>
        <div class="icon">
            { #if active }
                <svg width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 2L0 2" stroke="#1E4391" stroke-width="3"/>
                </svg>
            { :else }
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 28V0" stroke="#1E4391" stroke-width="3"/>
                    <path d="M28 14L0 14" stroke="#1E4391" stroke-width="3"/>
                </svg>
            { /if }           
        </div>
    </div>
</Div>

<style>
    :global(.kit-expandable[data-kit-component="true"]) {
        border-width: 2px;
        border-style: solid;
        border-top-color: transparent;
        border-bottom-color: var(--light-grey);
        border-right-width: 0;
        border-left-width: 0;
        cursor: pointer;
    }

    :global(.kit-expandable[data-kit-component="true"] .block-content) {
        display: grid;
        position: relative;
        gap: 2em;
        grid-template-columns: 1fr 50px;
    }

    :global(.kit-expandable[data-kit-component="true"] .block-content .icon) {
        justify-self: end;
        align-self: center;
    }

    :global(.kit-expandable[data-kit-component="true"]:first-of-type) {
        border-top-color: var(--light-grey);
    }

    :global(.kit-expandable[data-kit-component="true"] > h4) {
        margin-top: 0.5em;
    }

    :global(.kit-expandable[data-kit-component="true"] p) {
        margin: 0;
        transition: 0.1s ease-in-out;
    }

    :global(.kit-expandable[data-kit-component="true"].active) {
        border-top-color: var(--blue);
        border-bottom-color: var(--blue);
    }
</style>
