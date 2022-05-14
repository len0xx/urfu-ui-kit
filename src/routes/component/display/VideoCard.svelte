<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import VideoCard from '$lib/components/VideoCard.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import VideoCardExample from '$lib/../codes/VideoCardExample'
    import Grid from '$lib/components/Grid.svelte'

    let videos = [0, 1, 2, 3]

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – VideoCard</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>VideoCard <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </p>
        <br />
        <Grid m={4}>
            { #each videos as video }
                <VideoCard name="Иванов Иван" position="Студент 3 курса" description="Учится в ИРИТ-РтФ" />
            { /each }
        </Grid>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={VideoCardExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">name <ParameterType value="string" /></Heading>
        <p>Отображаемое имя</p>
        <Heading size={4} className="blue-text">src <ParameterType value="string" /></Heading>
        <p>Ссылка на видео</p>
        <Heading size={4} className="blue-text">position <ParameterType value="string" /></Heading>
        <p>Подпись первого порядка</p>
        <Heading size={4} className="blue-text">description <ParameterType value="string" /></Heading>
        <p>Подпись второго порядка</p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>
