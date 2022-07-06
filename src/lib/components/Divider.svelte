<script lang="ts">
    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let color = 'white'
    export let width = '50px'
    export let height = 4
    export let marginX = 0
    export let marginY = 1
    export let marginTop: number = null
    export let marginBottom: number = null
    export let marginLeft: number = null
    export let marginRight: number = null
    export let className = ''
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    on:click
    on:mouseover
    on:mouseleave
    on:mousedown
    on:mouseup
    class="kit-visual-divider {className}"
    style:background-color={ color }
    style:width
    style:height={ height + 'px' }
    style:margin-top={ (marginTop !== null ? marginTop : marginY) + 'em' }
    style:margin-bottom={ (marginBottom !== null ? marginBottom : marginY) + 'em' }
    style:margin-left={ (marginLeft !== null ? marginLeft : marginX) + 'em' }
    style:margin-right={ (marginRight !== null ? marginRight : marginX) + 'em' }
>
</div>
