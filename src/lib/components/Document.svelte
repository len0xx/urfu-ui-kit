<script lang="ts">
    import { Heading } from '$lib/components'
    import { computePadding, applyTransitions } from '$lib/utilities'
    import type { TransitionReceiver } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let extension: string
    export let filename: string
    export let link = ''
    export let className = ''
    export let transition: TransitionReceiver = { in: undefined, out: undefined }

	$: ({ inFunc, inOptions, outFunc, outOptions } = applyTransitions(transition))
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    in:inFunc={ inOptions }
    out:outFunc={ outOptions }
	style:padding={ computePadding({ y: 2.5 }) }
    class={ ['kit-document', className].filter(Boolean).join(' ') }
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
</div>

<style>
    .kit-document {
        display: grid;
        grid-template-columns: 70px 1fr;
        gap: 2em;
        position: relative;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        align-items: center;
    }

    .kit-document:first-of-type {
        border-top: 2px solid rgba(0, 0, 0, 0.1);
    }

    .kit-document .extension {
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

    .kit-document .extension.doc,
    .kit-document .extension.docx {
        background: var(--blue);
    }

    .kit-document .extension.xls,
    .kit-document .extension.xlsx {
        background: var(--green);
    }

    .kit-document a {
        color: black;
    }

    .kit-document a:hover {
        color: var(--blue);
        text-decoration: underline;
    }
</style>
