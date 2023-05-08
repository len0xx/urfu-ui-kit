<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'
    import { Heading } from '.'
    import { applyTransitions } from '$lib/utilities'
    import type { TransitionReceiver } from 'urfu-ui-kit'

    export let id: string = undefined
    export let name = ''
    export let node: HTMLElement = undefined
    export let position = ''
    export let description = ''
    export let src = ''
    export let transition: TransitionReceiver = { in: undefined, out: undefined }
	export let className = ''

    let video: HTMLVideoElement
    let videoPlaying = false
    const dispatch = createEventDispatcher()

    $: ({ inFunc, inOptions, outFunc, outOptions } = applyTransitions(transition))

    const toggleVideo = () => {
        if (src) {
            if (!videoPlaying) {
                video.play()
                videoPlaying = true
                dispatch('play')
            }
            else {
                video.pause()
                videoPlaying = false
                dispatch('pause')
            }
        }
        dispatch('click')
    }
</script>

<div
    {id}
	bind:this={ node }
    class={ ['kit-video-card', className].filter(Boolean).join(' ') }
    in:inFunc={ inOptions }
    out:outFunc={ outOptions }
    on:click={ toggleVideo }
    on:mouseover
    on:mouseleave
    on:focus
    on:blur
>
    <div class="img">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video class="lazy" loop playsinline bind:this={ video } width="100%">
            <source {src} data-src={ src } type="video/mp4">
        </video>
        { #if !videoPlaying }
            <img src="/img/icons/play-icon.svg" alt="Play" transition:fade="{{ duration: 100 }}">
        { /if }
    </div>
    <Heading size={4} color="var(--blue)">{ name }</Heading>
    <p class="position">{ @html position }</p>
    { #if description }
        <p class="description">{ @html description }</p>
    { /if }
</div>

<style>
    .kit-video-card .img {
        display: grid;
        position: relative;
        place-items: center;
        place-content: center;
        min-height: 226px;
        min-width: 239px;
        background: #C4C4C4;
        margin-bottom: 1em;
        cursor: pointer;
    }

    :global(.kit-video-card .img > *) {
        grid-row: 1;
        grid-column: 1;
    }

    .kit-video-card .img video {
        object-fit: cover;
    }

    .kit-video-card .img img {
        transition: 0.1s ease-in-out;
        transform: scale(1);
    }

    .kit-video-card:hover .img img {
        transform: scale(1.2);
    }

    @media screen and (max-width: 768px) {
        .kit-video-card .img {
            min-width: 220px;
        }
    }

    .kit-video-card p.description {
        color: rgba(0, 0, 0, .6);
    }
</style>
