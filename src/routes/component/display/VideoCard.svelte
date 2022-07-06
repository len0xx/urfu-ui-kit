<script lang="ts">
    import { Code, Heading, VideoCard, Text, ParameterType } from '$lib/components'
    import VideoCardExample from '$lib/../codes/VideoCardExample'
    import Grid from '$lib/components/Grid.svelte'

    let videos = [0, 1, 2, 3]
</script>

<svelte:head>
    <title>УрФУ UI Kit – VideoCard</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>VideoCard <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <br />
        <Grid m={4}>
            { #each videos as _ }
                <VideoCard name="Иванов Иван" position="Студент 3 курса" description="Учится в ИРИТ-РтФ" />
            { /each }
        </Grid>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={VideoCardExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">name <ParameterType value="string" /></Heading>
        <Text>Отображаемое имя</Text>
        <Heading size={4} color="var(--blue)">src <ParameterType value="string" /></Heading>
        <Text>Ссылка на видео</Text>
        <Heading size={4} color="var(--blue)">position <ParameterType value="string" /></Heading>
        <Text>Подпись первого порядка</Text>
        <Heading size={4} color="var(--blue)">description <ParameterType value="string" /></Heading>
        <Text>Подпись второго порядка</Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
    </main>
</div>
