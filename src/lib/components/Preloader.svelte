<script lang="ts">
    import { Progress } from '$lib/components'
    import { pageLoaded } from '$lib/stores'
    import { page } from '$app/stores'
    import { onMount } from 'svelte'

    export let node: HTMLElement = undefined
    export let delay = 0
    export let size: DefaultSizes = 'M'
    export let hideOnLoad = true
    export let className = ''

    let transparent = false
    let hidden = false

    export const hide = () => {
        setTimeout(() => transparent = true, delay)
        setTimeout(() => hidden = true, delay + 110)
    }

    export const show = () => {
        setTimeout(() => hidden = false, delay)
        setTimeout(() => transparent = false, delay + 10)
    }

    const handleLoad = () => {
        if (hideOnLoad && !$pageLoaded) {
            hide()
            $pageLoaded = true
        }
    }
    
    onMount(() => {
        if ($page.status > 399) hide()
    })
</script>

<svelte:window on:load={ handleLoad }></svelte:window>

<section class="kit-preloader {className}" class:transparent class:hidden bind:this={ node } on:click>
    <Progress {size} />
</section>

<style>
    .kit-preloader {
        display: grid;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: white;
        z-index: 999;
        place-items: center;
        place-content: center;
        transition: 0.1s ease-in-out;
    }
    .kit-preloader.transparent {
        opacity: 0;
    }
    .kit-preloader.hidden {
        display: none;
    }
</style>
