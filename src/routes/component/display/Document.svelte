<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Text from '$lib/components/Text.svelte'
    import Grid from '$lib/components/Grid.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Document from '$lib/components/Document.svelte'
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
        <Text className="medium">
            Компонент для удобного отображения списка документов
        </Text>
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
        <Text>Название файла</Text>
        <Heading size={4} className="blue-text">link <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Ссылка для скачивания файла</Text>
        <Heading size={4} className="blue-text">extension <ParameterType value="string" /></Heading>
        <Text>Расширение файла</Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>
