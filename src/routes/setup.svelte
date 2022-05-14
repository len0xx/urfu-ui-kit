<script lang="ts">
    import { onMount } from 'svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Code from '$lib/components/Code.svelte'
    import Warning from '$lib/components/Warning.svelte'
    import components from '$lib/components'
import Link from '$lib/components/Link.svelte';

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
        <!-- <p class="medium">
            Библиотека Svelte компонентов для упрощённого построения современных веб-приложений Уральского федерального университета
        </p> -->
        <Warning>
            Библиотека находится в стадии beta и может иметь некоторые проблемы с отображением компонентов или страниц
        </Warning>
        <br /><br />
        <p>
            <Link href="https://github.com" borderWidth={3} target="_BLANK">GitHub</Link>
        </p>
        <br />
        <br />
    </main>
</div>
