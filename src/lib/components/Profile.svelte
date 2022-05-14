<script lang="ts">
    import { onMount } from 'svelte'
    import Heading from './Heading.svelte'

    export let img = ''
    export let variant: 'white' | 'grey' = 'grey'
    export let className = ''

    let shadowText: HTMLParagraphElement
    let textExpanded = false
    let text: string
    let shortText: string
    let length = 0

    onMount(() => {
        text = shortText = shadowText.textContent
        length = text.length

        if (length > 400) {
            shortText = text.slice(0, 400);
        }
        shadowText.parentNode.removeChild(shadowText)
    })
</script>

<div class="kit-profile grid grid-2 variant-{variant} {className}" on:click>
    <img class="kit-profile-image" src={ img || '/img/gradient-red-1.png' } alt="Profile">
    <div class="kit-profile-heading">
        <Heading size={4} className="kit-profile-title subtitle blue-text" marginY={0}>
            <slot name="name" />
        </Heading>
        <p class="kit-profile-subheading no-margin">
            <slot name="description" />
        </p>
    </div>
    <p class="kit-profile-text no-margin">
        { #if length > 400 }
            { #if !textExpanded }
                { shortText }... <span class="semi-bold inline-btn-s" on:click={() => textExpanded = true}>Дальше</span>
            { :else }
                { text }
            { /if }
        { :else }
            { text }
        { /if }
    </p>
    <p class="hidden shadow-text" bind:this={ shadowText }><slot name="text" /></p>
</div>

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

    .kit-profile {
        border: 1px solid rgba(34, 34, 34, 0.05);
        border-radius: 2px;
        padding: 1.25em;
        grid-template-columns: 64px 1fr;
        background-color: #F6F6F6;
        align-content: start;
    }

    .kit-profile.variant-white {
        background: white;
    }

    .kit-profile-image {
        display: block;
        position: relative;
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    .kit-profile-title {
        margin-bottom: 0.3em;
    }

    .kit-profile-subheading,
    .kit-profile-text {
        font-size: calc(var(--text-size) * 0.875);
        line-height: 1.4;
    }

    .kit-profile-subheading {
        opacity: 0.6;
    }

    .kit-profile-text {
        grid-column: 1/3;
    }
</style>