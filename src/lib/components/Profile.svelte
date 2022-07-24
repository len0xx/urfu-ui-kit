<script lang="ts">
    import { onMount } from 'svelte'
    import { Div, Text, Heading } from '$lib/components'
    import type { TransitionReceiver } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let img = ''
    export let variant: 'white' | 'grey' = 'grey'
    export let className = ''
    export let transition: TransitionReceiver = { in: undefined, out: undefined }

    let shadowText: HTMLParagraphElement
    let textExpanded = false
    let text: string
    let shortText: string
    let textTooLong = false
    const MAX_WORDS = 80

    onMount(() => {
        text = shortText = shadowText.textContent
        textTooLong = text.split(' ').length > MAX_WORDS

        if (textTooLong) {
            shortText = text.split(' ').slice(0, MAX_WORDS).join(' ')
        }
        shadowText.parentNode.removeChild(shadowText)
    })
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<Div
    {id}
    bind:node
    {transition}
    padding={{ y: 1.25, x: 1.25 }}
    className="kit-profile variant-{variant} {className}"
    on:click
    on:mouseleave
    on:mousedown
    on:mouseup
    on:mouseover
>
    <img class="kit-profile-image" src={ img || '/img/gradient-red-1.png' } alt="Profile">
    <div class="kit-profile-heading">
        <Heading size={4} className="kit-profile-title subtitle" color="var(--blue)" margin={{ y: 0 }}>
            <slot name="name" />
        </Heading>
        <Text className="kit-profile-subheading" margin={{ y: 0 }} opacity={0.6}>
            <slot name="description" />
        </Text>
    </div>
    <Text className="kit-profile-text" margin={{ y: 0 }}>
        { #if textTooLong }
            { #if !textExpanded }
                { @html shortText }... <span class="semi-bold inline-btn-s" on:click={() => textExpanded = true}>Дальше</span>
            { :else }
                { @html text }
            { /if }
        { :else }
            { @html text }
        { /if }
    </Text>
    <p class="hidden shadow-text" bind:this={ shadowText }><slot name="text" /></p>
</Div>

<style>
    .inline-btn-s {
        cursor: pointer;
    }

    .hidden {
        display: none;
        visibility: hidden;
        opacity: 0;
        width: 0px !important;
        height: 0px !important;
    }

    :global(.kit-profile[data-kit-component="true"]) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        border: 1px solid rgba(34, 34, 34, 0.05);
        border-radius: 2px;
        grid-template-columns: 64px 1fr;
        background-color: #F6F6F6;
        align-content: start;
    }

    :global(.kit-profile[data-kit-component="true"].variant-white) {
        background: white;
    }

    .kit-profile-image {
        display: block;
        position: relative;
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    :global(.kit-profile-title) {
        margin-bottom: 0.3em;
    }

    :global(.kit-profile-subheading),
    :global(.kit-profile-text) {
        font-size: calc(var(--text-size) * 0.875);
        line-height: 1.4;
    }

    :global(.kit-profile-text) {
        grid-column: 1/3;
    }
</style>