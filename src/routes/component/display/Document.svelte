<script lang="ts">
    import { Code, Heading, Tag, Document, Grid, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/../codes/DocumentExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Document</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Document <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Компонент для удобного отображения списка документов
        </Text>
        <br />
        <Grid m={2} ratio="1:2" gap={2}>
            <Heading size={2} margin={{ top: 0 }}>Скачайте документацию по компонентам</Heading>
            <div>
                <Document filename="UrFU UI Kit Svelte" extension="pdf" />
                <Document filename="SvelteKit Manual" extension="docx" />
                <Document filename="Svelte components list" extension="xlsx" />
            </div>
        </Grid>
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">filename <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Название файла</Text>
        <Heading size={4} color="var(--blue)">link <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Ссылка для скачивания файла</Text>
        <Heading size={4} color="var(--blue)">extension <ParameterType value="string" /></Heading>
        <Text>Расширение файла</Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
