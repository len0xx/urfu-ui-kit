<script lang="ts">
    import { Text, Heading } from '$lib/components'
    import playIcon from '../img/play-icon.svg'

    export let name = ''
    export let position = ''
    export let description = ''
    export let src = ''
    export let className = ''
</script>

<div class="kit-video-card {className}" on:click>
    <div class="img" style="background-image: url({ src })"><img src={playIcon} alt="Play"></div>
    <Heading size={4} color="var(--blue)">{ name }</Heading>
    <Text className="position">{ @html position }</Text>
    { #if description }
        <Text className="description">{ @html description }</Text>
    { /if }
</div>

<style>
    .kit-video-card .img {
        display: grid;
        position: relative;
        place-items: center;
        place-content: center;
        min-height: 426px;
        background: #C4C4C4;
        margin-bottom: 1em;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .kit-video-card .img {
            min-width: 220px;
        }
    }

    :global(.kit-video-card p.description) {
        color: rgba(0, 0, 0, .6);
    }
</style>
