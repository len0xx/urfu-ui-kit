<script lang="ts">
    import { filterPropsOut } from '../utilities'
    import type { Align } from '$lib/types'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let className = ''
    export let align: Align = 'center'
    export let paddingX = 0
    export let paddingY = 0
    export let paddingTop: number = null
    export let paddingBottom: number = null
    export let paddingLeft: number = null
    export let paddingRight: number = null
    export let contentWidth: string = null

    $: ({...attrs} = $$props)

    $: finalAttrs = filterPropsOut(attrs, ['className', 'class', 'align', 'id', 'paddingX', 'paddingY', 'paddingRight', 'paddingTop', 'paddingLeft', 'paddingBottom', 'contentWidth'])
    let alignClass = 'section-align-' + align
</script>

<section 
    {id}
    bind:this={ node }
    {...finalAttrs}
    class={['kit-section', className, alignClass].join(' ')}
    style:padding-top={ (paddingTop !== null ? paddingTop : paddingY) + 'em' }
    style:padding-bottom={ (paddingBottom !== null ? paddingBottom : paddingY) + 'em' }
    style:padding-left={ (paddingLeft !== null ? paddingLeft : paddingX) + 'em' }
    style:padding-right={ (paddingRight !== null ? paddingRight : paddingX) + 'em' }
>
    <div class="content-wrapper" style:width={ contentWidth }>
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
        margin-top: 0;
        margin-bottom: 0;
        margin: 0 auto;
    }

    section.section-align-right > .content-wrapper {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: auto;
    }
</style>