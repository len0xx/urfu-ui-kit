<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let className = ''
    export let hideOnScrollDown = false
    export let hideAfter = 10
    export let showOnScrollUp = false
    export let transparent = false

    let hide = false
    let scrolled = false
    let prevScroll = 0
    const dispatch = createEventDispatcher()

    const scrollHandler = () => {
        const currentScroll = window.scrollY
        const scrolledVal = currentScroll > 0
        if (scrolled == false && scrolledVal == true) {
            dispatch('scroll-down')
        }
        else if (scrolled == true && scrolledVal == false) {
            dispatch('scroll-up')
        }
        scrolled = scrolledVal
        if (hideOnScrollDown) {
            if (currentScroll > prevScroll && currentScroll > hideAfter) {
                hide = true
            } else {
                if (showOnScrollUp && currentScroll < prevScroll) {
                    hide = false
                }
            }
        }
        prevScroll = currentScroll
    }
</script>

<svelte:window on:scroll={ scrollHandler }></svelte:window>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<header
    {id}
    bind:this={ node }
    on:click
    on:mousedown
    on:mouseup
    on:mouseover
    on:mouseleave
    class:scrolled
    class="kit-header {className}"
    class:kit-hidden={ hide }
    class:transparent-bg={ transparent }
>
    <slot />
</header>

<style>
    header.kit-header {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        text-align: left;
        padding: 16px 0;
        background: #FFFFFF;
        color: #000000;
        width: 100%;
        z-index: 20;
        transition: 0.2s ease-in-out;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    header.kit-header.transparent-bg {
        background: transparent;
        border-bottom: none;
    }

    header.kit-header.transparent-bg.scrolled {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    }

    header.kit-header.kit-hidden {
        transform: translateY(-100%);
    }
</style>
