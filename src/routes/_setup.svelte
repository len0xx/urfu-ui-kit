<script lang="ts">
    import { onMount } from 'svelte'
    import Text from '$lib/components/Text.svelte'
    import Link from '$lib/components/Link.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Warning from '$lib/components/Warning.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import components from '$lib/components-list'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Установка</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <Heading size={1}>Установка библиотеки</Heading>
        <!-- <Text className="medium">
            Библиотека Svelte компонентов для упрощённого построения современных веб-приложений Уральского федерального университета
        </Text> -->
        <Warning>
            Библиотека находится в стадии beta и может иметь некоторые проблемы с отображением компонентов или страниц
        </Warning>
        <br /><br />
        <Text>
            <Link variant="interactive" href="https://github.com" lineWidth={3} target="_BLANK">GitHub</Link>
        </Text>
        <br />
        <br />
    </main>
</div>
