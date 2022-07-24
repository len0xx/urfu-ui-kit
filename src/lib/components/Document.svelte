<script lang="ts">
    import { Div, Heading } from '$lib/components'
    import type { TransitionReceiver } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let extension: string
    export let filename: string
    export let link = ''
    export let className = ''
    export let transition: TransitionReceiver = { in: undefined, out: undefined }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<Div
    {id}
    bind:node
    {transition}
    padding={{ y: 2.5 }}
    className="kit-document {className}"
    on:click
    on:mousedown
    on:mouseup
    on:mouseover
    on:mouseleave
>
    <div class="extension { extension }">.{ extension }</div>
    <Heading size={4} margin={{ y: 0 }}>
        { #if link }
            <a target="_BLANK" href={ link }>
                { filename }.{ extension }
            </a>
        { :else }
            { filename }.{ extension }
        { /if }
    </Heading>
</Div>

<style>
    :global(.kit-document[data-kit-component="true"]) {
        display: grid;
        grid-template-columns: 70px 1fr;
        gap: 2em;
        position: relative;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        align-items: center;
    }

    :global(.kit-document[data-kit-component="true"]:first-of-type) {
        border-top: 2px solid rgba(0, 0, 0, 0.1);
    }

    :global(.kit-document[data-kit-component="true"] .extension) {
        display: inline-block;
        position: relative;
        padding: 0.5em;
        background: var(--red);
        color: white;
        align-self: start;
        line-height: 1;
        text-align: center;
        cursor: default;
    }

    :global(.kit-document[data-kit-component="true"] .extension.doc),
    :global(.kit-document[data-kit-component="true"] .extension.docx) {
        background: var(--blue);
    }

    :global(.kit-document[data-kit-component="true"] .extension.xls),
    :global(.kit-document[data-kit-component="true"] .extension.xlsx) {
        background: var(--green);
    }

    :global(.kit-document[data-kit-component="true"] a) {
        color: black;
    }

    :global(.kit-document[data-kit-component="true"] a:hover) {
        color: var(--blue);
        text-decoration: underline;
    }
</style>
