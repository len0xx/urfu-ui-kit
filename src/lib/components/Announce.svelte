<script lang="ts">
    import { Grid } from '$lib/components'

    export let id: string = undefined
    export let node: HTMLElement = undefined
    export let image = ''
    export let vector = ''
    export let color = 'var(--blue)'
    export let className = ''
    export let imagePosition: 'left' | 'right' = 'right'

    $: imageClass = `${ imagePosition }-side-image`
</script>

<section
    {id}
    bind:this={ node }
    class={ ['kit-announce', className, imageClass].filter(Boolean).join(' ') }
    style:--announce-bg-color={ color }
    style:--announce-vector-image={ `url('${vector}')` }
    style:--announce-image={ `url('${image}')` }
>
    <Grid className="background" m={3} s={1} alignItems="stretch" gap={2}>
        <div class="column-wrapper img-block"></div>
        <div class="column-wrapper i2"></div>
        <div class="column-wrapper i3"></div>
    </Grid>
    <div class="content">
        <Grid m={3} s={1} alignItems="stretch" gap={2}>
            <div class="column-content i1"></div>
            <div class="column-content i2">
                <slot name="first" />
            </div>
            <div class="column-content i3">
                <slot name="second" />
            </div>
        </Grid>
    </div>
</section>

<style>
    .kit-announce {
        background-position: 0 100%;
        background-repeat: no-repeat;
        background-size: 21%;
        background-color: var(--announce-bg-color);
        background-image: var(--announce-vector-image);
        color: var(--white);
        display: grid;
        position: relative;
        align-content: center;
        justify-content: stretch;
        place-items: center;
        padding: 0 !important;
    }

    @media screen and (min-width: 769px) {
        .kit-announce.left-side-image .column-wrapper.img-block {
            order: 1;
        }

        .kit-announce .column-wrapper.i2 {
            order: 2;
        }

        .kit-announce.left-side-image .column-wrapper.i3 {
            order: 3;
        }

        .kit-announce.right-side-image .column-wrapper.img-block {
            order: 3;
        }

        .kit-announce.right-side-image .column-wrapper.i3 {
            order: 1;
        }

        .kit-announce.left-side-image .column-content.i1 {
            order: 1;
        }

        .kit-announce.left-side-image .column-content.i2 {
            order: 2;
        }

        .kit-announce.left-side-image .column-content.i3 {
            order: 3;
        }

        .kit-announce.right-side-image .column-content.i1 {
            order: 3;
        }

        .kit-announce.right-side-image .column-content.i2 {
            order: 1;
        }

        .kit-announce.right-side-image .column-content.i3 {
            order: 2;
        }
    }

    @media screen and (max-width: 768px) {
        .kit-announce {
            background-image: unset;
        }

        .kit-announce .column-wrapper.img-block,
        .kit-announce .column-content.i1 {
            height: 225px;
        }

        .kit-announce .column-content.i2 {
            padding-top: 0;
        }

        .kit-announce .column-content.i3 {
            padding-bottom: 3em;
        }
    }

    @media screen and (min-width: 769px) {
        .kit-announce .content {
            min-height: 600px;
            padding-top: 2em;
            padding-bottom: 2em;
        }
    }

    :global(.kit-announce > *) {
        grid-row: 1;
        grid-column: 1;
    }

    :global(.kit-announce > .background) {
        width: 100%;
        height: 100%;
        align-items: stretch;
    }

    :global(.kit-announce > .background > .img-block) {
        background-repeat: no-repeat;
        background-position: 100% center;
        background-size: cover;
        background-image: var(--announce-image);
    }
</style>
