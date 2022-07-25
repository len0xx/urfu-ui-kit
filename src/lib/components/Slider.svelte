<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte'
    import type SvelteCarousel from 'svelte-carousel'
    import { Rainbow } from '$lib/components'

    type BorderStyle = {
        top?: boolean,
        bottom?: boolean,
        left?: boolean,
        right?: boolean
    }

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let duration = 7
    export let swiping = false
    export let autoplay = true
    export let progressBar = true
    export let background = 'transparent'
    export let border: BorderStyle = { top: true }
    export let className = ''

    const dispatch = createEventDispatcher()
    const borderSetting = '1px solid rgba(190, 190, 190, 0.25)'
    
    // for saving Carousel component class
    let Slider: SvelteCarousel
    
    // for calling methods of the slider instance
    let slider: {
        goToPrev: (a: { animate?: boolean }) => void,
        goToNext: (a: { animate?: boolean }) => void
    }
    
    // Duration in seconds
    $: sliderDuration = duration * 1000

    let sliderShifting = true
    let sliderProgress = '0%'

    // Methods to change the page outside of this component (in slots)
    let showPrevPage = () => slider.goToPrev({ animate: true })

    let showNextPage = () => slider.goToNext({ animate: true })

    // Fires when the page changes
    const sliderPageChanged = (event: CustomEvent) => {
        if (progressBar) {
            sliderShifting = false
            sliderProgress = '0%'
            setTimeout(() => sliderShifting = true, 600)
            setTimeout(() => sliderProgress = '100%', 650)
        }
        console.log('changed')
        dispatch('pageChanged', event.detail)
    }

    // Workaround to make the component work in SvelteKit
    onMount(async () => {
        const module = await import('svelte-carousel')
        Slider = module.default

        setTimeout(() => sliderProgress = '100%', 200)
    })
</script>

<div
    {id}
    bind:this={ node }
    style:border-top={ border.top ? borderSetting : '' }
    style:border-bottom={ border.bottom ? borderSetting : '' }
    style:border-left={ border.left ? borderSetting : '' }
    style:border-right={ border.right ? borderSetting : '' }
    style:background={ background }
    class="kit-slider-wrapper { className }"
>
    <svelte:component 
        this={ Slider }
        arrows={ false }
        dots={ false }
        { swiping }
        { autoplay }
        bind:this={ slider }
        autoplayDuration={ sliderDuration }
        on:pageChange={ sliderPageChanged }
    >
        <slot { showPrevPage } { showNextPage } />
    </svelte:component>
    { #if $$slots.buttons }
        <div class="kit-slider-buttons">
            <slot name="buttons" { showPrevPage } { showNextPage } />
        </div>
    { /if }
    { #if progressBar && autoplay }
        <div class="delimeter">
            <hr>
            <div style:transition={ sliderShifting ? ((sliderDuration + 500) / 1000 + 's linear') : 'none' } style:width={ sliderProgress }>
                <Rainbow size="S" />
            </div>
        </div>
    { /if }
</div>

<style>
    .kit-slider-wrapper {
        border-top: 1px solid rgba(190, 190, 190, 0.25);
    }

    .delimeter {
        display: block;
        position: relative;
    }

    hr {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 0;
        margin: 0;
        height: 1px;
        background-color: rgb(190, 190, 190);
        opacity: 0.25;
        border: 0;
        color: inherit;
    }
</style>
