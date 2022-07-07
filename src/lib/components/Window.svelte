<script lang="ts">
    import { range, random } from '$lib/utilities'
    import { beforeUpdate } from 'svelte'

    export let node: HTMLElement = undefined
    export let placeholder = false
    export let contentAmount = 8
    export let paddingX = 1
    export let paddingY = 2
    export let paddingTop: number = null
    export let paddingBottom: number = null
    export let paddingLeft: number = null
    export let paddingRight: number = null

    $: placeholderVisible = placeholder

    beforeUpdate(() => {
        if (contentAmount < 1)
            throw new Error('contentAmount can not be 0 or a negative number')
    })
</script>

<div
    class="win-emulator"
    bind:this={ node }
>
    <div class="win-header">
        <div class="close-btn ui-btn"></div>
        <div class="hide-btn ui-btn"></div>
        <div class="expand-btn ui-btn"></div>
    </div>
    <div class="win-container" class:placeholderVisible>
        { #if placeholder }
            <div
                class="container-bg"
                style:padding-top={ (paddingTop !== null ? paddingTop : paddingY) + 'em' }
                style:padding-bottom={ (paddingBottom !== null ? paddingBottom : paddingY) + 'em' }
                style:padding-left={ (paddingLeft !== null ? paddingLeft : paddingX) + 'em' }
                style:padding-right={ (paddingRight !== null ? paddingRight : paddingX) + 'em' }
            >
                { #each range(contentAmount) as _ }
                    <div class="text-holder" style:width="{ random(25, 85) }%"></div>
                { /each }
            </div>
        { /if }
        <div class="container-fg">
            <slot />
        </div>
    </div>
</div>

<style>
    .win-emulator {
        display: block;
        position: relative;
        width: 100%;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 12px;
    }

    .win-emulator .win-container.placeholderVisible {
        display: grid;
        justify-items: start;
    }

    .win-emulator .win-container.placeholderVisible > * {
        grid-row: 1;
        grid-column: 1;
    }

    .win-emulator .win-container > .container-bg,
    .win-emulator .win-container > .container-fg {
        display: block;
        position: relative;
        width: 100%;
    }

    .win-emulator .win-container > .container-bg {
        padding: 2em 1em;
    }

    .win-emulator .win-container > .container-bg > .text-holder {
        display: block;
        background-color: rgb(226, 226, 226);
        height: 1.5em;
        margin-bottom: 1.5em;
        border-radius: 4px;
    }

    .win-emulator .win-container {
        display: block;
        position: relative;
    }

    .win-emulator .win-header {
        display: block;
        position: relative;
        padding: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        line-height: 0.95;
        cursor: default;
    }

    .win-emulator .ui-btn {
        --btn-size: 16px;
        --btn-padding: calc(var(--btn-size) / 2);
        --window-padding: 16px;
        --red-color: rgb(237, 106, 93);
        --yellow-color: rgb(245, 191, 79);
        --green-color: rgb(98, 197, 84);

        display: inline-block;
        position: relative;
        width: var(--btn-size);
        height: var(--btn-size);
        border-radius: 100%;
    }

    .win-emulator .ui-btn:not(:last-child) {
        margin-right: calc(var(--btn-size) / 2);
    }

    .win-emulator .ui-btn.close-btn {
        background-color: var(--red-color);
    }

    .win-emulator .ui-btn.hide-btn {
        background-color: var(--yellow-color);
    }

    .win-emulator .ui-btn.expand-btn {
        background-color: var(--green-color);
    }
</style>