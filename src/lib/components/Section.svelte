<script lang="ts">
    import { computePadding } from '$lib/utilities'
    import type { Align, Padding } from 'urfu-ui-kit'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let className = ''
    export let align: Align = 'center'
    export let padding: Padding = { x: 0, y: 0 }
    export let contentWidth: string = undefined

    $: alignClass = 'section-align-' + align
</script>

<section
    {id}
    bind:this={ node }
    class={ ['kit-section', className, alignClass].filter(Boolean).join(' ') }
    style:padding={ computePadding(padding) }
>
    <div class="content-wrapper" style:max-width={ contentWidth }>
        <slot />
    </div>
</section>

<style>
    section > .content-wrapper {
        max-width: var(--content-width);
	    overflow: auto;
    }

    section.section-align-left > .content-wrapper {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: auto;
    }

    section.section-align-center > .content-wrapper {
        margin: 0 auto;
    }

    section.section-align-right > .content-wrapper {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: auto;
    }
</style>
