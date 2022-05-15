<script lang="ts">
    import { onMount } from 'svelte'
    import Tag from '$lib/components/Tag.svelte'
    import Text from '$lib/components/Text.svelte'
    import Grid from '$lib/components/Grid.svelte'
    import Card from '$lib/components/Card.svelte'
    import Warning from '$lib/components/Warning.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import RoundButton from '$lib/components/RoundButton.svelte'
    import components from '$lib/components'

    let expanded = false
    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <Heading size={1}>УрФУ UI Kit <Tag>beta 0.7.8</Tag></Heading>
        <Text className="medium">
            Расширяемая библиотека Svelte компонентов для упрощённого построения современных веб-приложений Уральского федерального университета
        </Text>
        <a href="https://svelte.dev" target="_BLANK"><img src="/img/svelte.svg" width="48" height="48" alt="Svelte Logo" title="Svelte"></a>
        <a href="https://typescriptlang.org" target="_BLANK"><img style:margin-left="20px" src="/img/typescript.svg" height="48" alt="TypeScript Logo" title="TypeScript"></a>
        <br /><br />
        <Warning>
            Библиотека находится в стадии beta и может иметь некоторые проблемы с отображением компонентов или страниц
        </Warning>
        <br /><br />
        <div>
            <Grid m={1} l={2} xl={3}>
                { #each components as component, i }
                    { #if expanded || i < 6 }
                        <a href={ '/component/' + component.type + '/' + component.name }>
                            <Card variant="white" color={ (i % 3 == 0) ? 'red-2' : ((i % 3 == 1) ? 'red-1' : 'blue-2') }>
                                <svelte:fragment slot="title">{ component.name }</svelte:fragment>
                                <svelte:fragment slot="text">{ component.text }</svelte:fragment>
                                <svelte:fragment slot="right">Открыть</svelte:fragment>
                            </Card>
                        </a>
                    { /if }
                { /each }
            </Grid>
            { #if !expanded }
                <br />
                <div class="align-center">
                    <RoundButton variant="plus" size="L" on:click={() => expanded = true} />
                </div>
            { /if }
        </div>
        <br />
        <br />
    </main>
</div>
