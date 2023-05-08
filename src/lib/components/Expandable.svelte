<script lang="ts">
    import { Heading } from '$lib/components'
    import { computePadding, applyTransitions } from '$lib/utilities'
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
	$: ({ inFunc, inOptions, outFunc, outOptions } = applyTransitions(transition))

    export const toggle = () => active = !active

    export const open = () => active = true

    export const close = () => active = false

    const handleClick = () => {
        if (interactive) toggle()
        dispatch('click')
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    in:inFunc={ inOptions }
    out:outFunc={ outOptions }
	style:padding={ computePadding({ y: 1.2 }) }
    class={ ['kit-expandable', className, activeClass].filter(Boolean).join(' ') }
    on:click={ handleClick }
    on:mousedown
    on:mouseup
    on:mouseover
    on:mouseleave
>
    <div class="block-content">
        <div>
            <Heading size={ 4 } color="var(--blue)"><slot name="header" /></Heading>
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
</div>

<style>
    .kit-expandable {
        border-width: 2px;
        border-style: solid;
        border-top-color: transparent;
        border-bottom-color: var(--light-grey);
        border-right-width: 0;
        border-left-width: 0;
        cursor: pointer;
    }

    .kit-expandable .block-content {
        display: grid;
        position: relative;
        gap: 2em;
        grid-template-columns: 1fr 50px;
    }

    .kit-expandable .block-content .icon {
        justify-self: end;
        align-self: center;
    }

    .kit-expandable:first-of-type {
        border-top-color: var(--light-grey);
    }

    :global(.kit-expandable > h4) {
        margin-top: 0.5em;
    }

    .kit-expandable p {
        margin: 0;
        transition: 0.1s ease-in-out;
    }

    .kit-expandable.active {
        border-top-color: var(--blue);
        border-bottom-color: var(--blue);
    }
</style>
