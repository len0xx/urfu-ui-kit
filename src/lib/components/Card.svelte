<script lang="ts">
    import { Text, Heading } from '$lib/components'

    type ColorVariant = 'white' | 'grey'
    type Gradient = 'blue-1' | 'blue-2' | 'red-1' | 'red-2'
    
    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let color: Gradient = 'red-1'
    export let variant: ColorVariant = 'grey'
    export let className = ''
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    {id}
    bind:this={ node }
    on:click
    on:mousedown
    on:mouseup
    on:mouseover
    on:mouseleave
    class="kit-card variant-{variant} gradient-{color} {className}"
>
    <div class="radial-icon"></div>
    <div class="top">
        <Heading size={3} marginTop={0}><slot name="title" /></Heading>
        <Text className="description semi-bold" opacity={0.4}>
            <slot name="text" />
        </Text>
    </div>
    <div class="bottom">
        <div class="left">
            <slot name="left" />
        </div>
        <div class="right">
            <slot name="right" />
        </div>
    </div>
</div>

<style>
    .kit-card {
        display: grid;
        position: relative;
        grid-template-columns: 1fr;
        padding: 1em;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        background: transparent;
        overflow: hidden;
        cursor: pointer;
        min-height: 200px;
        min-width: 200px;
    }

    .kit-card.variant-white {
        background: #FFFFFF;
    }
    .kit-card.variant-grey {
        background: #F6F6F6;
    }

    .kit-card * {
        transition: 0.2s ease-in-out;
    }

    .kit-card .radial-icon {
        display: block;
        position: absolute;
        top: 1em;
        right: 1em;
        width: 20px;
        height: 20px;
        background-image: url(/img/radial-gradient.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .kit-card.gradient-red-1 .radial-icon {
        background-image: url(/img/gradient-red-1.png);
    }
    .kit-card.gradient-red-2 .radial-icon {
        background-image: url(/img/gradient-red-2.png);
    }
    .kit-card.gradient-blue-1 .radial-icon {
        background-image: url(/img/gradient-blue-1.png);
    }
    .kit-card.gradient-blue-2 .radial-icon {
        background-image: url(/img/gradient-blue-2.png);
    }

    .kit-card:hover .radial-icon {
        transform: scale(12) rotate(200deg);
    }

    @media screen and (max-width: 768px) {
        .kit-card:hover .radial-icon {
            transform: scale(12) rotate(200deg);
        }
    }

    :global(.kit-card h3) {
        max-width: 80%;
    }

    .kit-card .top {
        align-self: start;
    }

    .kit-card .bottom {
        display: grid;
        grid-template-columns: 3fr 2fr;
        align-self: end;
    }

    .kit-card .bottom > .right {
        text-align: right;
    }

    :global(.kit-card .description) {
        font-size: 0.9em;
        margin-bottom: 1.5em;
        max-width: 80%;
    }

    .kit-card .right {
        color: var(--blue);
    }
</style>