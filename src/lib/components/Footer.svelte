<script lang="ts">
    import { Rainbow, Section } from '.'
    import type { Align, Padding } from 'urfu-ui-kit'
    
    const defaultPadding = { x: 0, y: 1 }

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let className = ''
    export let align: Align = 'center'
    export let padding: Padding = defaultPadding
    export let contentWidth: string = null
</script>

<footer {id} class={ className } bind:this={ node }>
    <Section
        {align}
        {contentWidth}
        padding={{ ...defaultPadding, ...padding }}
    >
        <slot />
    </Section>
    <Rainbow size="M" />
</footer>

<style>
    footer {
        display: block;
        position: relative;
        width: 100%;
        padding: 0;
    }
</style>
