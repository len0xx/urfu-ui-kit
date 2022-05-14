<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Document from '$lib/components/Document.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Grid from '$lib/components/Grid.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'
    import Tag from '$lib/components/Tag.svelte'

    import DocumentExample from '$lib/../codes/DocumentExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Document</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Document <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Компонент для удобного отображения списка документов
        </p>
        <br />
        <Grid m={2} ratio="1:2" gap={2}>
            <Heading size={2} marginTop={0}>Скачайте документацию по компонентам</Heading>
            <div>
                <Document filename="UrFU UI Kit Svelte" extension="pdf" />
                <Document filename="SvelteKit Manual" extension="docx" />
                <Document filename="Svelte components list" extension="xlsx" />
            </div>
        </Grid>
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={DocumentExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">filename <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <p>Название файла</p>
        <Heading size={4} className="blue-text">link <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <p>Ссылка для скачивания файла</p>
        <Heading size={4} className="blue-text">extension <ParameterType value="string" /></Heading>
        <p>Расширение файла</p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>