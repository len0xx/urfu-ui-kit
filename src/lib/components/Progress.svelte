<script lang="ts">
    import { getSizeName, type DefaultSizes } from '$lib/types'

    import progress from '$lib/img/progress.svg'
    export let className = ''
    export let size: DefaultSizes = 'M'
    export let speed: 1 | 2 | 3 = 2

    let sizeClass = 'size-' + getSizeName(size)
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<img
    src={progress}
    alt="Progress animation"
    on:click
    on:mouseleave
    on:mousedown
    on:mouseup
    on:mouseover
    class="kit-progress {className} {sizeClass} speed-{speed}"
>

<style>
    @keyframes rotation {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(359deg)
        }
    }
    
    .kit-progress {
        display: inline-block;
        vertical-align: middle;
        animation-name: rotation;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-direction: normal;
        animation-iteration-count: infinite;
    }
    .kit-progress.size-small {
        height: 40px;
        width: 40px;
    }
    .kit-progress.size-medium {
        height: 60px;
        width: 60px;
    }
    .kit-progress.size-large {
        height: 80px;
        width: 80px;
    }
    .kit-progress.speed-1 {
        animation-duration: 2s;
    }
    .kit-progress.speed-2 {
        animation-duration: 1s;
    }
    .kit-progress.speed-3 {
        animation-duration: 0.5s;
    }
</style>
